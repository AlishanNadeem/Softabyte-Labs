/**
 * Privacy Policy content — operational website draft.
 * Should be reviewed by qualified legal counsel before final production reliance.
 * Last updated date is static and must be changed only when the policy text changes.
 */

import { company_legal_name, site_name, site_url } from "@/lib/site";

export const privacy_page = {
  seo: {
    title: "Privacy Policy | Softabyte Labs",
    description:
      "How Softabyte Labs collects, uses, and protects information submitted through softabytelabs.com, including project inquiry forms.",
    path: "/privacy-policy/",
  },
  hero: {
    eyebrow: "Legal",
    h1: "Privacy Policy",
    intro:
      "This Privacy Policy explains how Softabyte Labs LLC (“Softabyte Labs,” “we,” “us,” or “our”) handles information in connection with the Softabyte Labs website at softabytelabs.com.",
  },
  last_updated: "August 22, 2026",
  last_updated_iso: "2026-08-22",
  contact_email: "info@softabytelabs.com",
  contact_email_href: "mailto:info@softabytelabs.com",
  contact_page_href: "/contact/",
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      paragraphs: [
        `Softabyte Labs LLC operates the website ${site_url.replace("https://", "")} (the “Site”). This Privacy Policy describes the types of information we may collect when you visit the Site or submit a project inquiry, and how that information may be used.`,
        "This policy applies to the website and the public contact form as they currently operate. It does not cover offline practices, future products, or third-party websites we do not control.",
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      paragraphs: [
        "We collect information you choose to provide and limited technical information that is generated automatically when you use the Site.",
      ],
    },
    {
      id: "information-you-provide",
      title: "3. Information You Provide",
      paragraphs: [
        "You may provide information when you submit a project inquiry through our contact form or when you email us directly.",
      ],
    },
    {
      id: "contact-inquiry-information",
      title: "4. Contact / Project Inquiry Information",
      paragraphs: [
        "When you submit a project inquiry, the form may collect:",
      ],
      list: [
        "Full name",
        "Email address",
        "Phone number (optional)",
        "Company name (optional)",
        "Service interest",
        "Budget range (optional)",
        "Preferred contact method (optional)",
        "Project description",
        "A source page path indicating where the form was submitted from",
      ],
      paragraphs_after: [
        "Please do not submit passwords, payment card details, medical records, government ID numbers, or other sensitive information through the contact form.",
      ],
    },
    {
      id: "automatically-collected-information",
      title: "5. Automatically Collected Information",
      paragraphs: [
        "Like most websites, our hosting and application infrastructure may process standard technical request information such as IP address, browser type, request timestamps, and similar server-level metadata needed to deliver pages, protect the Site against abuse, and operate the service.",
        "As of the last updated date of this policy, Softabyte Labs does not operate a third-party web analytics platform (such as Google Analytics), advertising pixel, live chat widget, or marketing automation tool on the Site. If that changes, this policy will be updated.",
      ],
    },
    {
      id: "how-we-use-information",
      title: "6. How We Use Information",
      paragraphs: [
        "We may use information collected through the Site to:",
      ],
      list: [
        "Respond to project inquiries and related communications",
        "Evaluate project fit and discuss potential services",
        "Maintain ordinary business records related to inquiries",
        "Protect the Site and our systems against spam, abuse, and security threats",
        "Operate, maintain, and improve website functionality where applicable",
      ],
      paragraphs_after: [
        "Submitting a project inquiry does not enroll you in a newsletter, promotional email list, or SMS marketing program. Softabyte Labs does not currently operate an email marketing or advertising campaign system on this Site.",
      ],
    },
    {
      id: "how-information-is-shared",
      title: "7. How Information Is Shared",
      paragraphs: [
        "We do not sell personal information.",
        "We may share information with service providers that help us operate the Site and business — for example hosting, database, and security or rate-limiting infrastructure — when those providers process data on our behalf and as needed to provide their services.",
        "We may also disclose information if required by law, legal process, or to protect the rights, safety, and security of Softabyte Labs, our users, or others.",
      ],
    },
    {
      id: "service-providers",
      title: "8. Service Providers / Infrastructure",
      paragraphs: [
        "The Site relies on third-party infrastructure providers to host content, store project inquiry submissions, and help limit automated abuse of the contact endpoint. Those providers process limited technical and form-related data as needed to deliver their services.",
        "We do not publish a detailed internal architecture list in this policy for security reasons. If you have questions about specific processors used for your inquiry, you may contact us using the details below.",
      ],
    },
    {
      id: "data-retention",
      title: "9. Data Retention",
      paragraphs: [
        "We retain project inquiry information only for as long as reasonably necessary to respond to the inquiry, support a potential or ongoing business relationship, maintain ordinary business records, and meet legal, security, or operational obligations.",
        "When information is no longer reasonably required for those purposes, we take steps to delete or anonymize it where practical.",
      ],
    },
    {
      id: "data-security",
      title: "10. Data Security",
      paragraphs: [
        "We use reasonable technical and organizational measures designed to protect information submitted through the Site. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      id: "cookies-analytics",
      title: "11. Cookies / Analytics",
      paragraphs: [
        "As of the last updated date of this policy, Softabyte Labs does not use non-essential analytics, advertising, or tracking cookies on the Site.",
        "The Site and hosting platform may still use strictly necessary technical mechanisms required for security, performance, or basic site operation. If we introduce analytics, marketing cookies, or similar technologies in the future, we will update this policy and implement any additional notices or controls that are appropriate.",
      ],
    },
    {
      id: "third-party-links",
      title: "12. Third-Party Links",
      paragraphs: [
        "The Site may link to third-party websites or resources. Softabyte Labs does not control those third-party sites and is not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.",
      ],
    },
    {
      id: "your-choices-rights",
      title: "13. Your Choices / Rights",
      paragraphs: [
        "Depending on where you live, you may have certain rights regarding personal information, which may include rights to request access, correction, or deletion where applicable.",
        "To make a privacy-related request, contact us using the email address below. We may need to verify your request before responding. Some requests may be limited by law or legitimate business needs.",
      ],
    },
    {
      id: "childrens-privacy",
      title: "14. Children's Privacy",
      paragraphs: [
        "The Site is intended for business and professional audiences. It is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided information to us, please contact us so we can take appropriate action.",
      ],
    },
    {
      id: "international-visitors",
      title: "15. International Visitors",
      paragraphs: [
        "Softabyte Labs is oriented toward serving US businesses, but visitors may access the Site from other locations. Information you submit may be processed in the United States or in other locations where our service providers operate.",
      ],
    },
    {
      id: "changes",
      title: "16. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we update the policy, we will revise the “Last updated” date at the top of this page.",
        "Material changes should be reviewed carefully. Continued use of the Site after an update means you acknowledge the revised policy as posted.",
      ],
    },
    {
      id: "contact",
      title: "17. Contact",
      paragraphs: [
        `If you have questions about this Privacy Policy or Softabyte Labs’ privacy practices, contact ${company_legal_name} at:`,
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
