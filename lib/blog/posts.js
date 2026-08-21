import { post_business_processes_worth_automating } from "@/lib/blog/posts/business_processes_worth_automating";
import { post_custom_software_vs_off_the_shelf } from "@/lib/blog/posts/custom_software_vs_off_the_shelf";
import { post_when_business_needs_client_portal } from "@/lib/blog/posts/when_business_needs_client_portal";

/**
 * Local Phase 9 blog content source.
 * Phase 10 may replace this with MongoDB blog_posts without changing UI consumers.
 */
export const blog_posts = [
  post_custom_software_vs_off_the_shelf,
  post_when_business_needs_client_portal,
  post_business_processes_worth_automating,
];
