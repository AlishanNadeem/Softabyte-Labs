import {
  BUDGET_RANGE_OPTIONS,
  PREFERRED_CONTACT_METHOD_OPTIONS,
  SERVICE_INTEREST_OPTIONS,
} from "@/lib/contact/constants";

export const contact_page = {
  seo: {
    title: "Contact Softabyte Labs",
    description:
      "Tell us what you want to build. Softabyte Labs replies with a straightforward next step — no long procurement maze.",
    path: "/contact/",
  },
  hero: {
    eyebrow: "Contact",
    h1: "Start a project",
    description:
      "Tell us what you want to build. Share the context that matters — we will review the inquiry and follow up using the contact information you provide.",
    ambient_variant: "hero-primary",
  },
  intro: {
    eyebrow: "Project inquiry",
    headline: "A short brief is enough to start the conversation",
    paragraphs: [
      "Projects are reviewed for fit before engagement begins. Scope, constraints, and service alignment are discussed before development starts.",
      "Share only the information needed to discuss your project. Please do not submit passwords, payment information, medical records, or other sensitive data.",
    ],
  },
  guidance: {
    eyebrow: "What happens next",
    headline: "From inquiry to a clear next step",
    items: [
      {
        title: "We review your brief",
        description:
          "Service interest, goals, and constraints help us understand whether Softabyte Labs is the right fit.",
      },
      {
        title: "We follow up directly",
        description:
          "Expect a straightforward reply using the contact details you provided — not a long procurement maze.",
      },
      {
        title: "We discuss scope before build",
        description:
          "If there is mutual fit, next steps focus on discovery and a practical path forward.",
      },
    ],
  },
  not_ready: {
    eyebrow: "Not ready to submit?",
    headline: "Explore how we work first",
    description:
      "Review services, industries, or the delivery process — then return when you have a project to discuss.",
    links: [
      { label: "Services", href: "/services/" },
      { label: "Industries", href: "/industries/" },
      { label: "Process", href: "/process/" },
    ],
  },
  form: {
    source_page: "/contact/",
    success_message:
      "Thanks — your project inquiry has been received. We’ll review the details and follow up using the contact information you provided.",
    privacy_note:
      "Share only the information needed to discuss your project. Please do not submit passwords, payment information, medical records, or other sensitive data.",
    service_interest_options: SERVICE_INTEREST_OPTIONS,
    budget_range_options: BUDGET_RANGE_OPTIONS,
    preferred_contact_method_options: PREFERRED_CONTACT_METHOD_OPTIONS,
    fields: {
      full_name: { label: "Full name", required: true },
      email: { label: "Work email", required: true },
      company_name: { label: "Company", required: false },
      phone: { label: "Phone", required: false },
      service_interest: { label: "Service interest", required: true },
      budget_range: { label: "Budget range", required: false },
      preferred_contact_method: {
        label: "Preferred contact method",
        required: false,
      },
      project_description: {
        label: "Project description",
        required: true,
        help: "Goals, users, current systems, and what success looks like.",
      },
    },
  },
};
