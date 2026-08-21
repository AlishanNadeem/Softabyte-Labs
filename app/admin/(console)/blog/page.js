import Link from "next/link";
import { admin_list_blog_posts } from "@/lib/blog/admin_repository";
import {
  BLOG_STATUS_DRAFT,
  BLOG_STATUS_PUBLISHED,
} from "@/lib/admin/constants";

function format_admin_date(value) {
  if (!value) return "—";
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function build_blog_query({ status, search, page }) {
  const params = new URLSearchParams();
  if (status && status !== "all") params.set("status", status);
  if (search) params.set("q", search);
  if (page && Number(page) > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/admin/blog/?${query}` : "/admin/blog/";
}

export const metadata = {
  title: "Admin Blog",
  robots: { index: false, follow: false },
};

export default async function AdminBlogListPage({ searchParams }) {
  const params = await searchParams;
  const status_raw = String(params?.status || "all");
  const status =
    status_raw === BLOG_STATUS_DRAFT || status_raw === BLOG_STATUS_PUBLISHED
      ? status_raw
      : "all";
  const search = String(params?.q || "").trim();
  const page = Math.max(1, Number(params?.page) || 1);

  const result = await admin_list_blog_posts({
    status,
    search,
    page,
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Blog</h1>
          <p className="mt-1 text-sm text-text-secondary">
            {result.total} post{result.total === 1 ? "" : "s"}
          </p>
        </div>
        <Link
          href="/admin/blog/new/"
          className="ds-btn ds-btn--primary inline-flex min-h-11 items-center rounded-md px-5 text-sm font-medium"
        >
          New post
        </Link>
      </div>

      <form
        method="get"
        className="flex flex-wrap items-end gap-3 rounded-md border border-border bg-background-secondary p-4"
      >
        <div className="space-y-2">
          <label htmlFor="blog-status" className="block text-sm font-medium">
            Status
          </label>
          <select
            id="blog-status"
            name="status"
            defaultValue={status}
            className="ds-input min-w-[10rem]"
          >
            <option value="all">All</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        <div className="min-w-[14rem] flex-1 space-y-2">
          <label htmlFor="blog-search" className="block text-sm font-medium">
            Search
          </label>
          <input
            id="blog-search"
            name="q"
            type="search"
            defaultValue={search}
            className="ds-input w-full"
            placeholder="Search by title"
          />
        </div>
        <button
          type="submit"
          className="ds-btn ds-btn--secondary inline-flex min-h-11 items-center rounded-md border border-border px-4 text-sm"
        >
          Filter
        </button>
      </form>

      <div className="overflow-x-auto rounded-md border border-border">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-border bg-background-secondary text-text-muted">
            <tr>
              <th className="px-3 py-2 font-medium">Title</th>
              <th className="px-3 py-2 font-medium">Status</th>
              <th className="px-3 py-2 font-medium">Category</th>
              <th className="px-3 py-2 font-medium">Updated</th>
              <th className="px-3 py-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {result.posts.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-3 py-6 text-text-secondary">
                  No posts match these filters.
                </td>
              </tr>
            ) : (
              result.posts.map((post) => (
                <tr key={post.id} className="border-b border-border">
                  <td className="px-3 py-2">
                    <Link
                      href={`/admin/blog/${post.id}/edit/`}
                      className="font-medium text-brand-primary hover:underline"
                    >
                      {post.title || "Untitled"}
                    </Link>
                    <p className="text-xs text-text-muted">/{post.slug}</p>
                  </td>
                  <td className="px-3 py-2 text-text-secondary">
                    {post.status}
                    {post.featured ? " · featured" : ""}
                  </td>
                  <td className="px-3 py-2 text-text-secondary">
                    {post.category || "—"}
                  </td>
                  <td className="px-3 py-2 text-text-secondary">
                    {format_admin_date(post.updated_at)}
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/admin/blog/${post.id}/edit/`}
                        className="text-brand-primary hover:underline"
                      >
                        Edit
                      </Link>
                      <Link
                        href={`/admin/blog/${post.id}/preview/`}
                        className="text-text-secondary hover:text-brand-primary"
                      >
                        Preview
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {result.total_pages > 1 ? (
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="text-text-secondary">
            Page {result.page} of {result.total_pages}
          </span>
          {result.page > 1 ? (
            <Link
              href={build_blog_query({
                status,
                search,
                page: result.page - 1,
              })}
              className="text-brand-primary hover:underline"
            >
              Previous
            </Link>
          ) : null}
          {result.page < result.total_pages ? (
            <Link
              href={build_blog_query({
                status,
                search,
                page: result.page + 1,
              })}
              className="text-brand-primary hover:underline"
            >
              Next
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
