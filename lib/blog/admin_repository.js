import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import {
  BLOG_STATUS_DRAFT,
  BLOG_STATUS_PUBLISHED,
} from "@/lib/admin/constants";
import { get_blog_collection, serialize_blog_post } from "@/lib/blog/db";
import {
  is_valid_object_id,
  validate_blog_payload,
} from "@/lib/blog/validation";
import { ADMIN_PAGE_SIZE } from "@/lib/admin/constants";

function parse_date_only(iso) {
  if (!iso) return null;
  const date = new Date(`${String(iso).slice(0, 10)}T12:00:00.000Z`);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function revalidate_blog_paths(slug) {
  revalidatePath("/blog/");
  revalidatePath("/");
  if (slug) {
    revalidatePath(`/blog/${slug}/`);
  }
  revalidatePath("/sitemap.xml");
}

export async function admin_list_blog_posts({
  status = "all",
  search = "",
  page = 1,
  page_size = ADMIN_PAGE_SIZE,
} = {}) {
  const collection = await get_blog_collection();
  const query = {};

  if (status === BLOG_STATUS_DRAFT || status === BLOG_STATUS_PUBLISHED) {
    query.status = status;
  }

  const trimmed_search = String(search || "").trim().slice(0, 80);
  if (trimmed_search) {
    const escaped = trimmed_search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    query.title = { $regex: escaped, $options: "i" };
  }

  const safe_page = Math.max(1, Number(page) || 1);
  const skip = (safe_page - 1) * page_size;

  const [total, documents] = await Promise.all([
    collection.countDocuments(query),
    collection
      .find(query)
      .sort({ updated_at: -1 })
      .skip(skip)
      .limit(page_size)
      .toArray(),
  ]);

  return {
    posts: documents.map(serialize_blog_post),
    total,
    page: safe_page,
    page_size,
    total_pages: Math.max(1, Math.ceil(total / page_size)),
  };
}

export async function admin_get_blog_post_by_id(id) {
  if (!is_valid_object_id(id)) return null;
  const collection = await get_blog_collection();
  const document = await collection.findOne({ _id: new ObjectId(id) });
  return serialize_blog_post(document);
}

export async function admin_count_blog_posts() {
  const collection = await get_blog_collection();
  const [published, draft] = await Promise.all([
    collection.countDocuments({ status: BLOG_STATUS_PUBLISHED }),
    collection.countDocuments({ status: BLOG_STATUS_DRAFT }),
  ]);
  return { published, draft, total: published + draft };
}

async function clear_other_featured(collection, except_id = null) {
  const filter = { featured: true };
  if (except_id) {
    filter._id = { $ne: except_id };
  }
  await collection.updateMany(filter, {
    $set: { featured: false, updated_at: new Date() },
  });
}

export async function admin_create_blog_post(raw, { publish = false } = {}) {
  const mode = publish ? "published" : "draft";
  const result = validate_blog_payload(raw, mode);
  if (!result.valid) {
    return { ok: false, errors: result.errors };
  }

  const collection = await get_blog_collection();
  const existing = await collection.findOne({ slug: result.data.slug });
  if (existing) {
    return {
      ok: false,
      errors: { slug: "Slug already exists." },
    };
  }

  const now = new Date();
  const document = {
    ...result.data,
    created_at: now,
    updated_at: now,
    published_at:
      mode === "published" ? now : parse_date_only(raw.published_at) || null,
  };

  if (document.featured && mode === "published") {
    await clear_other_featured(collection);
  } else if (mode !== "published") {
    document.featured = false;
  }

  const insert = await collection.insertOne(document);
  const created = serialize_blog_post({ ...document, _id: insert.insertedId });

  if (mode === "published") {
    revalidate_blog_paths(created.slug);
  }

  return { ok: true, post: created };
}

export async function admin_update_blog_post(
  id,
  raw,
  { publish = false, unpublish = false } = {}
) {
  if (!is_valid_object_id(id)) {
    return { ok: false, errors: { form: "Invalid post id." } };
  }

  const collection = await get_blog_collection();
  const existing = await collection.findOne({ _id: new ObjectId(id) });
  if (!existing) {
    return { ok: false, errors: { form: "Post not found." } };
  }

  const was_published = existing.status === BLOG_STATUS_PUBLISHED;
  let mode = "draft";
  if (unpublish) mode = "draft";
  else if (publish || was_published) mode = publish || was_published ? (unpublish ? "draft" : "published") : "draft";

  if (unpublish) {
    mode = "draft";
  } else if (publish) {
    mode = "published";
  } else if (was_published) {
    mode = "published";
  } else {
    mode = "draft";
  }

  const result = validate_blog_payload(raw, mode, {
    lock_slug: was_published,
    existing_slug: existing.slug,
  });

  if (!result.valid) {
    return { ok: false, errors: result.errors };
  }

  if (!was_published && result.data.slug !== existing.slug) {
    const slug_taken = await collection.findOne({
      slug: result.data.slug,
      _id: { $ne: existing._id },
    });
    if (slug_taken) {
      return { ok: false, errors: { slug: "Slug already exists." } };
    }
  }

  const now = new Date();
  let published_at = existing.published_at || null;

  if (mode === "published" && !published_at) {
    published_at = now;
  }
  if (mode === "draft" && unpublish) {
    // keep published_at history if previously published
  }

  const next_featured =
    mode === "published" ? Boolean(result.data.featured) : false;

  if (next_featured) {
    await clear_other_featured(collection, existing._id);
  }

  const update_doc = {
    ...result.data,
    featured: next_featured,
    status: mode === "published" ? BLOG_STATUS_PUBLISHED : BLOG_STATUS_DRAFT,
    published_at,
    updated_at: now,
    created_at: existing.created_at || now,
  };

  await collection.updateOne(
    { _id: existing._id },
    { $set: update_doc }
  );

  const updated = serialize_blog_post({ ...update_doc, _id: existing._id });
  revalidate_blog_paths(existing.slug);
  if (updated.slug !== existing.slug) {
    revalidate_blog_paths(updated.slug);
  }

  return { ok: true, post: updated };
}

export async function admin_delete_blog_post(id) {
  if (!is_valid_object_id(id)) {
    return { ok: false, message: "Invalid post id." };
  }

  const collection = await get_blog_collection();
  const existing = await collection.findOne({ _id: new ObjectId(id) });
  if (!existing) {
    return { ok: false, message: "Post not found." };
  }

  if (existing.status === BLOG_STATUS_PUBLISHED) {
    return {
      ok: false,
      message: "Unpublish the article before deleting it permanently.",
    };
  }

  await collection.deleteOne({ _id: existing._id });
  revalidate_blog_paths(existing.slug);
  return { ok: true };
}

export async function admin_upsert_blog_by_slug(seed_post) {
  const collection = await get_blog_collection();
  const existing = await collection.findOne({ slug: seed_post.slug });
  const now = new Date();
  const published_at =
    parse_date_only(seed_post.published_at) ||
    new Date("2026-08-22T12:00:00.000Z");
  const updated_at =
    parse_date_only(seed_post.updated_at) || published_at;

  const document = {
    slug: seed_post.slug,
    status: seed_post.status || BLOG_STATUS_PUBLISHED,
    featured: Boolean(seed_post.featured),
    title: seed_post.title,
    meta_title: seed_post.meta_title,
    meta_description: seed_post.meta_description,
    excerpt: seed_post.excerpt,
    category: seed_post.category,
    tags: seed_post.tags || [],
    published_at,
    updated_at,
    created_at: existing?.created_at || published_at,
    author_name: seed_post.author_name || "Softabyte Labs",
    hero_image: seed_post.hero_image || null,
    hero_image_alt: seed_post.hero_image_alt || null,
    hero_placeholder: seed_post.hero_placeholder || null,
    content: seed_post.content || [],
    related_services: seed_post.related_services || [],
    related_industries: seed_post.related_industries || [],
    related_slugs: seed_post.related_slugs || [],
  };

  if (existing) {
    await collection.updateOne(
      { _id: existing._id },
      {
        $set: {
          ...document,
          created_at: existing.created_at || document.created_at,
          updated_at: now,
        },
      }
    );
    return { action: "updated", slug: seed_post.slug };
  }

  await collection.insertOne({
    ...document,
    created_at: document.created_at,
  });
  return { action: "inserted", slug: seed_post.slug };
}
