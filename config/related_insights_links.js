/**
 * Static, code-managed map of service/industry routes to genuinely relevant
 * published Blog articles. Intentionally selective — do not add an entry
 * just because an article exists (see docs/internal_linking_strategy.md §11).
 *
 * Kept as static data (not a MongoDB query) so service/industry pages stay
 * build-safe and statically rendered. If a linked article's title, excerpt,
 * or category changes in the Admin CMS, update the matching entry here.
 */
export const related_insights_links = {
  "/services/custom-software-development/": [
    {
      slug: "custom-software-vs-off-the-shelf",
      title: "Custom Software vs. Off-the-Shelf Software: How to Choose",
      excerpt:
        "Off-the-shelf tools ship faster. Custom software fits unusual workflows. Here is how to choose without defaulting to either extreme.",
      category: "Software Strategy",
    },
    {
      slug: "when-business-needs-client-portal",
      title: "When Does a Business Need a Client Portal?",
      excerpt:
        "A client portal is useful when coordination itself becomes the bottleneck. Here is how to recognize the tipping point — and when not to build one yet.",
      category: "Digital Operations",
    },
  ],
  "/services/web-development/": [
    {
      slug: "when-business-needs-client-portal",
      title: "When Does a Business Need a Client Portal?",
      excerpt:
        "A client portal is useful when coordination itself becomes the bottleneck. Here is how to recognize the tipping point — and when not to build one yet.",
      category: "Digital Operations",
    },
  ],
  "/services/ai-automation/": [
    {
      slug: "business-processes-worth-automating",
      title: "How to Identify Business Processes Worth Automating",
      excerpt:
        "Not every repetitive task should be automated. Learn how to identify high-value workflow candidates and prioritize them without overreaching.",
      category: "Automation",
    },
  ],
  "/industries/professional-services/": [
    {
      slug: "when-business-needs-client-portal",
      title: "When Does a Business Need a Client Portal?",
      excerpt:
        "A client portal is useful when coordination itself becomes the bottleneck. Here is how to recognize the tipping point — and when not to build one yet.",
      category: "Digital Operations",
    },
  ],
};

export function get_related_insights(path) {
  return related_insights_links[path] || [];
}
