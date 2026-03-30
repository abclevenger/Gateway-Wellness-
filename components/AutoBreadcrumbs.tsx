"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { absoluteUrl } from "@/lib/seo";

/** Trailing-slash paths (matches next.config trailingSlash). */
const PAGE_LABELS: Record<string, string> = {
  "/chiropractic-medicine/": "Chiropractic medicine",
  "/medical-services/": "Medical services",
  "/physical-therapy/": "Physical therapy",
  "/massage-therapy/": "Massage therapy",
  "/services-list/": "Services list",
  "/get-to-know-us/": "Get to know us",
  "/testimonials/": "Testimonials",
  "/faq/": "FAQ",
  "/privacy-policy/": "Privacy policy",
  "/terms-and-conditions/": "Terms & conditions",
  "/a2p-policy/": "A2P & SMS policy",
  "/accessibility-policy/": "Accessibility policy",
  "/form/": "Form",
  "/pediatric-form/": "Pediatric form",
  "/contact/": "Contact",
  "/online-scheduling/": "Online scheduling",
};

function normalizePath(pathname: string): string {
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function AutoBreadcrumbs() {
  const pathname = usePathname();
  if (!pathname) return null;

  const path = normalizePath(pathname);
  if (path === "/") return null;

  const label = PAGE_LABELS[path];
  if (!label) return null;

  const items = [
    { label: "Home", href: "/" },
    { label, href: path },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="border-b border-gw-border/80 bg-gw-cream/40"
      >
        <div className="mx-auto max-w-6xl px-4 py-2.5 text-sm sm:px-6">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gw-muted">
            {items.map((item, i) => (
              <li key={item.href} className="flex items-center gap-2">
                {i > 0 ? (
                  <span className="text-gw-border" aria-hidden>
                    /
                  </span>
                ) : null}
                {i === items.length - 1 ? (
                  <span className="font-medium text-gw-ink">{item.label}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gw-teal underline-offset-2 hover:underline"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
