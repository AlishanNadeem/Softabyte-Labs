import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactSubmissionActions } from "@/components/admin/ContactSubmissionActions";
import { admin_get_contact_submission } from "@/lib/contact/admin_repository";

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
  title: "Contact Submission",
  robots: { index: false, follow: false },
};

export default async function AdminContactDetailPage({ params }) {
  const { id } = await params;
  const submission = await admin_get_contact_submission(id);

  if (!submission) {
    notFound();
  }

  const fields = [
    { label: "Full name", value: submission.full_name },
    { label: "Email", value: submission.email },
    { label: "Phone", value: submission.phone },
    { label: "Company", value: submission.company_name },
    { label: "Service interest", value: submission.service_interest },
    { label: "Budget range", value: submission.budget_range },
    {
      label: "Preferred contact",
      value: submission.preferred_contact_method,
    },
    { label: "Source page", value: submission.source_page },
    { label: "Received", value: format_admin_date(submission.created_at) },
    { label: "Updated", value: format_admin_date(submission.updated_at) },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">
            {submission.full_name || "Contact submission"}
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Status: {submission.submission_status}
          </p>
        </div>
        <Link
          href="/admin/contact-submissions/"
          className="text-sm text-text-secondary hover:text-brand-primary"
        >
          Back to list
        </Link>
      </div>

      <ContactSubmissionActions
        submission_id={submission.id}
        submission_status={submission.submission_status}
      />

      <dl className="grid gap-4 rounded-md border border-border bg-background-secondary p-4 sm:grid-cols-2 sm:p-6">
        {fields.map((field) => (
          <div key={field.label}>
            <dt className="text-xs uppercase tracking-[0.12em] text-text-muted">
              {field.label}
            </dt>
            <dd className="mt-1 text-sm text-text-primary">
              {field.value || "—"}
            </dd>
          </div>
        ))}
        <div className="sm:col-span-2">
          <dt className="text-xs uppercase tracking-[0.12em] text-text-muted">
            Project description
          </dt>
          <dd className="mt-2 whitespace-pre-wrap text-sm text-text-primary">
            {submission.project_description || "—"}
          </dd>
        </div>
      </dl>
    </div>
  );
}
