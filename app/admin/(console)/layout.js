import { require_admin } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminConsoleLayout({ children }) {
  const admin = await require_admin();
  return <AdminShell admin={admin}>{children}</AdminShell>;
}
