import { notFound } from "next/navigation";
import { BlogArticleView } from "@/components/blog/BlogArticleView";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  get_blog_post_by_slug,
  get_published_blog_slugs,
  get_related_blog_posts,
} from "@/lib/blog/repository";
import { create_page_metadata } from "@/lib/seo/metadata";
import {
  get_blog_breadcrumb_schema,
  get_blog_posting_schema,
} from "@/lib/seo/blog_structured_data";

export function generateStaticParams() {
  return get_published_blog_slugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = get_blog_post_by_slug(slug);

  if (!post) {
    return {};
  }

  return create_page_metadata({
    title: post.meta_title,
    description: post.meta_description,
    path: post.path,
    title_absolute: true,
  });
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = get_blog_post_by_slug(slug);

  if (!post) {
    notFound();
  }

  const related_posts = get_related_blog_posts(post, 3);
  const posting_schema = get_blog_posting_schema(post);
  const breadcrumb_schema = get_blog_breadcrumb_schema([
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: post.title },
  ]);

  return (
    <>
      {posting_schema && <JsonLd data={posting_schema} />}
      <JsonLd data={breadcrumb_schema} />
      <BlogArticleView post={post} related_posts={related_posts} />
    </>
  );
}
