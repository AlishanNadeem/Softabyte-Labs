"use client";

import { useState } from "react";
import { admin_login_action } from "@/lib/admin/actions";

export function LoginForm({ next_path = "/admin/" }) {
  const [error_message, set_error_message] = useState("");
  const [is_pending, set_is_pending] = useState(false);

  async function handle_submit(event) {
    event.preventDefault();
    set_error_message("");
    set_is_pending(true);

    const form_data = new FormData(event.currentTarget);
    const result = await admin_login_action(form_data);

    if (result && result.ok === false) {
      set_error_message(
        result.message || "Invalid email or password."
      );
      set_is_pending(false);
    }
  }

  return (
    <form
      onSubmit={handle_submit}
      className="w-full max-w-md space-y-5 rounded-md border border-border bg-background-secondary p-6 sm:p-8"
    >
      <div>
        <h1 className="text-xl font-semibold text-text-primary">Admin login</h1>
        <p className="mt-1 text-sm text-text-secondary">
          Sign in to manage blog posts and contact submissions.
        </p>
      </div>

      <input type="hidden" name="next" value={next_path} />

      <div className="space-y-2">
        <label
          htmlFor="admin-email"
          className="block text-sm font-medium text-text-primary"
        >
          Email
        </label>
        <input
          id="admin-email"
          name="email"
          type="email"
          autoComplete="username"
          required
          className="ds-input w-full"
          disabled={is_pending}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="admin-password"
          className="block text-sm font-medium text-text-primary"
        >
          Password
        </label>
        <input
          id="admin-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="ds-input w-full"
          disabled={is_pending}
        />
      </div>

      {error_message ? (
        <p
          className="rounded-md border border-border bg-background-deep px-3 py-2 text-sm text-text-secondary"
          role="alert"
        >
          {error_message}
        </p>
      ) : null}

      <button
        type="submit"
        className="ds-btn ds-btn--primary inline-flex min-h-11 w-full items-center justify-center rounded-md px-5 text-sm font-medium"
        disabled={is_pending}
      >
        {is_pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
