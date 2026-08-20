import {
  BUDGET_RANGE_OPTIONS,
  FIELD_LIMITS,
  PREFERRED_CONTACT_METHOD_OPTIONS,
  SERVICE_INTEREST_OPTIONS,
} from "@/lib/contact/constants";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function trim_string(value) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function normalize_email(value) {
  return trim_string(value).toLowerCase();
}

/**
 * Validate and sanitize a contact submission payload.
 * Returns { valid, errors, data } where data is ready for MongoDB insert.
 */
export function validate_contact_submission(raw_body = {}) {
  const errors = {};

  const full_name = trim_string(raw_body.full_name);
  const email = normalize_email(raw_body.email);
  const phone = trim_string(raw_body.phone);
  const company_name = trim_string(raw_body.company_name);
  const service_interest = trim_string(raw_body.service_interest);
  const budget_range = trim_string(raw_body.budget_range);
  const project_description = trim_string(raw_body.project_description);
  const preferred_contact_method = trim_string(raw_body.preferred_contact_method);
  const source_page = trim_string(raw_body.source_page) || "/contact/";
  const honeypot = trim_string(raw_body.website_url || raw_body.honeypot);

  if (honeypot) {
    return {
      valid: false,
      spam: true,
      errors: {},
      data: null,
    };
  }

  if (!full_name) {
    errors.full_name = "Full name is required.";
  } else if (full_name.length < FIELD_LIMITS.full_name.min) {
    errors.full_name = "Please enter your full name.";
  } else if (full_name.length > FIELD_LIMITS.full_name.max) {
    errors.full_name = "Full name is too long.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (
    email.length > FIELD_LIMITS.email.max ||
    !EMAIL_PATTERN.test(email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  if (!service_interest) {
    errors.service_interest = "Please select a service interest.";
  } else if (!SERVICE_INTEREST_OPTIONS.includes(service_interest)) {
    errors.service_interest = "Select a valid service option.";
  }

  if (!project_description) {
    errors.project_description = "Please describe your project.";
  } else if (
    project_description.length < FIELD_LIMITS.project_description.min
  ) {
    errors.project_description =
      "Add a bit more detail so we can understand the initiative.";
  } else if (
    project_description.length > FIELD_LIMITS.project_description.max
  ) {
    errors.project_description = "Project description is too long.";
  }

  if (phone && phone.length > FIELD_LIMITS.phone.max) {
    errors.phone = "Phone number is too long.";
  }

  if (company_name && company_name.length > FIELD_LIMITS.company_name.max) {
    errors.company_name = "Company name is too long.";
  }

  if (budget_range && !BUDGET_RANGE_OPTIONS.includes(budget_range)) {
    errors.budget_range = "Select a valid budget range.";
  }

  if (
    preferred_contact_method &&
    !PREFERRED_CONTACT_METHOD_OPTIONS.includes(preferred_contact_method)
  ) {
    errors.preferred_contact_method = "Select a valid contact method.";
  }

  if (source_page.length > FIELD_LIMITS.source_page.max) {
    errors.source_page = "Invalid source page.";
  }

  const valid = Object.keys(errors).length === 0;

  if (!valid) {
    return { valid: false, spam: false, errors, data: null };
  }

  return {
    valid: true,
    spam: false,
    errors: {},
    data: {
      full_name,
      email,
      phone: phone || null,
      company_name: company_name || null,
      service_interest,
      budget_range: budget_range || null,
      project_description,
      preferred_contact_method: preferred_contact_method || null,
      source_page: source_page.startsWith("/") ? source_page : "/contact/",
    },
  };
}
