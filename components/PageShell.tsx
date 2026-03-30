import type { ReactNode } from "react";
import { AutoBreadcrumbs } from "@/components/AutoBreadcrumbs";
import { MobileStickyActions } from "@/components/MobileStickyActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <AutoBreadcrumbs />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 pb-[calc(6.5rem+env(safe-area-inset-bottom,0px))] outline-none md:pb-0"
      >
        {children}
      </main>
      <SiteFooter />
      <MobileStickyActions />
    </div>
  );
}
