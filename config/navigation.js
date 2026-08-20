export const primary_cta = {
  label: "Start a Project",
  href: "/contact/",
};

export const service_navigation = [
  {
    index: "01",
    label: "Custom Software Development",
    href: "/services/custom-software-development/",
    description: "Software built around your business workflow.",
  },
  {
    index: "02",
    label: "Web Development",
    href: "/services/web-development/",
    description: "Websites and web applications that perform.",
  },
  {
    index: "03",
    label: "Mobile App Development",
    href: "/services/mobile-app-development/",
    description: "Mobile products designed for real users.",
  },
  {
    index: "04",
    label: "AI & Automation",
    href: "/services/ai-automation/",
    description: "Intelligent workflows and automation.",
  },
  {
    index: "05",
    label: "UI/UX Design",
    href: "/services/ui-ux-design/",
    description: "Research, UX, and interface design.",
  },
  {
    index: "06",
    label: "Hosting & Infrastructure",
    href: "/services/hosting-infrastructure/",
    description: "Deployment, hosting, and ongoing care.",
  },
];

export const service_hub = {
  label: "View All Services",
  href: "/services/",
};

export const industry_navigation = [
  {
    label: "Ecommerce & Retail",
    href: "/industries/ecommerce/",
    description: "Commerce platforms and retail operations.",
  },
  {
    label: "Healthcare",
    href: "/industries/healthcare/",
    description: "Software for healthcare organizations.",
  },
  {
    label: "Real Estate",
    href: "/industries/real-estate/",
    description: "Tools for property and real estate businesses.",
  },
  {
    label: "Transportation & Logistics",
    href: "/industries/transportation-logistics/",
    description: "Systems for moving goods and people.",
  },
  {
    label: "Professional Services",
    href: "/industries/professional-services/",
    description: "Technology for service-based firms.",
  },
  {
    label: "Startups & SaaS",
    href: "/industries/startups-saas/",
    description: "Product engineering for growing companies.",
  },
];

export const industry_hub = {
  label: "View All Industries",
  href: "/industries/",
};

export const primary_navigation = [
  { label: "Work", href: "/work/" },
  { label: "Process", href: "/process/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
];

export const footer_navigation = {
  services: service_navigation.map(({ label, href }) => ({ label, href })),
  company: [
    { label: "About", href: "/about/" },
    { label: "Process", href: "/process/" },
    { label: "Work", href: "/work/" },
    { label: "Contact", href: "/contact/" },
  ],
  industries: industry_navigation.map(({ label, href }) => ({ label, href })),
  resources: [{ label: "Blog", href: "/blog/" }],
};

export const footer_legal = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms/" },
];

export const footer_statement =
  "US-based software development partner for custom products, web platforms, and digital systems.";
