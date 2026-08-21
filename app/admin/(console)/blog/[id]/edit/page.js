import { notFound } from "next/navigation";
import { BlogPostForm } from "@/components/admin/BlogPostForm";
import { admin_get_blog_post_by_id } from "@/lib/blog/admin_repository";

export const metadata = {
  title: "Edit Blog Post",
  robots: { index: false, follow: false },
};

export default async function AdminBlogEditPage({ params }) {
  const { id } = await params;
  const post = await admin_get_blog_post_by_id(id);

  if (!post) {
    notFound();
  }

  return <BlogPostForm mode="edit" post={post} />;
}
