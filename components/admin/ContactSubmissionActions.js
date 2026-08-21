"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  delete_contact_submission_action,
  update_contact_status_action,
} from "@/lib/admin/actions";
import { CONTACT_STATUS_OPTIONS } from "@/lib/contact/constants";

export function ContactSubmissionActions({
  submission_id,
  submission_status,
}) {
  const router = useRouter();
  const [status, set_status] = useState(submission_status || "new");
  const [message, set_message] = useState("");
  const [is_pending, set_is_pending] = useState(false);

  async function handle_status_submit(event) {
    event.preventDefault();
    set_is_pending(true);
    set_message("");

    const result = await update_contact_status_action(submission_id, status);
    if (!result?.ok) {
      set_message(result?.message || "Could not update status.");
      set_is_pending(false);
      return;
    }

    set_message("Status updated.");
    set_is_pending(false);
    router.refresh();
  }

  async function handle_delete() {
    const confirmed = window.confirm(
      "Delete this contact submission permanently? This cannot be undone."
    );
    if (!confirmed) return;

    set_is_pending(true);
    set_message("");
    const result = await delete_contact_submission_action(submission_id);
    if (!result?.ok) {
      set_message(result?.message || "Could not delete submission.");
      set_is_pending(false);
      return;
    }

    router.push("/admin/contact-submissions/");
    router.refresh();
  }

  return (
    <div className="space-y-4 rounded-md border border-border bg-background-secondary p-4">
      <form onSubmit={handle_status_submit} className="flex flex-wrap items-end gap-3">
        <div className="space-y-2">
          <label htmlFor="contact-status" className="block text-sm font-medium">
            Status
          </label>
          <select
            id="contact-status"
            className="ds-input min-w-[12rem]"
            value={status}
            onChange={(event) => set_status(event.target.value)}
            disabled={is_pending}
          >
            {CONTACT_STATUS_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="ds-btn ds-btn--primary inline-flex min-h-11 items-center rounded-md px-4 text-sm font-medium"
          disabled={is_pending}
        >
          Update status
        </button>
      </form>

      <div>
        <button
          type="button"
          className="ds-btn ds-btn--secondary inline-flex min-h-11 items-center rounded-md border border-border px-4 text-sm"
          onClick={handle_delete}
          disabled={is_pending}
        >
          Delete submission
        </button>
      </div>

      {message ? (
        <p className="text-sm text-text-secondary" role="status">
          {message}
        </p>
      ) : null}
    </div>
  );
}
