"use client";

import Link from "next/link";
import { homeOffer } from "@/lib/home-offer";
import { site } from "@/lib/site";

/**
 * Thumb-reachable CTAs on small screens — Call Now is primary (tel:) for conversion.
 * z-30 keeps the bar under the mobile menu overlay (z-40+).
 */
export function MobileStickyActions() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-gw-border bg-gw-white/98 px-4 py-3 shadow-[0_-10px_32px_rgba(15,31,28,0.14)] backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      role="navigation"
      aria-label="Quick actions"
    >
      <p className="mx-auto mb-2 max-w-lg text-center text-[0.6875rem] font-semibold leading-tight text-gw-teal-dark">
        {homeOffer.heroNearCtaLineShort}
      </p>
      <div className="mx-auto flex max-w-lg gap-3.5">
        <a
          href={site.phoneTel}
          aria-label="Call now for relief"
          className="flex min-h-12 min-w-0 flex-[1.25] flex-col items-center justify-center gap-0 rounded-xl bg-gw-teal px-2 py-2 text-center text-sm font-bold leading-tight text-white shadow-md transition hover:bg-gw-teal-dark active:bg-gw-teal-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gw-teal-dark sm:flex-row sm:gap-2 sm:px-3 sm:text-base"
        >
          <PhoneIcon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" aria-hidden />
          <span>
            Call Now
            <span className="block text-[0.65rem] font-semibold text-white/90 sm:inline sm:text-xs">
              for relief
            </span>
          </span>
        </a>
        <Link
          href="/contact/"
          aria-label="Book your first visit"
          className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1 rounded-xl border-2 border-gw-teal bg-gw-white px-1.5 text-xs font-bold leading-[1.15] text-gw-teal-dark transition hover:bg-gw-cream active:bg-gw-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gw-teal sm:gap-2 sm:px-3 sm:text-sm"
        >
          <CalendarIcon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" aria-hidden />
          <span className="max-w-[7.25rem] text-center sm:max-w-none">Book Your First Visit</span>
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
