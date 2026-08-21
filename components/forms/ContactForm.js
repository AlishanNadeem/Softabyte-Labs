"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const initial_form = {
  full_name: "",
  email: "",
  company_name: "",
  phone: "",
  service_interest: "",
  budget_range: "",
  preferred_contact_method: "",
  project_description: "",
  website_url: "",
};

export function ContactForm({ form_config }) {
  const form_id = useId();
  const form_started_at_ref = useRef(null);
  const [values, set_values] = useState(initial_form);
  const [errors, set_errors] = useState({});
  const [status, set_status] = useState("idle");
  const [server_message, set_server_message] = useState("");

  const fields = form_config.fields;

  useEffect(() => {
    form_started_at_ref.current = Date.now();
  }, []);

  function field_id(name) {
    return `${form_id}-${name}`;
  }

  function error_id(name) {
    return `${form_id}-${name}-error`;
  }

  function update_field(name, value) {
    set_values((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      set_errors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
  }

  function client_validate() {
    const next_errors = {};

    if (!values.full_name.trim()) {
      next_errors.full_name = "Full name is required.";
    }
    if (!values.email.trim()) {
      next_errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next_errors.email = "Enter a valid email address.";
    }
    if (!values.service_interest) {
      next_errors.service_interest = "Please select a service interest.";
    }
    if (!values.project_description.trim()) {
      next_errors.project_description = "Please describe your project.";
    } else if (values.project_description.trim().length < 20) {
      next_errors.project_description =
        "Add a bit more detail so we can understand the initiative.";
    }

    return next_errors;
  }

  async function handle_submit(event) {
    event.preventDefault();
    set_server_message("");

    const next_errors = client_validate();
    if (Object.keys(next_errors).length > 0) {
      set_errors(next_errors);
      set_status("validation_error");
      return;
    }

    set_status("submitting");
    set_errors({});

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: values.full_name,
          email: values.email,
          company_name: values.company_name,
          phone: values.phone,
          service_interest: values.service_interest,
          budget_range: values.budget_range,
          preferred_contact_method: values.preferred_contact_method,
          project_description: values.project_description,
          website_url: values.website_url,
          source_page: form_config.source_page,
          form_started_at: form_started_at_ref.current ?? Date.now(),
        }),
      });

      const payload = await response.json().catch(() => null);

      if (response.status === 429) {
        set_status("rate_limited");
        set_server_message(
          "You've sent several requests recently. Please wait a little before trying again."
        );
        return;
      }

      if (!response.ok || !payload?.success) {
        if (payload?.errors) {
          set_errors(payload.errors);
          set_status("validation_error");
          set_server_message(
            payload.message || "Please review the highlighted fields."
          );
          return;
        }

        set_status("server_error");
        set_server_message(
          payload?.message ||
            "We could not save your inquiry right now. Please try again later."
        );
        return;
      }

      set_status("success");
      set_server_message(form_config.success_message);
      set_values(initial_form);
      form_started_at_ref.current = Date.now();
    } catch {
      set_status("server_error");
      set_server_message(
        "We could not save your inquiry right now. Please try again later."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="ds-contact-form ds-contact-form--success"
        role="status"
        aria-live="polite"
      >
        <p className="ds-eyebrow text-brand-primary mb-3">Inquiry received</p>
        <h2 className="ds-h3 text-text-primary mb-3">Thank you</h2>
        <p className="ds-body text-text-secondary">{server_message}</p>
      </div>
    );
  }

  const is_submitting = status === "submitting";

  return (
    <form
      className="ds-contact-form"
      onSubmit={handle_submit}
      noValidate
      aria-busy={is_submitting}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          id={field_id("full_name")}
          label={fields.full_name.label}
          required
          error={errors.full_name}
          error_id={error_id("full_name")}
        >
          <input
            id={field_id("full_name")}
            name="full_name"
            type="text"
            autoComplete="name"
            placeholder={fields.full_name.placeholder}
            value={values.full_name}
            onChange={(event) => update_field("full_name", event.target.value)}
            aria-invalid={Boolean(errors.full_name)}
            aria-describedby={
              errors.full_name ? error_id("full_name") : undefined
            }
            className="ds-input"
            disabled={is_submitting}
          />
        </FormField>

        <FormField
          id={field_id("email")}
          label={fields.email.label}
          required
          error={errors.email}
          error_id={error_id("email")}
        >
          <input
            id={field_id("email")}
            name="email"
            type="email"
            autoComplete="email"
            placeholder={fields.email.placeholder}
            value={values.email}
            onChange={(event) => update_field("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? error_id("email") : undefined}
            className="ds-input"
            disabled={is_submitting}
          />
        </FormField>

        <FormField
          id={field_id("company_name")}
          label={fields.company_name.label}
          error={errors.company_name}
          error_id={error_id("company_name")}
        >
          <input
            id={field_id("company_name")}
            name="company_name"
            type="text"
            autoComplete="organization"
            placeholder={fields.company_name.placeholder}
            value={values.company_name}
            onChange={(event) =>
              update_field("company_name", event.target.value)
            }
            aria-invalid={Boolean(errors.company_name)}
            aria-describedby={
              errors.company_name ? error_id("company_name") : undefined
            }
            className="ds-input"
            disabled={is_submitting}
          />
        </FormField>

        <FormField
          id={field_id("phone")}
          label={fields.phone.label}
          error={errors.phone}
          error_id={error_id("phone")}
        >
          <input
            id={field_id("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={fields.phone.placeholder}
            value={values.phone}
            onChange={(event) => update_field("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? error_id("phone") : undefined}
            className="ds-input"
            disabled={is_submitting}
          />
        </FormField>

        <FormField
          id={field_id("service_interest")}
          label={fields.service_interest.label}
          required
          error={errors.service_interest}
          error_id={error_id("service_interest")}
        >
          <select
            id={field_id("service_interest")}
            name="service_interest"
            value={values.service_interest}
            onChange={(event) =>
              update_field("service_interest", event.target.value)
            }
            aria-invalid={Boolean(errors.service_interest)}
            aria-describedby={
              errors.service_interest
                ? error_id("service_interest")
                : undefined
            }
            className={`ds-input ${!values.service_interest ? "ds-input--placeholder" : ""}`.trim()}
            disabled={is_submitting}
          >
            <option value="">{fields.service_interest.placeholder}</option>
            {form_config.service_interest_options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id={field_id("budget_range")}
          label={fields.budget_range.label}
          error={errors.budget_range}
          error_id={error_id("budget_range")}
        >
          <select
            id={field_id("budget_range")}
            name="budget_range"
            value={values.budget_range}
            onChange={(event) =>
              update_field("budget_range", event.target.value)
            }
            aria-invalid={Boolean(errors.budget_range)}
            aria-describedby={
              errors.budget_range ? error_id("budget_range") : undefined
            }
            className={`ds-input ${!values.budget_range ? "ds-input--placeholder" : ""}`.trim()}
            disabled={is_submitting}
          >
            <option value="">{fields.budget_range.placeholder}</option>
            {form_config.budget_range_options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id={field_id("preferred_contact_method")}
          label={fields.preferred_contact_method.label}
          error={errors.preferred_contact_method}
          error_id={error_id("preferred_contact_method")}
          className="md:col-span-2"
        >
          <select
            id={field_id("preferred_contact_method")}
            name="preferred_contact_method"
            value={values.preferred_contact_method}
            onChange={(event) =>
              update_field("preferred_contact_method", event.target.value)
            }
            aria-invalid={Boolean(errors.preferred_contact_method)}
            aria-describedby={
              errors.preferred_contact_method
                ? error_id("preferred_contact_method")
                : undefined
            }
            className={`ds-input ${!values.preferred_contact_method ? "ds-input--placeholder" : ""}`.trim()}
            disabled={is_submitting}
          >
            <option value="">
              {fields.preferred_contact_method.placeholder}
            </option>
            {form_config.preferred_contact_method_options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id={field_id("project_description")}
          label={fields.project_description.label}
          required
          help={fields.project_description.help}
          error={errors.project_description}
          error_id={error_id("project_description")}
          className="md:col-span-2"
        >
          <textarea
            id={field_id("project_description")}
            name="project_description"
            rows={6}
            placeholder={fields.project_description.placeholder}
            value={values.project_description}
            onChange={(event) =>
              update_field("project_description", event.target.value)
            }
            aria-invalid={Boolean(errors.project_description)}
            aria-describedby={
              errors.project_description
                ? error_id("project_description")
                : `${field_id("project_description")}-help`
            }
            className="ds-input ds-textarea"
            disabled={is_submitting}
          />
        </FormField>
      </div>

      {/* Honeypot: hidden from users, ignored by assistive tech */}
      <div className="ds-honeypot" aria-hidden="true">
        <label htmlFor={field_id("website_url")}>Website</label>
        <input
          id={field_id("website_url")}
          name="website_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website_url}
          onChange={(event) => update_field("website_url", event.target.value)}
        />
      </div>

      {/* Timing signal is sent in the JSON body (form_started_at); not a focusable field */}

      <div className="mt-5 mb-6 space-y-3">
        <p className="ds-body-small text-text-muted">
          {form_config.sensitive_data_note}
        </p>
        <p className="ds-body-small text-text-muted">
          {form_config.privacy_note}{" "}
          <Link
            href="/privacy-policy/"
            className="text-brand-primary hover:underline ds-focus rounded-sm"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      {(status === "server_error" ||
        status === "rate_limited" ||
        (status === "validation_error" && server_message)) && (
        <p
          className="ds-body-small text-red-400 mb-4"
          role="alert"
          aria-live="assertive"
        >
          {server_message}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={is_submitting}
        className={is_submitting ? "opacity-70 cursor-wait" : ""}
      >
        {is_submitting ? "Sending…" : "Submit inquiry"}
      </Button>
    </form>
  );
}

function FormField({
  id,
  label,
  required = false,
  help,
  error,
  error_id,
  className = "",
  children,
}) {
  return (
    <div className={`space-y-2 ${className}`.trim()}>
      <label htmlFor={id} className="ds-label">
        {label}
        {required ? (
          <span className="text-brand-primary" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="text-text-muted font-normal"> (optional)</span>
        )}
      </label>
      {children}
      {help && !error && (
        <p id={`${id}-help`} className="ds-body-small text-text-muted">
          {help}
        </p>
      )}
      {error && (
        <p id={error_id} className="ds-body-small text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
