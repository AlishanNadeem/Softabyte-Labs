/**
 * Industries hub + six industry landing pages.
 * SEO fields follow frozen docs/keyword_map.md.
 */

export const industries_hub = {
  seo: {
    title: "Industries | Softabyte Labs",
    description:
      "Softabyte Labs builds software, web, mobile, and automation solutions for US businesses across ecommerce, healthcare, real estate, logistics, professional services, and SaaS.",
    path: "/industries/",
  },
  hero: {
    eyebrow: "Vertical context",
    h1: "Industries",
    description:
      "Product, engineering, design, automation, and infrastructure applied to the operating realities of different US businesses — not a one-size template with the industry name swapped in.",
    ambient_variant: "hero-primary",
  },
  intro: {
    eyebrow: "How we think about industries",
    headline: "Capabilities stay the same. The operating problems do not.",
    description:
      "Softabyte Labs delivers custom software, web and mobile products, AI automation, UI/UX, and hosting across multiple verticals. Industry pages explain who we build for — service pages explain what we build.",
    paragraphs: [
      "Buyers in ecommerce, healthcare, real estate, logistics, professional services, and SaaS share some engineering needs. They rarely share the same workflows, compliance pressures, or success measures.",
      "Use this hub to find the vertical closest to your business. Each industry page focuses on operational friction, systems that fit that context, and the services most often involved.",
    ],
  },
  index_section: {
    eyebrow: "Industry index",
    headline: "Explore each business context",
    description:
      "Every industry page covers buyer problems, use cases, relevant capabilities, and next steps — without duplicating service-page keyword intent.",
  },
  overview_visual: {
    eyebrow: "Across verticals",
    headline: "Different businesses. Connected delivery model.",
    description:
      "Commerce, care operations, property platforms, logistics systems, client-delivery firms, and SaaS products — each with distinct problems, shared engineering discipline.",
  },
  problems_section: {
    eyebrow: "Operational differences",
    headline: "Different industries, different operational problems",
    description:
      "Industry context shapes what “good software” means — visibility, trust, speed, compliance awareness, or product iteration.",
    items: [
      {
        title: "Commerce and retail",
        description:
          "Catalog complexity, order flow, inventory visibility, and customer experience across channels.",
      },
      {
        title: "Care and clinical operations",
        description:
          "Scheduling, intake, provider workflows, and secure access — without unverified compliance claims.",
      },
      {
        title: "Property and logistics",
        description:
          "Listings, leads, dispatch, tracking, and field coordination where data and status never sit still.",
      },
      {
        title: "Service firms and product companies",
        description:
          "Client delivery systems, portals, MVPs, and SaaS platforms where expertise or product scope drives the roadmap.",
      },
    ],
  },
  capabilities_section: {
    eyebrow: "Adaptive delivery",
    headline: "How our capabilities adapt to industry context",
    description:
      "The same six services appear across industries — applied to different workflows, users, and constraints.",
    paragraphs: [
      "Custom software often anchors internal operations. Web and mobile carry customer or field experiences. UI/UX clarifies flows before engineering. Automation reduces repetitive handoffs. Hosting keeps production environments stable after launch.",
      "Industry pages do not replace service pages. They show how those capabilities land inside a specific operating environment.",
    ],
  },
  relationship_section: {
    eyebrow: "Industry + services",
    headline: "Vertical context meets capability",
    description:
      "Start with the industry page that matches your business. Continue into the services that fit the initiative.",
    paragraphs: [
      "If you already know you need web development or custom software, begin on the Services hub. If you need a partner who understands your market’s operating reality, start here.",
      "Most engagements combine more than one service. Industry pages recommend the most relevant links without stuffing every capability into every vertical.",
    ],
  },
  technology_section: {
    eyebrow: "Foundation",
    headline: "Built on modern technology",
    description:
      "Stacks are chosen for maintainability and product fit. Industry pages stay focused on business use cases — not stack advertising.",
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
  },
  engagement_section: {
    eyebrow: "Engagement",
    headline: "Discovery first — then a clear path for your vertical",
    description:
      "We start with goals, constraints, users, and existing systems before committing to a delivery plan.",
    paragraphs: [
      "Industry context informs discovery. Delivery still follows disciplined product and engineering practice: clarify scope, design where needed, build, launch, and improve.",
      "If your initiative spans multiple industries or services, we can scope phased work rather than forcing a single label.",
    ],
  },
  cta: {
    eyebrow: "Start a conversation",
    headline: "Building in a specific industry context?",
    description:
      "Tell us how your business operates. We will help route you to the right industry focus and capabilities.",
    primary_action: { label: "Start a Project", href: "/contact/" },
    secondary_action: { label: "Explore Services", href: "/services/" },
  },
};

export const industry_pages = {
  ecommerce: {
    slug: "ecommerce",
    path: "/industries/ecommerce/",
    breadcrumb_label: "Ecommerce & Retail",
    short_label: "Ecommerce & Retail",
    summary:
      "Technology for ecommerce and retail businesses — storefronts, catalogs, order workflows, and operational systems.",
    seo: {
      title: "Ecommerce Software Development | Softabyte Labs",
      description:
        "Softabyte Labs helps US ecommerce businesses with web, mobile, custom software, AI automation, UI/UX, and hosting — built around how commerce actually runs.",
      path: "/industries/ecommerce/",
    },
    hero: {
      eyebrow: "Ecommerce & Retail",
      h1: "Technology for ecommerce businesses, not another theme store",
      description:
        "Storefronts, catalogs, order workflows, inventory visibility, and operational software — built around how commerce actually runs.",
      layout: "split",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: {
        label: "Explore Web Development",
        href: "/services/web-development/",
      },
    },
    section_order: [
      "problems",
      "wide_visual",
      "workflow",
      "use_cases",
      "relevant_services",
      "approach",
      "faq",
      "related_industries",
    ],
    problems: {
      eyebrow: "Operational friction",
      headline: "Where ecommerce operations break down",
      description:
        "Retail and commerce teams often struggle when customer experience and back-office systems stay disconnected.",
      items: [
        {
          title: "Catalog and inventory drift",
          description:
            "Product data, stock levels, and channel listings fall out of sync across tools.",
        },
        {
          title: "Order workflows that rely on spreadsheets",
          description:
            "Teams re-enter orders, statuses, and exceptions by hand between storefront and fulfillment.",
        },
        {
          title: "Customer experience disconnected from operations",
          description:
            "Buyers see one status online while warehouse and support teams work from another source of truth.",
        },
        {
          title: "Repetitive admin between systems",
          description:
            "Pricing updates, returns, and B2B ordering create duplicated work that does not scale.",
        },
      ],
    },
    workflow: {
      eyebrow: "Commerce lifecycle",
      headline: "From discovery to operations",
      description:
        "A conceptual flow for how digital commerce systems connect customer journeys to fulfillment.",
      steps: [
        { label: "Discover" },
        { label: "Browse" },
        { label: "Order" },
        { label: "Fulfillment" },
        { label: "Customer updates" },
        { label: "Operations" },
      ],
    },
    use_cases: {
      eyebrow: "What we build",
      headline: "Commerce systems and retail product experiences",
      description:
        "Engagements vary by channel mix, catalog complexity, and how much of the stack you already own.",
      items: [
        {
          title: "Ecommerce storefronts and marketing sites",
          description:
            "Performance-focused web experiences that support discovery, conversion, and content.",
        },
        {
          title: "B2B ordering portals",
          description:
            "Account-based ordering, pricing rules, and reorder flows for wholesale and trade buyers.",
        },
        {
          title: "Catalog and inventory workflows",
          description:
            "Interfaces and integrations that keep product data and stock visibility aligned.",
        },
        {
          title: "Order-management interfaces",
          description:
            "Internal tools for exceptions, returns, and status updates without spreadsheet chaos.",
        },
        {
          title: "Customer account portals",
          description:
            "Order history, preferences, and self-service flows tied to real operational data.",
        },
        {
          title: "Mobile commerce experiences",
          description:
            "Apps or mobile-first journeys when habitual shopping or field retail justifies dedicated product work.",
        },
      ],
    },
    approach: {
      eyebrow: "Approach",
      headline: "Commerce technology planned around real operations",
      paragraphs: [
        "We start by mapping how orders, inventory, and customer communication actually move today — then design systems that reduce handoffs instead of adding another disconnected tool.",
        "Web development often carries the customer experience. Custom software and automation handle operational depth. Mobile and hosting enter when the product and production environment require them.",
      ],
    },
    relevant_services: [
      "web-development",
      "custom-software-development",
      "mobile-app-development",
      "ai-automation",
    ],
    related_industries: ["startups-saas", "professional-services"],
    faq: {
      eyebrow: "Ecommerce FAQ",
      headline: "Questions ecommerce buyers ask",
      items: [
        {
          question: "Do you only build Shopify themes?",
          answer:
            "No. We build commerce-related web products, portals, and operational software. Theme-only template work is not our primary engagement model.",
        },
        {
          question: "Can you connect storefronts to inventory and fulfillment systems?",
          answer:
            "Yes. Integrations and custom operational interfaces are often part of ecommerce work when tools need a shared source of truth.",
        },
        {
          question: "Do you handle B2B and wholesale ordering?",
          answer:
            "Yes. Account-based pricing, reorder flows, and buyer portals are common when retail storefronts alone are not enough.",
        },
        {
          question: "Is this the same as your web development service?",
          answer:
            "No. Web development is the capability. This page covers ecommerce and retail operating context — storefronts, catalogs, orders, and related systems.",
        },
      ],
    },
    cta: {
      eyebrow: "Ecommerce & retail",
      headline: "Need technology that matches how your commerce actually runs?",
      description:
        "Share your channels, catalog complexity, and operational bottlenecks. We will outline a practical next step.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: {
        label: "Explore Services",
        href: "/services/",
      },
      ambient_glow: true,
    },
  },

  healthcare: {
    slug: "healthcare",
    path: "/industries/healthcare/",
    breadcrumb_label: "Healthcare",
    short_label: "Healthcare",
    summary:
      "Software for healthcare operations — portals, scheduling, provider workflows, and secure administrative systems.",
    seo: {
      title: "Healthcare Software Development | Softabyte Labs",
      description:
        "Softabyte Labs builds healthcare software, portals, apps, and automation for US organizations — focused on secure engineering and operational workflows, not unverified compliance claims.",
      path: "/industries/healthcare/",
    },
    hero: {
      eyebrow: "Healthcare",
      h1: "Technology built around modern healthcare operations",
      description:
        "Scheduling, portals, provider workflows, and administrative systems designed with security-conscious architecture and privacy-aware access — without unverified compliance guarantees.",
      ambient_variant: "hero-secondary",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: {
        label: "Explore Custom Software",
        href: "/services/custom-software-development/",
      },
    },
    section_order: [
      "visual_split",
      "problems",
      "workflow",
      "use_cases",
      "relevant_services",
      "approach",
      "faq",
      "related_industries",
    ],
    visual_split: {
      eyebrow: "Operational systems",
      headline: "Digital workflows for care organizations",
      description:
        "Patient-facing and provider-facing tools that reduce administrative friction — not clinical decision engines.",
      paragraphs: [
        "Softabyte Labs focuses on operational software: scheduling, intake, portals, dashboards, and secure access patterns. We plan for privacy, role-based access, and auditability during discovery — without claiming HIPAA certification or clinical outcomes we cannot verify.",
      ],
      visual_position: "right",
    },
    problems: {
      eyebrow: "Operational challenges",
      headline: "Friction healthcare teams deal with every day",
      description:
        "Administrative and digital workflows often lag behind clinical and patient expectations.",
      items: [
        {
          title: "Scheduling and intake still scattered",
          description:
            "Appointments, forms, and follow-ups live across email, paper, and disconnected tools.",
        },
        {
          title: "Limited visibility for staff and patients",
          description:
            "Statuses, documents, and next steps are hard to find without calling or chasing messages.",
        },
        {
          title: "Access and permissions are unclear",
          description:
            "Teams need role-based access and privacy-aware workflows without bolting security on later.",
        },
        {
          title: "Manual coordination between departments",
          description:
            "Administrative handoffs create delays that patients experience as poor service.",
        },
      ],
    },
    workflow: {
      eyebrow: "Operational flow",
      headline: "From patient request to follow-up",
      description:
        "A conceptual operations path — not a clinical care pathway or diagnostic model.",
      steps: [
        { label: "Patient" },
        { label: "Scheduling" },
        { label: "Intake" },
        { label: "Provider workflow" },
        { label: "Administration" },
        { label: "Follow-up" },
      ],
    },
    use_cases: {
      eyebrow: "Systems we build",
      headline: "Healthcare digital products and operational tools",
      items: [
        {
          title: "Patient portals",
          description:
            "Secure spaces for appointments, documents, messaging, and status visibility.",
        },
        {
          title: "Provider and admin dashboards",
          description:
            "Internal interfaces for queues, tasks, and operational oversight.",
        },
        {
          title: "Appointment and scheduling systems",
          description:
            "Booking flows that reduce phone tag and clarify availability rules.",
        },
        {
          title: "Onboarding and forms workflows",
          description:
            "Digital intake that captures required information with clear review steps.",
        },
        {
          title: "Reporting interfaces",
          description:
            "Operational reporting for administrative leaders — not clinical outcome claims.",
        },
        {
          title: "Communication workflows",
          description:
            "Structured notifications and status updates between patients and staff.",
        },
      ],
    },
    approach: {
      eyebrow: "Security-conscious delivery",
      headline: "Privacy-aware planning without compliance theater",
      paragraphs: [
        "Healthcare buyers rightly care about security and regulatory expectations. We discuss data boundaries, role-based access, encryption in transit, and audit logging during planning.",
        "We do not claim HIPAA certification, SOC 2, HITRUST, or guaranteed compliance. Those require verified programs and evidence Softabyte Labs does not invent on marketing pages.",
      ],
    },
    relevant_services: [
      "custom-software-development",
      "web-development",
      "mobile-app-development",
      "ui-ux-design",
    ],
    related_industries: ["professional-services", "startups-saas"],
    faq: {
      eyebrow: "Healthcare FAQ",
      headline: "Questions healthcare buyers ask",
      items: [
        {
          question: "Are you HIPAA certified?",
          answer:
            "No. We do not claim HIPAA certification or guaranteed compliance. We design security-conscious systems and discuss privacy requirements during planning.",
        },
        {
          question: "Do you build clinical decision or diagnostic tools?",
          answer:
            "Our healthcare work focuses on operational and administrative systems — portals, scheduling, workflows, and integrations. We do not position Softabyte Labs as a clinical AI or diagnostic vendor.",
        },
        {
          question: "Can you integrate with existing systems?",
          answer:
            "Often yes. Integration scope depends on available APIs, data agreements, and access. We clarify feasibility during discovery rather than promising universal EHR connectivity.",
        },
        {
          question: "How is this different from custom software?",
          answer:
            "Custom software is the capability. This page covers healthcare operating context — care administration, portals, and privacy-aware workflows.",
        },
      ],
    },
    cta: {
      eyebrow: "Healthcare technology",
      headline: "Improving digital workflows for your organization?",
      description:
        "Describe the operational problem and systems involved. We will discuss a scoped, security-conscious approach.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: {
        label: "Explore Services",
        href: "/services/",
      },
    },
  },

  "real-estate": {
    slug: "real-estate",
    path: "/industries/real-estate/",
    breadcrumb_label: "Real Estate",
    short_label: "Real Estate",
    summary:
      "Property technology for brokerages, managers, and platforms — listings, leads, portals, and operational workflows.",
    seo: {
      title: "Real Estate Software Development | Softabyte Labs",
      description:
        "Softabyte Labs builds real estate and PropTech software for US brokerages, property managers, and platforms — portals, workflows, apps, and integrations without template agency copy.",
      path: "/industries/real-estate/",
    },
    hero: {
      eyebrow: "Real Estate",
      h1: "Software for property businesses where data and transactions never sit still",
      description:
        "Listings, search, lead routing, agent workflows, and client portals for brokerages, managers, and PropTech teams.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: {
        label: "Explore Web Development",
        href: "/services/web-development/",
      },
    },
    section_order: [
      "audience",
      "wide_visual",
      "workflow",
      "use_cases",
      "problems",
      "relevant_services",
      "faq",
      "related_industries",
    ],
    audience: {
      eyebrow: "Who this serves",
      headline: "Property businesses with different users — shared data pressure",
      for_items: [
        "Brokerages that need listing and lead workflows that agents will actually use",
        "Property managers coordinating residents, vendors, and internal ops",
        "PropTech teams building search, portals, or operational platforms",
        "Commercial operators needing clearer property and deal visibility",
      ],
      not_for_items: [
        "One-page brochure sites with no operational depth",
        "Projects that require unverified MLS/IDX credentials we do not claim",
        "Pure branding or social creative engagements",
      ],
    },
    workflow: {
      eyebrow: "Lead and listing flow",
      headline: "From listing to follow-up",
      description:
        "A conceptual path connecting property data, discovery, and agent follow-through.",
      steps: [
        { label: "Listing" },
        { label: "Discovery" },
        { label: "Lead" },
        { label: "Agent" },
        { label: "Viewing" },
        { label: "Follow-up" },
      ],
    },
    use_cases: {
      eyebrow: "What we build",
      headline: "Property platforms and real estate operations tools",
      items: [
        {
          title: "Property listing and search experiences",
          description:
            "Filterable discovery interfaces that present inventory clearly on web and mobile.",
        },
        {
          title: "Agent dashboards and lead routing",
          description:
            "Tools that assign, track, and follow leads without losing context in email threads.",
        },
        {
          title: "Client portals",
          description:
            "Shared spaces for documents, statuses, and next steps between clients and teams.",
        },
        {
          title: "Property-management workflows",
          description:
            "Operational interfaces for work orders, residents, vendors, and internal coordination.",
        },
        {
          title: "Viewing and scheduling systems",
          description:
            "Booking flows that reduce phone tag for showings and site visits.",
        },
        {
          title: "Internal operations dashboards",
          description:
            "Visibility into pipeline, inventory, and team activity for managers.",
        },
      ],
    },
    problems: {
      eyebrow: "Buyer problems",
      headline: "Where real estate operations lose momentum",
      items: [
        {
          title: "Leads arrive faster than follow-up systems",
          description:
            "Inquiry volume outpaces routing, ownership, and response discipline.",
        },
        {
          title: "Listings and CRM stay out of sync",
          description:
            "Property data and relationship history live in separate tools with manual updates.",
        },
        {
          title: "Clients lack a clear status channel",
          description:
            "Buyers and renters chase updates because portals and messaging are incomplete.",
        },
        {
          title: "Field and office workflows collide",
          description:
            "Agents and managers need mobile-friendly tools that still feed back-office systems.",
        },
      ],
    },
    relevant_services: [
      "web-development",
      "custom-software-development",
      "mobile-app-development",
      "ai-automation",
    ],
    related_industries: ["professional-services", "startups-saas"],
    faq: {
      eyebrow: "Real estate FAQ",
      headline: "Questions property buyers ask",
      items: [
        {
          question: "Do you integrate with MLS or IDX feeds?",
          answer:
            "Integration depends on available access, agreements, and technical constraints. We do not claim universal MLS/IDX or RESO certification on this site.",
        },
        {
          question: "Can you build for brokerages and property managers?",
          answer:
            "Yes. Listing platforms, lead tools, portals, and property-management workflows are common engagement types.",
        },
        {
          question: "Is this only a website project?",
          answer:
            "Sometimes the starting point is web. Many property businesses also need custom workflows, mobile tools, or automation beyond a marketing site.",
        },
        {
          question: "How does this relate to web development?",
          answer:
            "Web development is the service. This page owns real estate and PropTech context — listings, leads, portals, and property operations.",
        },
      ],
    },
    cta: {
      eyebrow: "Real estate technology",
      headline: "Building property software that agents and clients will use?",
      description:
        "Tell us about listings, leads, and operational bottlenecks. We will recommend a practical scope.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: {
        label: "Discuss Your Product",
        href: "/contact/",
      },
    },
  },

  "transportation-logistics": {
    slug: "transportation-logistics",
    path: "/industries/transportation-logistics/",
    breadcrumb_label: "Transportation & Logistics",
    short_label: "Transportation & Logistics",
    summary:
      "Operational software for carriers, brokers, and logistics operators — dispatch, tracking, fleet tools, and visibility.",
    seo: {
      title: "Logistics Software Development | Softabyte Labs",
      description:
        "Softabyte Labs builds logistics and transportation software for US carriers, brokers, and operators — dispatch, fleet tools, visibility, portals, and integrations built for real workflows.",
      path: "/industries/transportation-logistics/",
    },
    hero: {
      eyebrow: "Transportation & Logistics",
      h1: "Software for logistics businesses where operations cannot stand still",
      description:
        "Dispatch, fleet visibility, field workflows, shipment status, and operational reporting for carriers, brokers, and operators.",
      ambient_variant: "ai",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: {
        label: "Explore Custom Software",
        href: "/services/custom-software-development/",
      },
    },
    section_order: [
      "workflow",
      "problems",
      "use_cases",
      "visual_split",
      "relevant_services",
      "approach",
      "faq",
      "related_industries",
    ],
    workflow: {
      eyebrow: "Operations flow",
      headline: "Request to reporting",
      description:
        "A system-oriented path for how logistics work moves from intake to completion.",
      steps: [
        { label: "Request" },
        { label: "Dispatch" },
        { label: "Driver" },
        { label: "Tracking" },
        { label: "Completion" },
        { label: "Reporting" },
      ],
    },
    problems: {
      eyebrow: "Buyer problems",
      headline: "Operational friction in transportation and logistics",
      items: [
        {
          title: "Fragmented dispatch and coordination",
          description:
            "Loads, drivers, and customer updates live across calls, texts, and disconnected tools.",
        },
        {
          title: "Limited visibility while work is in motion",
          description:
            "Managers and customers lack a trustworthy status view across the trip lifecycle.",
        },
        {
          title: "Field teams work offline from the office system",
          description:
            "Drivers and field staff need mobile workflows that still update operations.",
        },
        {
          title: "Repetitive admin after every shipment",
          description:
            "Proof, billing inputs, and status notes create duplicated work after completion.",
        },
      ],
    },
    use_cases: {
      eyebrow: "Systems we build",
      headline: "Logistics platforms and operational interfaces",
      items: [
        {
          title: "Dispatch platforms",
          description:
            "Assign work, manage exceptions, and keep dispatchers working from one operational view.",
        },
        {
          title: "Fleet and operations dashboards",
          description:
            "Visibility into capacity, status, and performance without spreadsheet archaeology.",
        },
        {
          title: "Driver and field apps",
          description:
            "Mobile tools for assignments, status updates, and proof capture.",
        },
        {
          title: "Shipment and tracking interfaces",
          description:
            "Status experiences for internal teams and, when needed, customer portals.",
        },
        {
          title: "Scheduling and capacity tools",
          description:
            "Planning interfaces that reduce last-minute coordination chaos.",
        },
        {
          title: "Operational reporting and automation",
          description:
            "Reporting and rules-based handoffs that cut repetitive admin after completion.",
        },
      ],
    },
    visual_split: {
      eyebrow: "Software first",
      headline: "Visibility systems — not a stock photo of a truck",
      description:
        "The product is the operations platform: dispatch, tracking, and field workflows.",
      paragraphs: [
        "Logistics buyers need software that reflects how work moves. Softabyte Labs focuses on operational interfaces, mobile field tools, and integrations — with hosting and monitoring when production reliability matters after launch.",
      ],
      visual_position: "left",
    },
    approach: {
      eyebrow: "Approach",
      headline: "Built for workflows that move all day",
      paragraphs: [
        "We map dispatch, field, and customer-update paths before designing screens. Custom software and mobile often lead. Automation helps when status and admin steps are repeatable.",
        "We do not claim specialized telematics partnerships or guaranteed uptime SLAs unless separately contracted and verified.",
      ],
    },
    relevant_services: [
      "custom-software-development",
      "mobile-app-development",
      "ai-automation",
      "hosting-infrastructure",
    ],
    related_industries: ["ecommerce", "startups-saas"],
    faq: {
      eyebrow: "Logistics FAQ",
      headline: "Questions logistics buyers ask",
      items: [
        {
          question: "Do you build full TMS replacements?",
          answer:
            "Sometimes. Other times we extend or integrate with systems you already use. Scope depends on process complexity and what must stay in place.",
        },
        {
          question: "Can you build driver or field apps?",
          answer:
            "Yes. Mobile workflows for assignments, status, and proof capture are common logistics engagements.",
        },
        {
          question: "Do you guarantee real-time GPS integrations?",
          answer:
            "We do not advertise specialized telematics partnerships. Tracking and visibility scope is defined during discovery based on available data sources.",
        },
        {
          question: "How is this different from custom software?",
          answer:
            "Custom software is the capability. This page covers logistics operating context — dispatch, fleet tools, visibility, and field workflows.",
        },
      ],
    },
    cta: {
      eyebrow: "Logistics technology",
      headline: "Need operational software that keeps pace with the work?",
      description:
        "Describe dispatch, field, and visibility gaps. We will outline a practical systems approach.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: {
        label: "Explore Capabilities",
        href: "/services/",
      },
      ambient_glow: true,
    },
  },

  "professional-services": {
    slug: "professional-services",
    path: "/industries/professional-services/",
    breadcrumb_label: "Professional Services",
    short_label: "Professional Services",
    summary:
      "Technology for consultancies, agencies, and service firms — client portals, workflows, and delivery systems.",
    seo: {
      title: "Software for Professional Services Firms | Softabyte Labs",
      description:
        "Softabyte Labs builds client portals, workflow tools, and custom software for US consultancies, agencies, and professional firms — designed around how service businesses actually operate.",
      path: "/industries/professional-services/",
    },
    hero: {
      eyebrow: "Professional Services",
      h1: "Technology for firms that sell expertise, not shelf products",
      description:
        "Client portals, delivery workflows, onboarding, scheduling, and reporting for consultancies, agencies, and specialized B2B service businesses.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: {
        label: "Explore UI/UX Design",
        href: "/services/ui-ux-design/",
      },
    },
    section_order: [
      "workflow",
      "use_cases",
      "wide_visual",
      "problems",
      "relevant_services",
      "approach",
      "faq",
      "related_industries",
    ],
    workflow: {
      eyebrow: "Client lifecycle",
      headline: "From lead to retention",
      description:
        "A business-focused delivery path for firms that sell expertise and managed delivery.",
      steps: [
        { label: "Lead" },
        { label: "Onboarding" },
        { label: "Delivery" },
        { label: "Client communication" },
        { label: "Reporting" },
        { label: "Retention" },
      ],
    },
    use_cases: {
      eyebrow: "Systems we build",
      headline: "Portals, workflows, and service-delivery tools",
      items: [
        {
          title: "Client portals",
          description:
            "Shared spaces for status, documents, requests, and delivery milestones.",
        },
        {
          title: "CRM and workflow systems",
          description:
            "Internal tools that connect pipeline, delivery tasks, and ownership.",
        },
        {
          title: "Onboarding experiences",
          description:
            "Structured intake that reduces email chaos at the start of an engagement.",
        },
        {
          title: "Document and status tracking",
          description:
            "Visibility into what is pending, approved, or blocked across the team.",
        },
        {
          title: "Scheduling and reporting",
          description:
            "Interfaces for appointments, capacity, and client-facing progress updates.",
        },
        {
          title: "Automation between delivery tools",
          description:
            "Rules and integrations that cut repetitive handoffs between systems staff already use.",
        },
      ],
    },
    problems: {
      eyebrow: "Operational friction",
      headline: "Where service firms lose time and clarity",
      items: [
        {
          title: "Clients cannot see delivery status",
          description:
            "Progress lives in email threads and decks instead of a shared portal.",
        },
        {
          title: "Onboarding resets every engagement",
          description:
            "Teams recreate intake checklists and document requests from scratch.",
        },
        {
          title: "Delivery work and CRM stay disconnected",
          description:
            "Sales context never reaches delivery, and delivery status never returns to account owners.",
        },
        {
          title: "Reporting is manual and late",
          description:
            "Leaders assemble updates by hand instead of pulling from operational systems.",
        },
      ],
    },
    approach: {
      eyebrow: "Approach",
      headline: "Designed around how service businesses operate",
      paragraphs: [
        "Professional services firms need clarity for clients and control for delivery teams. We prioritize portals, workflow systems, and UX that reduce confusion before engineering scales the wrong process.",
        "We do not claim legal, accounting, or regulatory specialization. Industry context informs discovery; verified expertise claims stay off this page.",
      ],
    },
    relevant_services: [
      "custom-software-development",
      "web-development",
      "ai-automation",
      "ui-ux-design",
    ],
    related_industries: ["startups-saas", "real-estate"],
    faq: {
      eyebrow: "Professional services FAQ",
      headline: "Questions service-firm buyers ask",
      items: [
        {
          question: "Do you specialize in legal or accounting software?",
          answer:
            "We build portals and workflow tools for professional firms broadly. We do not claim regulatory specialization for any single profession.",
        },
        {
          question: "Can you build a client portal without rewriting everything?",
          answer:
            "Often yes. Many engagements start by connecting intake, status, and document workflows around systems you already use.",
        },
        {
          question: "Is this the same as custom software?",
          answer:
            "Custom software is a core capability. This page focuses on service-firm operating context — client delivery, portals, and retention workflows.",
        },
      ],
    },
    cta: {
      eyebrow: "Professional services",
      headline: "Ready to give clients and teams a clearer delivery system?",
      description:
        "Tell us how engagements move today. We will outline portal and workflow options that fit.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: {
        label: "See How We Work",
        href: "/process/",
      },
    },
  },

  "startups-saas": {
    slug: "startups-saas",
    path: "/industries/startups-saas/",
    breadcrumb_label: "Startups & SaaS",
    short_label: "Startups & SaaS",
    summary:
      "Product engineering for SaaS founders and startup teams — MVPs, platforms, UX, and maintainable foundations.",
    seo: {
      title: "SaaS Development Company | Softabyte Labs",
      description:
        "Softabyte Labs helps US SaaS founders and product teams with MVP-to-scale engineering, UX, automation, and infrastructure — without generic startup hype or capability-page duplication.",
      path: "/industries/startups-saas/",
    },
    hero: {
      eyebrow: "Startups & SaaS",
      h1: "Product engineering for SaaS teams building something worth scaling",
      description:
        "Focused MVP scope, maintainable foundations, and product iteration for founders and product teams — without funding hype or fake growth promises.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: {
        label: "Explore Custom Software",
        href: "/services/custom-software-development/",
      },
    },
    section_order: [
      "workflow",
      "wide_visual",
      "use_cases",
      "problems",
      "relevant_services",
      "approach",
      "faq",
      "related_industries",
    ],
    workflow: {
      eyebrow: "Product journey",
      headline: "Validate scope → improve",
      description:
        "A product lifecycle for shipping focused scope and iterating from real usage — not a copy of the company Process page.",
      steps: [
        { label: "Validate scope" },
        { label: "Design" },
        { label: "Build" },
        { label: "Launch" },
        { label: "Learn" },
        { label: "Improve" },
      ],
    },
    use_cases: {
      eyebrow: "What we build",
      headline: "SaaS products and startup platforms",
      items: [
        {
          title: "MVPs with intentional scope",
          description:
            "Ship the smallest useful product that proves the core workflow — not a kitchen-sink beta.",
        },
        {
          title: "SaaS application platforms",
          description:
            "Multi-user products with accounts, roles, and maintainable architecture.",
        },
        {
          title: "Customer dashboards and admin systems",
          description:
            "Interfaces for end users and operators that stay coherent as features grow.",
        },
        {
          title: "Onboarding and subscription-related flows",
          description:
            "Experiences that reduce drop-off and clarify value early — without inventing growth metrics.",
        },
        {
          title: "Mobile companion apps",
          description:
            "When the product genuinely needs native or cross-platform presence beyond responsive web.",
        },
        {
          title: "API integrations and analytics interfaces",
          description:
            "Connections and visibility that support product decisions after launch.",
        },
      ],
    },
    problems: {
      eyebrow: "Build considerations",
      headline: "Where product teams lose execution clarity",
      items: [
        {
          title: "Scope expands before the core loop works",
          description:
            "Teams build features instead of proving the primary user job.",
        },
        {
          title: "Design and engineering drift apart",
          description:
            "UI decisions arrive late, creating rework and inconsistent product behavior.",
        },
        {
          title: "Foundations that cannot absorb iteration",
          description:
            "Early shortcuts make every release slower once real users appear.",
        },
        {
          title: "Infrastructure treated as an afterthought",
          description:
            "Launch happens without environments, monitoring, or a clear ownership model.",
        },
      ],
    },
    approach: {
      eyebrow: "Approach",
      headline: "Reduce execution friction. Ship focused scope.",
      paragraphs: [
        "We help SaaS and startup teams clarify the product loop, design the critical flows, and engineer maintainable foundations. Iteration follows real product needs — not roadmap theater.",
        "We do not promise funding, product-market fit, millions of users, or a successful launch. Those outcomes depend on the market and the team.",
      ],
    },
    relevant_services: [
      "custom-software-development",
      "web-development",
      "mobile-app-development",
      "ui-ux-design",
    ],
    related_industries: ["ecommerce", "professional-services"],
    faq: {
      eyebrow: "Startups & SaaS FAQ",
      headline: "Questions product teams ask",
      items: [
        {
          question: "Do you only build MVPs?",
          answer:
            "No. MVPs are one engagement type. We also help teams improve existing SaaS products, dashboards, and architecture as scope grows.",
        },
        {
          question: "Can you help after launch?",
          answer:
            "Yes. Iteration, integrations, UX refinement, and hosting/operations support are common follow-on work when needed.",
        },
        {
          question: "Will this guarantee product-market fit?",
          answer:
            "No. We reduce execution friction and help you ship focused, maintainable product work. Market outcomes remain yours.",
        },
        {
          question: "How is this different from custom software or web development?",
          answer:
            "Those are capabilities. This page covers SaaS and startup product context — MVP scope, product iteration, and platform foundations.",
        },
      ],
    },
    cta: {
      eyebrow: "Startups & SaaS",
      headline: "Building a product that needs disciplined engineering?",
      description:
        "Share the core user job and current stage. We will help clarify scope and next steps.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: {
        label: "Explore Services",
        href: "/services/",
      },
      ambient_glow: true,
    },
  },
};

export function get_industry_by_slug(slug) {
  return industry_pages[slug] || null;
}

export function get_all_industry_slugs() {
  return Object.keys(industry_pages);
}

export function get_industry_page(slug) {
  return industry_pages[slug] || null;
}
