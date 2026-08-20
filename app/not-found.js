import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="ds-container py-20 md:py-28">
      <p className="ds-eyebrow text-brand-primary mb-3">404</p>
      <h1 className="ds-h1 text-text-primary mb-4 max-w-xl">Page not found</h1>
      <p className="ds-body-large text-text-secondary max-w-lg mb-8">
        The page you are looking for does not exist or may have moved. Return
        home or start a project conversation.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button href="/" variant="primary">
          Back to home
        </Button>
        <Button href="/contact/" variant="secondary">
          Contact us
        </Button>
      </div>
      <p className="ds-body-small text-text-muted mt-8">
        Looking for services?{" "}
        <Link
          href="/services/"
          className="text-brand-primary hover:underline ds-focus rounded-sm"
        >
          View all services
        </Link>
      </p>
    </div>
  );
}
