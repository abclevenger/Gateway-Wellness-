import { VaCommunityCareBadge } from "@/components/VaCommunityCareBadge";
import { homeTrust } from "@/lib/home-trust";

export function HomeTrustStrip() {
  return (
    <div className="border-t border-white/15 text-gw-cream">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-6">
        <TrustCell
          label={homeTrust.google.label}
          value={homeTrust.google.value}
          href={homeTrust.google.href}
        />
        <TrustCell label={homeTrust.years.label} value={homeTrust.years.value} />
        <TrustCell label={homeTrust.insurance.label} value={homeTrust.insurance.value} />
        <TrustCell label={homeTrust.team.label} value={homeTrust.team.value} />
      </div>
      <div className="border-t border-white/10 px-4 py-4 sm:px-6">
        <p className="mx-auto max-w-2xl text-center text-[11px] leading-snug text-gw-cream/70 sm:text-xs">
          Eligible veterans: we see patients through{" "}
          <span className="font-semibold text-gw-cream/90">VA Community Care</span> when your VA
          referral authorizes care in the community.
        </p>
        <VaCommunityCareBadge className="mx-auto mt-3 max-w-6xl" />
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
      <p className="text-[11px] font-semibold uppercase tracking-wider text-gw-cream/60">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold leading-snug text-white">{value}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg px-1 py-0.5 transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gw-accent"
      >
        {inner}
      </a>
    );
  }

  return <div className="rounded-lg px-1 py-0.5">{inner}</div>;
}
