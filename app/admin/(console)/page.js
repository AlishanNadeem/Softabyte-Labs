import Link from "next/link";
import { admin_count_blog_posts, admin_list_blog_posts } from "@/lib/blog/admin_repository";
import {
  admin_count_contact_submissions,
  admin_list_contact_submissions,
} from "@/lib/contact/admin_repository";

function format_admin_date(value) {
  if (!value) return "—";
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export const metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

export default async function AdminDashboardPage() {
  const [blog_counts, contact_counts, recent_posts, recent_submissions] =
    await Promise.all([
      admin_count_blog_posts(),
      admin_count_contact_submissions(),
      admin_list_blog_posts({ page_size: 5 }),
      admin_list_contact_submissions({ page_size: 5 }),
    ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">Dashboard</h1>
        <p className="mt-1 text-sm text-text-secondary">
          Operational overview for blog content and contact submissions.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-md border border-border bg-background-secondary p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-text-muted">
            Published posts
          </p>
          <p className="mt-2 text-3xl font-semibold text-text-primary">
            {blog_counts.published}
          </p>
        </div>

        <div className="rounded-md border border-border bg-background-secondary p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-text-muted">
            Draft posts
          </p>
          <p className="mt-2 text-3xl font-semibold text-text-primary">
            {blog_counts.draft}
          </p>
        </div>

        <div className="rounded-md border border-border bg-background-secondary p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-text-muted">
            New contact submissions
          </p>
          <p className="mt-2 text-3xl font-semibold text-text-primary">
            {contact_counts.new_count}
          </p>
        </div>

        <div className="rounded-md border border-border bg-background-secondary p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-text-muted">
            Total contact submissions
          </p>
          <p className="mt-2 text-3xl font-semibold text-text-primary">
            {contact_counts.total}
          </p>
          <Link
            href="/admin/contact-submissions/"
            className="mt-3 inline-block text-sm text-brand-primary hover:underline"
          >
            View submissions
          </Link>
        </div>
      </div>

      <section className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-medium text-text-primary">
            Recent blog posts
          </h2>
          <Link
            href="/admin/blog/"
            className="text-sm text-brand-primary hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="overflow-x-auto rounded-md border border-border">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-border bg-background-secondary text-text-muted">
              <tr>
                <th className="px-3 py-2 font-medium">Title</th>
                <th className="px-3 py-2 font-medium">Status</th>
                <th className="px-3 py-2 font-medium">Updated</th>
              </tr>
            </thead>
            <tbody>
              {recent_posts.posts.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-3 py-4 text-text-secondary"
                  >
                    No blog posts yet.
                  </td>
                </tr>
              ) : (
                recent_posts.posts.map((post) => (
                  <tr key={post.id} className="border-b border-border">
                    <td className="px-3 py-2">
                      <Link
                        href={`/admin/blog/${post.id}/edit/`}
                        className="text-brand-primary hover:underline"
                      >
                        {post.title || "Untitled"}
                      </Link>
                    </td>
                    <td className="px-3 py-2 text-text-secondary">
                      {post.status}
                    </td>
                    <td className="px-3 py-2 text-text-secondary">
                      {format_admin_date(post.updated_at)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-medium text-text-primary">
            Recent contact submissions
          </h2>
          <Link
            href="/admin/contact-submissions/"
            className="text-sm text-brand-primary hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="overflow-x-auto rounded-md border border-border">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-border bg-background-secondary text-text-muted">
              <tr>
                <th className="px-3 py-2 font-medium">Name</th>
                <th className="px-3 py-2 font-medium">Status</th>
                <th className="px-3 py-2 font-medium">Received</th>
              </tr>
            </thead>
            <tbody>
              {recent_submissions.submissions.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-3 py-4 text-text-secondary"
                  >
                    No submissions yet.
                  </td>
                </tr>
              ) : (
                recent_submissions.submissions.map((submission) => (
                  <tr key={submission.id} className="border-b border-border">
                    <td className="px-3 py-2">
                      <Link
                        href={`/admin/contact-submissions/${submission.id}/`}
                        className="text-brand-primary hover:underline"
                      >
                        {submission.full_name || "Untitled"}
                      </Link>
                    </td>
                    <td className="px-3 py-2 text-text-secondary">
                      {submission.submission_status}
                    </td>
                    <td className="px-3 py-2 text-text-secondary">
                      {format_admin_date(submission.created_at)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
