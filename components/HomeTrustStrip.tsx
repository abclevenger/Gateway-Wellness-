import { VaCommunityCareBadge } from "@/components/VaCommunityCareBadge";
import { homeTrust } from "@/lib/home-trust";

export function HomeTrustStrip() {
  return (
    <div className="border-t border-white/20 text-gw-cream">
      <div className="bg-gw-accent/25 px-4 py-3 shadow-inner sm:px-6">
        <p className="mx-auto max-w-4xl text-center text-[0.8125rem] font-bold leading-snug text-gw-ink sm:text-base">
          <span className="block sm:inline">Since 2006 in Land O&apos; Lakes</span>
          <span className="mx-1.5 hidden text-gw-ink/50 sm:inline" aria-hidden>
            ·
          </span>
          <span className="block sm:inline">Trusted by Pasco County neighbors</span>
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-5 sm:gap-4 sm:px-6 lg:grid-cols-4 lg:gap-5 lg:py-6">
        <TrustCell
          label={homeTrust.google.label}
          value={homeTrust.google.value}
          href={homeTrust.google.href}
        />
        <TrustCell label={homeTrust.satisfaction.label} value={homeTrust.satisfaction.value} />
        <TrustCell label={homeTrust.team.label} value={homeTrust.team.value} />
        <TrustCell label={homeTrust.insurance.label} value={homeTrust.insurance.value} />
      </div>
      <div className="border-t border-white/10 px-4 py-5 sm:px-6 sm:py-4">
        <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-gw-cream/75">
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
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gw-accent sm:text-[11px]">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold leading-snug text-white sm:text-[0.9375rem]">
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
        className="block rounded-lg bg-white/5 px-2 py-3 text-center ring-1 ring-white/10 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gw-accent sm:px-3 sm:py-3.5 sm:text-left"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="rounded-lg bg-white/5 px-2 py-3 text-center ring-1 ring-white/10 sm:px-3 sm:py-3.5 sm:text-left">
      {inner}
    </div>
  );
}
