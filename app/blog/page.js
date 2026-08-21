import { BlogHubView } from "@/components/blog/BlogHubView";
import { JsonLd } from "@/components/seo/JsonLd";
import { blog_hub } from "@/config/blog_content";
import {
  get_featured_blog_post,
  get_published_blog_posts,
} from "@/lib/blog/repository";
import { create_page_metadata } from "@/lib/seo/metadata";
import {
  get_blog_breadcrumb_schema,
  get_blog_hub_schema,
} from "@/lib/seo/blog_structured_data";

export const metadata = create_page_metadata({
  title: blog_hub.seo.title,
  description: blog_hub.seo.description,
  path: blog_hub.seo.path,
  title_absolute: true,
});

export default function BlogPage() {
  const posts = get_published_blog_posts();
  const featured_post = get_featured_blog_post();

  return (
    <>
      <JsonLd data={get_blog_hub_schema()} />
      <JsonLd
        data={get_blog_breadcrumb_schema([
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
        ])}
      />
      <BlogHubView featured_post={featured_post} posts={posts} />
    </>
  );
}
