import { BlogPostForm } from "@/components/admin/BlogPostForm";

export const metadata = {
  title: "New Blog Post",
  robots: { index: false, follow: false },
};

export default function AdminBlogNewPage() {
  return <BlogPostForm mode="create" post={null} />;
}
