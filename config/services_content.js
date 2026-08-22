export const services_hub = {
  seo: {
    title: "Services | Softabyte Labs",
    description:
      "Custom software, web and mobile development, AI automation, UI/UX design, and managed application hosting for US businesses.",
    path: "/services/",
  },
  hero: {
    eyebrow: "Capabilities",
    h1: "Services",
    description:
      "Six connected capabilities for US businesses building or improving digital products. Choose the service that matches your initiative — or start with a conversation if the scope spans more than one.",
  },
  intro: {
    eyebrow: "Overview",
    headline: "Software, product, and infrastructure — delivered as connected work",
    description:
      "Softabyte Labs helps US businesses design, build, and run digital systems. Each service below has a dedicated page with scope, fit, and next steps.",
    paragraphs: [
      "The homepage introduces our positioning. This hub helps you route to the right capability without repeating full service detail.",
      "Most client engagements combine more than one area — for example, UX design with web development, or custom software with hosting and automation.",
    ],
  },
  overview_visual: {
    eyebrow: "Capability overview",
    headline: "Six services — one connected delivery model",
    description:
      "Software, product, design, automation, and infrastructure planned as one coherent engagement when your initiative spans more than one area.",
  },
  index_section: {
    eyebrow: "Service index",
    headline: "Explore each capability",
    description: "Every service has a dedicated page with problems solved, deliverables, and FAQs.",
  },
  capabilities_section: {
    eyebrow: "Connected delivery",
    headline: "Capabilities work together — not as disconnected vendor handoffs",
    description:
      "Design, engineering, automation, and infrastructure stay aligned when they are planned as one product story.",
    paragraphs: [
      "Custom software often needs UX clarity, API integrations, and a production environment. Web and mobile products benefit from the same discipline. AI automation is most valuable when it connects to systems people already use.",
      "If your initiative spans multiple areas, we can scope phased delivery rather than forcing everything into a single service label.",
    ],
  },
  engagement_section: {
    eyebrow: "Engagement approach",
    headline: "Discovery first, then a clear path to build and launch",
    description:
      "We start by understanding goals, constraints, users, and existing systems before committing to a delivery plan.",
    paragraphs: [
      "Engagements typically move through discovery, planning, design where needed, development, launch, and ongoing improvement. See the Process page for full detail on how we run each phase.",
      "The most useful next step is a direct conversation about what you are building, replacing, or improving.",
    ],
  },
  industries_section: {
    eyebrow: "Industry context",
    headline: "Services apply across operating environments",
    description:
      "Industry pages cover vertical-specific requirements in more depth. Service pages stay focused on what we deliver.",
    paragraphs: [
      "Healthcare, real estate, logistics, ecommerce, professional services, and SaaS teams often need different combinations of the same core capabilities — custom systems, customer-facing products, automation, and reliable infrastructure.",
      "We can discuss industry context during discovery without turning a service page into a vertical keyword page.",
    ],
  },
  cta: {
    eyebrow: "Start a conversation",
    headline: "Not sure which service fits your initiative?",
    description:
      "Tell us what you are trying to accomplish. We will help route you to the right capability and next step.",
    primary_action: { label: "Start a Project", href: "/contact/" },
    secondary_action: { label: "How we work", href: "/process/" },
  },
};

export const service_pages = {
  "custom-software-development": {
    slug: "custom-software-development",
    path: "/services/custom-software-development/",
    breadcrumb_label: "Custom Software Development",
    short_label: "Custom Software Development",
    summary:
      "Business systems, internal tools, and platforms built around how your company operates.",
    seo: {
      title: "Custom Software Development Company | Softabyte Labs",
      description:
        "Softabyte Labs designs and builds custom software for US businesses replacing spreadsheets, legacy systems, and misfit SaaS.",
      path: "/services/custom-software-development/",
    },
    hero: {
      eyebrow: "Custom Software Development",
      h1: "Custom software for US businesses that have outgrown generic tools",
      description:
        "We design and build software around your workflows, data, and integrations — when off-the-shelf products create friction instead of clarity.",
      layout: "split",
      ambient_variant: "hero-primary",
    },
    sections: [
      {
        type: "intro",
        theme: "primary",
        eyebrow: "When off-the-shelf stops fitting",
        headline: "Software shaped around how your business actually runs",
        paragraphs: [
          "Custom software is the right conversation when spreadsheets, legacy tools, or mismatched SaaS products force teams to work around the system instead of with it.",
          "Softabyte Labs builds business platforms, internal tools, customer portals, and operational systems with maintainable architecture — not one-off scripts that become impossible to change.",
        ],
      },
      {
        type: "audience",
        theme: "secondary",
        eyebrow: "Fit",
        headline: "Who this service is for",
        for_items: [
          "Operations leaders replacing manual workflows or disconnected tools",
          "Teams outgrowing spreadsheets for core business processes",
          "Companies integrating multiple systems into one coherent platform",
          "Product owners building internal or customer-facing business software",
        ],
        not_for_items: [
          "You only need a marketing website with standard CMS content",
          "A mature SaaS product already covers the workflow with acceptable tradeoffs",
          "The primary need is commodity hosting without application engineering",
        ],
      },
      {
        type: "problems",
        theme: "deep",
        eyebrow: "Business problems",
        headline: "Problems custom software is built to solve",
        description:
          "These are common reasons US businesses invest in a custom build.",
        items: [
          {
            title: "Workflows trapped in spreadsheets",
            description:
              "Critical operations depend on fragile files, manual updates, and tribal knowledge.",
          },
          {
            title: "Legacy systems that cannot change",
            description:
              "Old software blocks new features, integrations, or reporting the business needs now.",
          },
          {
            title: "SaaS that almost fits",
            description:
              "Off-the-shelf tools require workarounds, duplicate data entry, or expensive customization layers.",
          },
          {
            title: "No single source of truth",
            description:
              "Teams pull data from multiple systems with no reliable view of operations or customers.",
          },
        ],
      },
      {
        type: "deliverables",
        theme: "primary",
        eyebrow: "What we build",
        headline: "Custom systems we design and engineer",
        items: [
          {
            title: "Internal business platforms",
            description: "Admin tools, operations dashboards, and workflow systems for teams.",
          },
          {
            title: "Customer and partner portals",
            description: "Secure interfaces for external users tied to your business logic.",
          },
          {
            title: "Integration layers",
            description: "APIs and services connecting CRMs, ERPs, payment tools, and internal data.",
          },
          {
            title: "Replace-and-extend programs",
            description: "Phased migration from legacy tools to maintainable modern systems.",
          },
        ],
      },
      {
        type: "comparison",
        theme: "secondary",
        eyebrow: "Build vs buy",
        headline: "When custom software is justified — and when it is not",
        description:
          "Custom development should solve a real operational or product gap, not become the default answer.",
        left_title: "Existing SaaS is often enough when",
        left_items: [
          "The workflow is standard and widely supported by mature products",
          "Speed to launch matters more than deep workflow fit",
          "Your team can operate within the product's constraints long term",
          "Integration requirements are modest and well supported",
        ],
        right_title: "Custom software becomes justified when",
        right_items: [
          "Workflow fit is a competitive or operational advantage",
          "Integrations and data models are unique to your business",
          "Off-the-shelf tools create costly manual work or risk",
          "You need ownership over the roadmap, code, and long-term change",
        ],
      },
      {
        type: "technology",
        theme: "primary",
        variant: "static",
      },
      {
        type: "process",
        theme: "deep",
        eyebrow: "Approach",
        headline: "From discovery to maintainable delivery",
        description:
          "Custom projects benefit from clarity before build accelerates.",
        steps: [
          {
            step: "01",
            title: "Discovery",
            description: "Map users, workflows, systems, and constraints.",
          },
          {
            step: "02",
            title: "Architecture direction",
            description: "Define scope, integrations, and maintainable structure.",
          },
          {
            step: "03",
            title: "Design & build",
            description: "Shape UX where needed, then develop in validated increments.",
          },
          {
            step: "04",
            title: "Launch & care",
            description: "Deploy, support adoption, and plan ongoing improvement.",
          },
        ],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      headline: "Common questions about custom software",
      items: [
        {
          question: "Do we own the code?",
          answer:
            "Ownership and licensing terms are defined during contracting. We build for long-term client control rather than unnecessary lock-in.",
        },
        {
          question: "Can you integrate with our existing tools?",
          answer:
            "Yes. Integrations with CRMs, payment platforms, internal databases, and third-party APIs are common parts of custom software work.",
        },
        {
          question: "How is custom software different from web development?",
          answer:
            "Web development focuses on websites and web applications as products. Custom software owns business systems, internal platforms, and workflow-specific engineering.",
        },
        {
          question: "What happens after launch?",
          answer:
            "We can support hosting, monitoring, enhancements, and operational care — especially when the product remains business-critical.",
        },
      ],
    },
    related_services: ["ai-automation", "web-development", "hosting-infrastructure"],
    cta: {
      eyebrow: "Custom software",
      headline: "Replacing tools that no longer fit how you operate?",
      description:
        "Share what you are building or replacing. We will outline a practical next step.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: { label: "Explore Services", href: "/services/" },
    },
  },

  "web-development": {
    slug: "web-development",
    path: "/services/web-development/",
    breadcrumb_label: "Web Development",
    short_label: "Web Development",
    summary:
      "Marketing sites, web applications, and customer-facing products engineered for performance and clarity.",
    seo: {
      title: "Web Development Company | Softabyte Labs",
      description:
        "Premium web development for US businesses: marketing sites and web applications with performance, accessibility, and SEO built in.",
      path: "/services/web-development/",
    },
    hero: {
      eyebrow: "Web Development",
      h1: "Web development for brands that need more than a template",
      description:
        "We build marketing sites and web applications with strong engineering, usable interfaces, and SEO-ready architecture — not generic templates with your logo applied.",
    },
    sections: [
      {
        type: "comparison",
        theme: "primary",
        eyebrow: "Two web needs",
        headline: "Marketing websites and web applications are different engagements",
        description:
          "Both belong on the web, but they require different planning, architecture, and success measures.",
        left_title: "Marketing website",
        left_items: [
          "Clear positioning, content hierarchy, and conversion paths",
          "Performance, accessibility, and SEO foundations",
          "Manageable content updates without breaking layout",
          "Brand-consistent presentation across devices",
        ],
        right_title: "Web application",
        right_items: [
          "Authenticated experiences and role-based workflows",
          "Data models, APIs, and business logic in the browser and server",
          "Integrations with internal or third-party systems",
          "Long-term maintainability and feature expansion",
        ],
      },
      {
        type: "intro",
        theme: "secondary",
        eyebrow: "Positioning",
        headline: "Web products engineered for business use",
        paragraphs: [
          "Softabyte Labs builds web experiences for US businesses that need reliability, clarity, and room to grow — whether the goal is lead generation, customer self-service, or a core product interface.",
          "Performance, accessibility, and SEO are treated as build requirements, not post-launch fixes.",
        ],
      },
      {
        type: "wide_visual",
        theme: "deep",
      },
      {
        type: "deliverables",
        theme: "deep",
        eyebrow: "What we build",
        headline: "Web work we deliver",
        items: [
          {
            title: "Business and marketing websites",
            description: "Premium sites with strong content structure and technical SEO foundations.",
          },
          {
            title: "Customer portals and logged-in products",
            description: "Web applications with authentication, dashboards, and workflow tools.",
          },
          {
            title: "Product marketing and launch sites",
            description: "Focused experiences supporting a product go-to-market story.",
          },
          {
            title: "Performance and refactor programs",
            description: "Improvements to existing sites that are slow, hard to change, or poorly structured.",
          },
        ],
      },
      {
        type: "problems",
        theme: "primary",
        eyebrow: "Business problems",
        headline: "Signs the current web presence is holding you back",
        items: [
          {
            title: "Template limitations",
            description: "The site looks generic and cannot express a premium brand or product story.",
          },
          {
            title: "Poor performance or mobile usability",
            description: "Slow loads, layout issues, or weak Core Web Vitals hurt trust and conversion.",
          },
          {
            title: "SEO and structure gaps",
            description: "Important pages are hard to find, poorly indexed, or missing clear intent.",
          },
          {
            title: "No path to product features",
            description: "Marketing needs outgrow the CMS, but the stack cannot support application logic.",
          },
        ],
      },
      {
        type: "technology",
        theme: "secondary",
        variant: "static",
      },
      {
        type: "text",
        theme: "primary",
        eyebrow: "Performance, SEO, and accessibility",
        headline: "UX, interface design, and development stay connected",
        paragraphs: [
          "Web projects benefit when UX and interface decisions are made before development accelerates. Our UI/UX service supports research, wireframes, and design systems that carry into production code.",
          "Technical SEO foundations — metadata, heading structure, crawlability, performance, and semantic HTML — are part of how we build.",
        ],
      },
      {
        type: "visual_split",
        theme: "deep",
        eyebrow: "Responsive experience",
        headline: "Built for desktop, tablet, and mobile",
        description:
          "Layouts and performance targets are planned across breakpoints — not squeezed in after desktop design is finished.",
        paragraphs: [
          "Responsive behavior, touch usability, and content hierarchy are treated as core requirements for modern web products.",
        ],
        visual_key: "secondary",
        visual_position: "right",
      },
      {
        type: "process",
        theme: "deep",
        eyebrow: "Delivery",
        headline: "A practical path from scope to launch",
        steps: [
          {
            step: "01",
            title: "Define the web goal",
            description: "Clarify whether the need is marketing, application, or hybrid.",
          },
          {
            step: "02",
            title: "Structure content and UX",
            description: "Plan information architecture, templates, and key user flows.",
          },
          {
            step: "03",
            title: "Build and validate",
            description: "Develop with performance, accessibility, and SEO checks in place.",
          },
          {
            step: "04",
            title: "Launch and improve",
            description: "Deploy, monitor, and iterate based on real usage.",
          },
        ],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      headline: "Web development questions",
      items: [
        {
          question: "Do you build on WordPress or headless CMS platforms?",
          answer:
            "We choose stack based on content needs, performance, and long-term maintainability. The right answer depends on how the site will be managed after launch.",
        },
        {
          question: "Is SEO included?",
          answer:
            "Technical SEO foundations — metadata, heading structure, crawlability, performance, and semantic HTML — are part of how we build. Content strategy remains a separate planning conversation.",
        },
        {
          question: "Can you work with our design team?",
          answer:
            "Yes. We can implement approved designs or collaborate through our UI/UX service when design support is needed.",
        },
      ],
    },
    related_services: ["ui-ux-design", "hosting-infrastructure", "custom-software-development"],
    cta: {
      eyebrow: "Web development",
      headline: "Need a website or web product built properly?",
      description:
        "Tell us what you are launching or replacing. We will recommend a sensible next step.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: { label: "Explore UI/UX Design", href: "/services/ui-ux-design/" },
    },
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    path: "/services/mobile-app-development/",
    breadcrumb_label: "Mobile App Development",
    short_label: "Mobile App Development",
    summary:
      "Mobile products for customers and teams that need dependable experiences on iOS and Android.",
    seo: {
      title: "Mobile App Development Company | Softabyte Labs",
      description:
        "Softabyte Labs designs and builds iOS, Android, and cross-platform apps for US businesses — with UX discipline and production engineering.",
      path: "/services/mobile-app-development/",
    },
    hero: {
      eyebrow: "Mobile App Development",
      h1: "Mobile app development for products people will actually use",
      description:
        "We build mobile products with clear UX, reliable engineering, and backend integration — not novelty apps that never earn daily use.",
      layout: "split",
    },
    sections: [
      {
        type: "intro",
        theme: "primary",
        eyebrow: "Positioning",
        headline: "Mobile products for customers and teams",
        paragraphs: [
          "Mobile app development is the right engagement when native device capabilities, offline use, notifications, or habitual daily workflows justify a dedicated product — not when a responsive website would serve the same job adequately.",
          "Softabyte Labs focuses on product-oriented applications with disciplined UX and production-ready engineering.",
        ],
      },
      {
        type: "comparison",
        theme: "secondary",
        eyebrow: "Decision guide",
        headline: "Mobile app vs responsive web",
        description:
          "A mobile app should earn its place in the product strategy.",
        left_title: "Responsive web is often enough when",
        left_items: [
          "Usage is occasional and browser access is convenient",
          "You do not need push notifications or deep device integration",
          "A single codebase for web and mobile web meets the workflow",
          "App store distribution is not important to the use case",
        ],
        right_title: "A mobile app is justified when",
        right_items: [
          "Users need frequent, fast access to core workflows",
          "Camera, GPS, offline mode, or notifications matter to the job",
          "The experience should feel native and performance-sensitive",
          "App store presence supports acquisition or trust",
        ],
      },
      {
        type: "deliverables",
        theme: "deep",
        eyebrow: "What we build",
        headline: "Mobile deliverables",
        items: [
          {
            title: "Customer-facing mobile products",
            description: "Apps for clients, members, or buyers with clear onboarding and core tasks.",
          },
          {
            title: "Internal field and operations apps",
            description: "Mobile tools for staff workflows, inspections, dispatch, or service delivery.",
          },
          {
            title: "Companion apps for web platforms",
            description: "Mobile experiences extending an existing product or portal.",
          },
          {
            title: "API-connected mobile architecture",
            description: "Apps backed by secure services, authentication, and scalable data layers.",
          },
        ],
      },
      {
        type: "technology",
        theme: "deep",
        variant: "static",
      },
      {
        type: "text",
        theme: "primary",
        eyebrow: "Platforms",
        headline: "iOS, Android, and cross-platform decisions",
        paragraphs: [
          "Platform choices depend on audience, budget, timeline, and feature needs. Native and cross-platform approaches each have tradeoffs we discuss during discovery.",
          "When cross-platform frameworks such as React Native fit the product requirements, we may use them naturally — the decision is driven by product fit, not a default stack preference.",
        ],
      },
      {
        type: "text",
        theme: "secondary",
        eyebrow: "Backend integration",
        headline: "APIs, authentication, and connected services",
        paragraphs: [
          "Mobile apps rarely stand alone. We connect client applications to secure APIs, authentication, notifications, and data layers — often alongside custom software or web development work.",
        ],
      },
      {
        type: "problems",
        theme: "secondary",
        eyebrow: "Business problems",
        headline: "Problems mobile products solve",
        items: [
          {
            title: "Field teams lack usable tools",
            description: "Staff rely on phone calls, paper, or desktop-only systems in the field.",
          },
          {
            title: "Customer self-service is weak on mobile",
            description: "Users abandon flows that feel cramped, slow, or untrustworthy on phones.",
          },
          {
            title: "Product strategy requires mobile retention",
            description: "Notifications, account access, or repeat tasks justify a dedicated app.",
          },
          {
            title: "Backend integration is missing",
            description: "An app idea exists, but APIs, auth, and data sync are undefined.",
          },
        ],
      },
      {
        type: "process",
        theme: "deep",
        eyebrow: "Approach",
        headline: "From product clarity to store-ready delivery",
        steps: [
          {
            step: "01",
            title: "Validate the mobile need",
            description: "Confirm the app earns its place vs responsive web alternatives.",
          },
          {
            step: "02",
            title: "Design core flows",
            description: "Define UX for onboarding, primary tasks, and edge cases.",
          },
          {
            step: "03",
            title: "Build and integrate",
            description: "Develop client apps with secure backend services and testing.",
          },
          {
            step: "04",
            title: "Launch and maintain",
            description: "Support store submission, monitoring, and post-launch improvements.",
          },
        ],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      headline: "Mobile app questions",
      items: [
        {
          question: "Do you publish to the App Store and Google Play?",
          answer:
            "We can support store submission as part of launch planning. Store policies, assets, and account ownership are confirmed during the project.",
        },
        {
          question: "Can you build the backend too?",
          answer:
            "Yes. Mobile products often require APIs, authentication, and admin tools tied to custom software or web development work.",
        },
        {
          question: "How do you handle ongoing updates?",
          answer:
            "Maintenance plans depend on product needs. We can discuss support after launch as part of hosting or a separate care engagement.",
        },
      ],
    },
    related_services: ["ui-ux-design", "custom-software-development", "ai-automation"],
    cta: {
      eyebrow: "Mobile apps",
      headline: "Building a mobile product people will rely on?",
      description:
        "Share your product idea and audience. We will help clarify scope and next steps.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: { label: "Explore UI/UX Design", href: "/services/ui-ux-design/" },
    },
  },

  "ai-automation": {
    slug: "ai-automation",
    path: "/services/ai-automation/",
    breadcrumb_label: "AI & Automation",
    short_label: "AI & Automation",
    summary:
      "Workflow automation, AI integrations, and intelligent product features tied to real operational outcomes.",
    seo: {
      title: "AI Automation for Business | Softabyte Labs",
      description:
        "Practical AI integration and workflow automation for US businesses. Built into real operations — not a demo that never ships.",
      path: "/services/ai-automation/",
    },
    hero: {
      eyebrow: "AI & Automation",
      h1: "AI and automation that changes how the work gets done",
      description:
        "Practical automation and AI integrations inside the systems your team already uses — focused on operational outcomes, not hype demos.",
      ambient_variant: "ai",
    },
    sections: [
      {
        type: "visual_split",
        theme: "primary",
        eyebrow: "Practical automation",
        headline: "Automation and AI connected to real operations",
        description:
          "Workflow design, integrations, and production implementation — not disconnected pilots.",
        paragraphs: [
          "Softabyte Labs focuses on systems your team already uses, with clear boundaries, monitoring, and human review where decisions matter.",
        ],
        visual_position: "left",
      },
      {
        type: "intro",
        theme: "secondary",
        eyebrow: "Scope",
        headline: "Where automation creates measurable operational value",
        paragraphs: [
          "The strongest automation projects start with a defined workflow, measurable time cost, and a clear owner after launch.",
          "We scope AI and automation around systems, data boundaries, and review steps — not novelty features disconnected from operations.",
        ],
      },
      {
        type: "comparison",
        theme: "secondary",
        eyebrow: "Practical guardrails",
        headline: "What should be automated — and what should not",
        description:
          "Good automation respects system boundaries and human accountability.",
        left_title: "Strong automation candidates",
        left_items: [
          "Repeatable data movement between tools",
          "Document intake, classification, and routing with review steps",
          "Rules-based alerts, approvals, and status updates",
          "AI-assisted drafting or summarization with human verification",
        ],
        right_title: "Keep human judgment when",
        right_items: [
          "Decisions carry legal, financial, or safety consequences",
          "Data quality is too inconsistent for reliable automation",
          "Stakeholders need transparent reasoning before acting",
          "Workflow exceptions are common and context-heavy",
        ],
      },
      {
        type: "deliverables",
        theme: "deep",
        eyebrow: "What we deliver",
        headline: "AI and automation work we take on",
        items: [
          {
            title: "Workflow automation",
            description: "Connect tools, trigger actions, and reduce repetitive manual steps.",
          },
          {
            title: "AI integrations",
            description: "Add model-backed features to existing web, mobile, or internal systems.",
          },
          {
            title: "Operational assistants",
            description: "Interfaces that help teams retrieve, summarize, or route information faster.",
          },
          {
            title: "Process instrumentation",
            description: "Logging, monitoring, and fallback paths so automation remains trustworthy.",
          },
        ],
      },
      {
        type: "text",
        theme: "primary",
        eyebrow: "Implementation types",
        headline: "Rules-based automation, AI-assisted workflows, and human checkpoints",
        paragraphs: [
          "Not every problem needs a model. Many improvements come from better workflow design, integrations, and deterministic rules with clear ownership.",
          "When AI adds value, we design for human review, data boundaries, and failure modes up front — especially in operations where errors create downstream cost.",
        ],
      },
      {
        type: "technology",
        theme: "primary",
        variant: "static",
      },
      {
        type: "problems",
        theme: "secondary",
        eyebrow: "Business problems",
        headline: "Operational friction automation can address",
        items: [
          {
            title: "Manual handoffs between tools",
            description: "Teams copy data between CRMs, inboxes, spreadsheets, and internal systems.",
          },
          {
            title: "Slow response to inbound requests",
            description: "Routing, triage, and follow-up depend on individuals remembering steps.",
          },
          {
            title: "Product gaps competitors already solve with smarter workflows",
            description: "Customers expect faster self-service or intelligent in-product assistance.",
          },
          {
            title: "Pilot projects that never reach production",
            description: "Demos exist, but no integration, monitoring, or ownership in live systems.",
          },
        ],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      headline: "AI and automation questions",
      items: [
        {
          question: "Will AI replace our team?",
          answer:
            "No. Our focus is reducing repetitive work and improving systems — with human review where decisions matter.",
        },
        {
          question: "Can you automate within our existing software?",
          answer:
            "Often yes. Integrations depend on API access, data quality, and workflow design. Discovery confirms what is feasible.",
        },
        {
          question: "Do you build chatbots?",
          answer:
            "We may build assistant interfaces when they serve a defined workflow. We do not treat chatbots as a default answer to every AI question.",
        },
        {
          question: "How do you handle data privacy?",
          answer:
            "Data boundaries, access controls, and review steps are defined during scoping — especially when customer or operational data is involved.",
        },
      ],
    },
    related_services: ["custom-software-development", "hosting-infrastructure", "web-development"],
    related_copy: {
      headline: "Automation often connects to broader product work",
    },
    cta: {
      eyebrow: "AI & Automation",
      headline: "Trying to reduce manual work without another disconnected pilot?",
      description:
        "Describe the workflow you want to improve. We will discuss practical automation options.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: { label: "Explore Custom Software", href: "/services/custom-software-development/" },
      ambient_glow: true,
    },
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    path: "/services/ui-ux-design/",
    breadcrumb_label: "UI/UX Design",
    short_label: "UI/UX Design",
    summary:
      "Research, UX, and interface design that supports usable products — not decoration added after development.",
    seo: {
      title: "UI/UX Design Agency | Softabyte Labs",
      description:
        "UI/UX and product design for US companies that want interfaces as considered as the engineering behind them.",
      path: "/services/ui-ux-design/",
    },
    hero: {
      eyebrow: "UI/UX Design",
      h1: "UI/UX design for digital products and premium websites",
      description:
        "Research, UX, and interface design that reduces confusion before development starts — for web, mobile, and product experiences.",
      align: "left",
    },
    sections: [
      {
        type: "intro",
        theme: "primary",
        eyebrow: "UX before development",
        headline: "Design decisions that make engineering faster and products clearer",
        paragraphs: [
          "UI/UX design at Softabyte Labs covers product research, information architecture, interaction design, and interface design for digital experiences — not logo-only branding or social creative production.",
          "Clear UX reduces rework, shortens development cycles, and helps teams align on what is being built before expensive code is written.",
        ],
      },
      {
        type: "full_bleed_visual",
        theme: "deep",
      },
      {
        type: "deliverables",
        theme: "secondary",
        eyebrow: "What we design",
        headline: "Design capabilities",
        items: [
          {
            title: "UX research and workflow mapping",
            description: "Understand users, tasks, and friction before visual design begins.",
          },
          {
            title: "Information architecture",
            description: "Structure content, navigation, and product areas for clarity.",
          },
          {
            title: "Wireframes and prototypes",
            description: "Test flows and layout decisions with reviewable artifacts.",
          },
          {
            title: "Interface design and design systems",
            description: "Visual systems that carry consistently into web and mobile builds.",
          },
        ],
      },
      {
        type: "audience",
        theme: "primary",
        eyebrow: "Scope",
        headline: "What this service includes — and what it does not",
        for_items: [
          "Product UX for web and mobile applications",
          "Website UX and interface design for premium business sites",
          "Design support paired with Softabyte Labs engineering delivery",
          "Design systems and component direction for implementation teams",
        ],
        not_for_items: [
          "Standalone logo or brand identity projects with no product interface work",
          "Social media creative production",
          "Pure marketing copywriting without interface design scope",
        ],
      },
      {
        type: "text",
        theme: "secondary",
        eyebrow: "Connected delivery",
        headline: "Design and engineering as one product story",
        paragraphs: [
          "Design work is most effective when it connects to implementation. We commonly pair UI/UX with web development, mobile app development, or custom software depending on the product.",
          "The goal is not a handoff packet that engineering interprets alone — it is a shared product direction both teams can execute.",
        ],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      headline: "UI/UX design questions",
      items: [
        {
          question: "Can you design without building?",
          answer:
            "Yes, when the engagement scope is design-only. Many clients prefer connected design and engineering for faster, more accurate delivery.",
        },
        {
          question: "Do you conduct user research?",
          answer:
            "Research depth depends on the project. We use practical research methods appropriate to timeline and decision risk.",
        },
        {
          question: "Which tools do you use?",
          answer:
            "Tooling varies by team and client workflow. Deliverables focus on clarity for stakeholders and implementable direction for engineering.",
        },
      ],
    },
    related_services: ["web-development", "mobile-app-development", "custom-software-development"],
    cta: {
      eyebrow: "UI/UX Design",
      headline: "Need clearer product or website experience direction?",
      description:
        "Tell us what you are designing or redesigning. We will outline a practical design engagement.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: { label: "Explore Web Development", href: "/services/web-development/" },
    },
  },

  "hosting-infrastructure": {
    slug: "hosting-infrastructure",
    path: "/services/hosting-infrastructure/",
    breadcrumb_label: "Hosting & Infrastructure",
    short_label: "Hosting & Infrastructure",
    summary:
      "Deployment, hosting, monitoring, and ongoing care so products stay stable after launch.",
    seo: {
      title: "Managed Application Hosting | Softabyte Labs",
      description:
        "Managed application hosting, deployment, monitoring, and maintenance for web products and custom software — so launch is not the end of ownership.",
      path: "/services/hosting-infrastructure/",
    },
    hero: {
      eyebrow: "Hosting & Infrastructure",
      h1: "Hosting and infrastructure for applications that have to stay up",
      description:
        "Application hosting, deployment, environments, and production support — for products that need reliable operation after launch, not commodity shared hosting.",
    },
    sections: [
      {
        type: "visual_split",
        theme: "primary",
        eyebrow: "Infrastructure",
        headline: "Production environments built for applications",
        description:
          "Deployment architecture, monitoring, and operational foundations — not generic website hosting sold on price alone.",
        paragraphs: [
          "Softabyte Labs configures environments for web products and custom software with backups, SSL, access control, and documented runbooks.",
        ],
        visual_position: "right",
      },
      {
        type: "intro",
        theme: "secondary",
        eyebrow: "Positioning",
        headline: "Infrastructure for applications — not commodity website hosting",
        paragraphs: [
          "This service covers deployment, cloud or VPS environments, databases, backups, SSL, monitoring, and production support for web products and custom software.",
          "Engagements focus on products we build or inherit — with clear ownership, runbooks, and support scope defined before go-live.",
        ],
      },
      {
        type: "technology",
        theme: "deep",
        variant: "static",
      },
      {
        type: "comparison",
        theme: "primary",
        eyebrow: "Ownership models",
        headline: "Build → launch → handoff or ongoing support",
        description:
          "Infrastructure ownership should be explicit before go-live.",
        left_title: "Client-owned infrastructure",
        left_items: [
          "You retain cloud accounts and billing ownership",
          "We configure, deploy, and document the environment",
          "Handoff includes runbooks and access structure",
          "Support can continue under a separate agreement if needed",
        ],
        right_title: "Managed setup and ongoing care",
        right_items: [
          "We manage deployment pipelines and environment configuration",
          "Monitoring and backup routines are part of operations",
          "Updates and incident response follow agreed support scope",
          "No implied 24/7 SLA unless explicitly contracted",
        ],
      },
      {
        type: "deliverables",
        theme: "deep",
        eyebrow: "Capabilities",
        headline: "Infrastructure work we provide",
        items: [
          {
            title: "Application deployment",
            description: "Production and staging environments with repeatable release paths.",
          },
          {
            title: "Cloud and VPS configuration",
            description: "Servers, containers, reverse proxies, and environment hardening.",
          },
          {
            title: "Database and storage setup",
            description: "Managed data layers with backup and recovery considerations.",
          },
          {
            title: "Monitoring and maintenance",
            description: "Health checks, logs, SSL renewal, and planned update routines.",
          },
        ],
      },
      {
        type: "problems",
        theme: "primary",
        eyebrow: "Business problems",
        headline: "Why teams invest in managed application hosting",
        items: [
          {
            title: "Launch is treated as the finish line",
            description: "No one owns monitoring, backups, or updates after go-live.",
          },
          {
            title: "Environment knowledge lives with one person",
            description: "Deployments become risky when infrastructure is undocumented.",
          },
          {
            title: "The product outgrew cheap hosting",
            description: "Traffic, background jobs, or integrations need a real application environment.",
          },
          {
            title: "Security basics are unclear",
            description: "SSL, access control, and backup routines were never formalized.",
          },
        ],
      },
      {
        type: "process",
        theme: "secondary",
        eyebrow: "Approach",
        headline: "Production readiness as a deliberate step",
        steps: [
          {
            step: "01",
            title: "Assess the application",
            description: "Review architecture, dependencies, and operational requirements.",
          },
          {
            step: "02",
            title: "Design environments",
            description: "Define staging, production, backups, and access controls.",
          },
          {
            step: "03",
            title: "Deploy and verify",
            description: "Launch with monitoring, SSL, and documented runbooks.",
          },
          {
            step: "04",
            title: "Support or hand off",
            description: "Continue care under agreed scope or transfer with clear ownership.",
          },
        ],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      headline: "Hosting and infrastructure questions",
      items: [
        {
          question: "Is this shared WordPress hosting?",
          answer:
            "No. This service is for application hosting, deployment, and production support — not commodity shared hosting plans.",
        },
        {
          question: "Can you host apps built by another team?",
          answer:
            "Sometimes, after a technical review. Feasibility depends on code quality, documentation, and operational requirements.",
        },
        {
          question: "Do you provide 24/7 support?",
          answer:
            "Support hours and response expectations are defined in the engagement agreement. We do not imply always-on SLA unless explicitly contracted.",
        },
      ],
    },
    related_services: ["web-development", "custom-software-development", "ai-automation"],
    cta: {
      eyebrow: "Hosting & Infrastructure",
      headline: "Need a production environment you can trust after launch?",
      description:
        "Tell us about the application and current hosting situation. We will outline practical next steps.",
      primary_action: { label: "Start a Project", href: "/contact/" },
      secondary_action: { label: "Explore Web Development", href: "/services/web-development/" },
    },
  },
};

export function get_service_by_slug(slug) {
  return service_pages[slug] || null;
}

export function get_all_service_slugs() {
  return Object.keys(service_pages);
}

export function get_service_page(slug) {
  return service_pages[slug] || null;
}
