export const CONTACT_COLLECTION = "contact_submissions";

export const SERVICE_INTEREST_OPTIONS = [
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "AI & Automation",
  "UI/UX Design",
  "Hosting & Infrastructure",
  "Not Sure Yet",
];

export const BUDGET_RANGE_OPTIONS = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
  "Not Sure Yet",
];

export const PREFERRED_CONTACT_METHOD_OPTIONS = ["Email", "Phone"];

export const SUBMISSION_STATUS_NEW = "new";

export const FIELD_LIMITS = {
  full_name: { min: 2, max: 120 },
  email: { min: 5, max: 254 },
  phone: { max: 40 },
  company_name: { max: 160 },
  project_description: { min: 20, max: 5000 },
  source_page: { max: 300 },
  honeypot: { max: 200 },
};

export const MAX_JSON_BODY_BYTES = 32_768;
