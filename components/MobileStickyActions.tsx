"use client";

import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Thumb-reachable CTAs on small screens — call and book first (larger tap targets).
 */
export function MobileStickyActions() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gw-border bg-gw-white/98 px-4 py-3 shadow-[0_-6px_24px_rgba(15,31,28,0.1)] backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={site.phoneTel}
          className="flex min-h-[52px] min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-gw-teal bg-gw-white text-sm font-bold text-gw-teal-dark transition hover:bg-gw-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gw-teal"
        >
          <PhoneIcon className="h-5 w-5 shrink-0" aria-hidden />
          Call now
        </a>
        <Link
          href="/contact/"
          className="flex min-h-[52px] min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-gw-teal px-2 text-sm font-bold text-white shadow-md transition hover:bg-gw-teal-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gw-teal-dark"
        >
          <CalendarIcon className="h-5 w-5 shrink-0" aria-hidden />
          Book a visit
        </Link>
      </div>
    </div>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
