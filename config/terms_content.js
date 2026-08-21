/**
 * Website Terms of Use — operational website draft.
 * This is NOT a master client services agreement, MSA, SOW, or development contract.
 * Should be reviewed by qualified legal counsel before final production reliance.
 * Governing-law jurisdiction is intentionally not asserted until confirmed by counsel.
 */

import { company_legal_name, site_name, site_url } from "@/lib/site";

export const terms_page = {
  seo: {
    title: "Terms of Use | Softabyte Labs",
    description:
      "Website terms of use for softabytelabs.com. These terms govern use of the Softabyte Labs website and do not replace a project agreement.",
    path: "/terms/",
  },
  hero: {
    eyebrow: "Legal",
    h1: "Terms of Use",
    intro:
      "These Terms of Use govern your access to and use of the Softabyte Labs website. They apply to the website experience and public project inquiries — not to a signed client engagement.",
  },
  last_updated: "August 22, 2026",
  last_updated_iso: "2026-08-22",
  contact_email: "info@softabytelabs.com",
  contact_email_href: "mailto:info@softabytelabs.com",
  contact_page_href: "/contact/",
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      paragraphs: [
        `By accessing or using the Softabyte Labs website at ${site_url.replace("https://", "")} (the “Site”), you agree to these Terms of Use. If you do not agree, do not use the Site.`,
        `These terms are between you and ${company_legal_name} (“Softabyte Labs,” “we,” “us,” or “our”).`,
      ],
    },
    {
      id: "website-purpose",
      title: "2. Website Purpose",
      paragraphs: [
        "The Site provides information about Softabyte Labs’ technology services, capabilities, and how to start a project conversation. It is a marketing and informational website for a US-focused technology partner.",
      ],
    },
    {
      id: "informational-content",
      title: "3. Informational Content",
      paragraphs: [
        "Content on the Site — including service descriptions, industry pages, process explanations, and related materials — is provided for general informational purposes.",
        "Website content is not a binding quote, proposal, statement of work, or guarantee of project scope, timeline, pricing, or outcomes. Actual engagements are defined separately through Softabyte Labs’ commercial process.",
      ],
    },
    {
      id: "intellectual-property",
      title: "4. Intellectual Property",
      paragraphs: [
        `Unless otherwise noted, the Site’s text, design, layout, branding, graphics, and other original materials are owned by Softabyte Labs or used under license. Softabyte Labs and related brand elements are used to identify ${site_name}.`,
        "You may not copy, reproduce, modify, distribute, or create derivative works from Site materials for commercial purposes without prior written permission, except for limited personal, non-commercial viewing of the Site as ordinarily permitted by web browsers.",
        "Third-party names, logos, or product references that may appear on the Site remain the property of their respective owners and do not imply endorsement unless expressly stated.",
      ],
    },
    {
      id: "permitted-use",
      title: "5. Permitted Use",
      paragraphs: [
        "You may use the Site for lawful purposes, including reviewing Softabyte Labs’ services and submitting a genuine project inquiry.",
      ],
    },
    {
      id: "prohibited-use",
      title: "6. Prohibited Use",
      paragraphs: [
        "You agree not to:",
      ],
      list: [
        "Use the Site for any unlawful purpose",
        "Attempt to disrupt, overload, or interfere with Site operation or security",
        "Probe, scan, or test vulnerabilities without prior written authorization",
        "Submit malicious, fraudulent, automated spam, or abusive content through forms or related channels",
        "Scrape or harvest Site content in a way that impairs service or violates these terms",
        "Misrepresent your identity or affiliation in connection with a project inquiry",
      ],
    },
    {
      id: "project-inquiries",
      title: "7. Project Inquiries",
      paragraphs: [
        "You may submit project inquiries through the Site’s contact form. By submitting an inquiry, you represent that the information you provide is accurate to the best of your knowledge and that you are authorized to share it.",
        "Please do not include passwords, payment information, medical records, or other sensitive data in form submissions.",
        "Softabyte Labs may review inquiries for fit and may decline to pursue opportunities at its discretion.",
      ],
    },
    {
      id: "no-client-relationship",
      title: "8. No Client Relationship by Website Use",
      paragraphs: [
        "Accessing the Site, submitting a contact form, receiving a reply, or having an introductory conversation does not by itself create a binding client, development, consulting, or employment relationship.",
        "Formal work begins only after Softabyte Labs and the client agree to the applicable proposal, statement of work, master services agreement, or other written engagement terms, as applicable.",
        "These Website Terms of Use are not a substitute for Softabyte Labs’ client contracts.",
      ],
    },
    {
      id: "third-party-services",
      title: "9. Third-Party Services / Links",
      paragraphs: [
        "The Site may reference or link to third-party websites, tools, or resources. Softabyte Labs does not control and is not responsible for third-party content, availability, or practices. Your use of third-party sites is at your own risk and subject to their terms.",
      ],
    },
    {
      id: "disclaimer",
      title: "10. Disclaimer",
      paragraphs: [
        "The Site and its content are provided on an “as is” and “as available” basis. To the fullest extent permitted by law, Softabyte Labs disclaims warranties of merchantability, fitness for a particular purpose, and non-infringement regarding the Site.",
        "We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components. Website information may change without notice.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "11. Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by applicable law, Softabyte Labs and its officers, members, and agents will not be liable for indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or inability to use the Site.",
        "Nothing in these terms is intended to exclude or limit liability that cannot be excluded or limited under applicable law.",
      ],
    },
    {
      id: "governing-law",
      title: "12. Governing Law",
      paragraphs: [
        "These Terms of Use are intended to be interpreted under applicable United States law.",
        "A specific state governing-law and venue clause has not been finalized for this website draft and should be confirmed with qualified legal counsel before Softabyte Labs relies on a particular jurisdiction for production legal purposes.",
      ],
    },
    {
      id: "changes",
      title: "13. Changes to Terms",
      paragraphs: [
        "We may update these Terms of Use from time to time. When we do, we will revise the “Last updated” date on this page. Continued use of the Site after changes are posted constitutes acceptance of the updated terms.",
      ],
    },
    {
      id: "contact",
      title: "14. Contact",
      paragraphs: [
        `Questions about these Terms of Use may be directed to ${company_legal_name}:`,
      ],
      list: [
        `Email: info@softabytelabs.com`,
        `Contact form: ${site_url}/contact/`,
      ],
      paragraphs_after: [
        `Website brand: ${site_name}. Legal entity: ${company_legal_name}.`,
      ],
    },
  ],
};
