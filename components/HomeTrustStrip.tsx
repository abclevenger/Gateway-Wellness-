import { VaCommunityCareBadge } from "@/components/VaCommunityCareBadge";
import { homeTrust } from "@/lib/home-trust";

export function HomeTrustStrip() {
  return (
    <div className="border-t border-white/15 text-gw-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:py-5">
        <TrustCell
          label={homeTrust.google.label}
          value={homeTrust.google.value}
          href={homeTrust.google.href}
        />
        <TrustCell label={homeTrust.years.label} value={homeTrust.years.value} />
        <TrustCell label={homeTrust.insurance.label} value={homeTrust.insurance.value} />
        <TrustCell label={homeTrust.team.label} value={homeTrust.team.value} />
      </div>
      <div className="border-t border-white/10 px-4 py-5 sm:px-6 sm:py-4">
        <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-gw-cream/75 sm:text-xs sm:leading-snug">
          <span className="lg:hidden">
            Veterans: <span className="font-semibold text-gw-cream/95">VA Community Care</span> when
            authorized.
          </span>
          <span className="hidden lg:inline">
            Veterans eligible for{" "}
            <span className="font-semibold text-gw-cream/90">VA Community Care</span> — we see patients
            with an approved community referral.
          </span>
        </p>
        <VaCommunityCareBadge className="mx-auto mt-4 max-w-6xl sm:mt-3" />
      </div>
    </div>
  );
}

function TrustCell({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      {label ? (
        <p className="text-[11px] font-semibold uppercase tracking-wider text-gw-cream/60">
          {label}
        </p>
      ) : null}
      <p className={label ? "mt-1 text-sm font-semibold leading-snug text-white" : "text-sm font-semibold leading-snug text-white"}>
        {value}
      </p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="-mx-0.5 block rounded-lg px-2 py-3 text-center transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gw-accent sm:mx-0 sm:px-3 sm:py-2.5 sm:text-left"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="rounded-lg px-2 py-3 text-center sm:px-1 sm:py-2 sm:text-left lg:px-2">{inner}</div>
  );
}
