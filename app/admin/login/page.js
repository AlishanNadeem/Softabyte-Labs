import { create_page_metadata } from "@/lib/seo/metadata";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata = create_page_metadata({
  title: "Admin Login",
  description: "Sign in to the Softabyte Labs admin console.",
  path: "/admin/login/",
  robots: { index: false, follow: false },
});

export default async function AdminLoginPage({ searchParams }) {
  const params = await searchParams;
  const next_raw = String(params?.next || "/admin/");
  const next_path =
    next_raw.startsWith("/admin/") && !next_raw.includes("//")
      ? next_raw
      : "/admin/";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-deep px-4 py-12">
      <LoginForm next_path={next_path} />
    </div>
  );
}
