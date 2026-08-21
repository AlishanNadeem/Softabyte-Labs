import { notFound } from "next/navigation";
import Link from "next/link";
import { BlogArticleView } from "@/components/blog/BlogArticleView";
import { require_admin } from "@/lib/admin/auth";
import { admin_get_blog_post_by_id } from "@/lib/blog/admin_repository";
import { create_page_metadata } from "@/lib/seo/metadata";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await admin_get_blog_post_by_id(id);

  return create_page_metadata({
    title: post ? `Preview: ${post.title}` : "Preview",
    description: "Admin preview of a blog post. Not for public indexing.",
    path: `/admin/blog/${id}/preview/`,
    robots: { index: false, follow: false },
  });
}

export default async function AdminBlogPreviewPage({ params }) {
  await require_admin();
  const { id } = await params;
  const post = await admin_get_blog_post_by_id(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-border bg-background-secondary px-4 py-3">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-brand-primary">
            Admin preview
          </p>
          <p className="text-sm text-text-secondary">
            Status: {post.status}
            {post.slug ? ` · /blog/${post.slug}/` : ""}
          </p>
        </div>
        <Link
          href={`/admin/blog/${post.id}/edit/`}
          className="text-sm text-brand-primary hover:underline"
        >
          Back to edit
        </Link>
      </div>
      <BlogArticleView post={post} related_posts={[]} />
    </div>
  );
}
