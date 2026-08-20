import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { primary_cta } from "@/config/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background-deep/95 backdrop-blur-sm">
      <div className="ds-container flex items-center justify-between gap-4 h-[4.5rem] lg:h-20">
        <Logo className="shrink-0" />
        <DesktopNavigation />
        <div className="hidden lg:block shrink-0">
          <Button href={primary_cta.href} variant="primary">
            {primary_cta.label}
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </Button>
        </div>
        <MobileNavigation />
      </div>
    </header>
  );
}
