import Link from "next/link";
import { admin_list_contact_submissions } from "@/lib/contact/admin_repository";
import { CONTACT_STATUS_OPTIONS } from "@/lib/contact/constants";

function format_admin_date(value) {
  if (!value) return "—";
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function build_contact_query({ status, search, page }) {
  const params = new URLSearchParams();
  if (status && status !== "all") params.set("status", status);
  if (search) params.set("q", search);
  if (page && Number(page) > 1) params.set("page", String(page));
  const query = params.toString();
  return query
    ? `/admin/contact-submissions/?${query}`
    : "/admin/contact-submissions/";
}

export const metadata = {
  title: "Contact Submissions",
  robots: { index: false, follow: false },
};

export default async function AdminContactListPage({ searchParams }) {
  const params = await searchParams;
  const status_raw = String(params?.status || "all");
  const status = CONTACT_STATUS_OPTIONS.includes(status_raw)
    ? status_raw
    : "all";
  const search = String(params?.q || "").trim();
  const page = Math.max(1, Number(params?.page) || 1);

  const result = await admin_list_contact_submissions({
    status,
    search,
    page,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">
          Contact submissions
        </h1>
        <p className="mt-1 text-sm text-text-secondary">
          {result.total} submission{result.total === 1 ? "" : "s"}
        </p>
      </div>

      <form
        method="get"
        className="flex flex-wrap items-end gap-3 rounded-md border border-border bg-background-secondary p-4"
      >
        <div className="space-y-2">
          <label
            htmlFor="contact-status-filter"
            className="block text-sm font-medium"
          >
            Status
          </label>
          <select
            id="contact-status-filter"
            name="status"
            defaultValue={status}
            className="ds-input min-w-[10rem]"
          >
            <option value="all">All</option>
            {CONTACT_STATUS_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-[14rem] flex-1 space-y-2">
          <label
            htmlFor="contact-search"
            className="block text-sm font-medium"
          >
            Search
          </label>
          <input
            id="contact-search"
            name="q"
            type="search"
            defaultValue={search}
            className="ds-input w-full"
            placeholder="Name, email, or company"
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
              <th className="px-3 py-2 font-medium">Name</th>
              <th className="px-3 py-2 font-medium">Email</th>
              <th className="px-3 py-2 font-medium">Service</th>
              <th className="px-3 py-2 font-medium">Status</th>
              <th className="px-3 py-2 font-medium">Received</th>
            </tr>
          </thead>
          <tbody>
            {result.submissions.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-3 py-6 text-text-secondary">
                  No submissions match these filters.
                </td>
              </tr>
            ) : (
              result.submissions.map((submission) => (
                <tr key={submission.id} className="border-b border-border">
                  <td className="px-3 py-2">
                    <Link
                      href={`/admin/contact-submissions/${submission.id}/`}
                      className="font-medium text-brand-primary hover:underline"
                    >
                      {submission.full_name || "Untitled"}
                    </Link>
                  </td>
                  <td className="px-3 py-2 text-text-secondary">
                    {submission.email}
                  </td>
                  <td className="px-3 py-2 text-text-secondary">
                    {submission.service_interest || "—"}
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

      {result.total_pages > 1 ? (
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="text-text-secondary">
            Page {result.page} of {result.total_pages}
          </span>
          {result.page > 1 ? (
            <Link
              href={build_contact_query({
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
              href={build_contact_query({
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
