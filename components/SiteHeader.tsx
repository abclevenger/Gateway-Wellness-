"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { navGroups, site } from "@/lib/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const mobileMenuId = useId();

  const closeDesktopMenus = useCallback(() => setOpenGroup(null), []);

  useEffect(() => {
    if (openGroup === null) return;
    const onPointerDown = (e: PointerEvent) => {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(e.target as Node)
      ) {
        setOpenGroup(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenGroup(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openGroup]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-gw-border/80 bg-gw-white/98 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gw-teal"
        >
          <span
            className="inline-flex items-center justify-center rounded-lg bg-gw-teal-dark px-2.5 py-2 shadow-sm ring-1 ring-black/10 sm:px-3"
            title={site.name}
          >
            <Image
              src={site.logoSrc}
              alt={site.name}
              width={800}
              height={300}
              className="h-8 w-auto max-w-[160px] object-contain object-center sm:h-9 sm:max-w-[200px]"
              priority
            />
          </span>
        </Link>

        <nav
          ref={desktopNavRef}
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main"
        >
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gw-muted transition hover:bg-gw-cream hover:text-gw-ink"
          >
            Home
          </Link>

          {navGroups.map((group) => {
            const isOpen = openGroup === group.label;
            return (
              <div key={group.label} className="relative">
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-gw-cream hover:text-gw-ink ${
                    isOpen ? "bg-gw-cream text-gw-ink" : "text-gw-muted"
                  }`}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenGroup((prev) => (prev === group.label ? null : group.label))
                  }
                >
                  {group.label}
                  <Chevron className={isOpen ? "rotate-180" : ""} />
                </button>
                {isOpen ? (
                  <ul
                    className="absolute left-0 top-full z-30 mt-1 min-w-60 rounded-xl border border-gw-border bg-gw-white py-2 shadow-lg"
                    role="menu"
                  >
                    {group.items.map((item) => (
                      <li key={item.href} role="none">
                        <Link
                          href={item.href}
                          role="menuitem"
                          className="block px-4 py-2.5 text-sm text-gw-ink transition hover:bg-gw-cream"
                          onClick={closeDesktopMenus}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}

          <Link
            href="/contact/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gw-muted transition hover:bg-gw-cream hover:text-gw-ink"
          >
            Contact
          </Link>

          <span className="mx-2 h-6 w-px bg-gw-border" aria-hidden />

          <a
            href={site.phoneTel}
            className="rounded-lg px-2 py-2 text-sm font-semibold tabular-nums text-gw-teal transition hover:bg-gw-cream"
          >
            {site.phone}
          </a>

          <Link
            href="/online-scheduling/"
            className="ml-1 rounded-full border border-gw-teal/40 px-4 py-2 text-sm font-semibold text-gw-teal-dark transition hover:border-gw-teal hover:bg-gw-cream"
          >
            Schedule
          </Link>
          <Link
            href="/contact/"
            className="ml-2 rounded-full bg-gw-teal px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gw-teal-dark"
          >
            Book visit
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneTel}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gw-border text-gw-teal transition hover:bg-gw-cream"
            aria-label={`Call ${site.phone}`}
          >
            <PhoneGlyph className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gw-border text-gw-ink transition hover:bg-gw-cream"
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-gw-ink/30 lg:hidden"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div
            id={mobileMenuId}
            className="absolute left-0 right-0 top-full z-50 max-h-[min(78dvh,560px)] overflow-y-auto border-b border-gw-border bg-gw-white shadow-xl lg:hidden"
          >
            <div className="mx-auto max-w-6xl space-y-1 px-4 py-4">
              <Link
                href="/"
                className="block rounded-xl px-4 py-3 text-base font-medium text-gw-ink hover:bg-gw-cream"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              {navGroups.map((group) => (
                <MobileAccordion
                  key={group.label}
                  label={group.label}
                  items={group.items}
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}

              <Link
                href="/contact/"
                className="block rounded-xl px-4 py-3 text-base font-medium text-gw-ink hover:bg-gw-cream"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              <div className="mt-4 grid gap-2 border-t border-gw-border pt-4">
                <Link
                  href="/contact/"
                  className="flex items-center justify-center rounded-xl bg-gw-teal py-3.5 text-center text-base font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a visit
                </Link>
                <Link
                  href="/online-scheduling/"
                  className="flex items-center justify-center rounded-xl border border-gw-border py-3.5 text-center text-base font-semibold text-gw-teal-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  Online scheduling
                </Link>
                <a
                  href={site.phoneTel}
                  className="flex items-center justify-center rounded-xl border border-gw-border py-3.5 text-center text-base font-semibold text-gw-teal"
                >
                  Call {site.phone}
                </a>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}

function MobileAccordion({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { label: string; href: string }[];
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="rounded-xl border border-gw-border/80 bg-gw-cream/30">
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-gw-ink"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
      >
        {label}
        <Chevron className={expanded ? "rotate-180" : ""} />
      </button>
      {expanded ? (
        <ul className="border-t border-gw-border/60 pb-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-2.5 pl-6 text-sm text-gw-muted hover:bg-gw-cream hover:text-gw-ink"
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 text-gw-muted transition-transform ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function PhoneGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
