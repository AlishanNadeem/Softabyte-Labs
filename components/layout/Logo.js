import Image from "next/image";
import Link from "next/link";

const logo_width = 150;
const logo_height = 290;

export function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ds-focus rounded-sm ${className}`}
      aria-label="Softabyte Labs — Home"
    >
      <Image
        src="/logo.png"
        alt="Softabyte Labs"
        width={logo_width}
        height={logo_height}
        className="h-7 w-auto sm:h-8 md:h-9"
      />
    </Link>
  );
}
