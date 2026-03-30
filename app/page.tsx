import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppointmentForm } from "@/components/AppointmentForm";
import { HomeFeaturedTestimonials } from "@/components/HomeFeaturedTestimonials";
import { HomeFinalCta } from "@/components/HomeFinalCta";
import { HomePriorityServices } from "@/components/HomePriorityServices";
import { HomeTrustStrip } from "@/components/HomeTrustStrip";
import { HomeWhatToExpect } from "@/components/HomeWhatToExpect";
import { VaCommunityCareBadge } from "@/components/VaCommunityCareBadge";
import { defaultSiteDescription, localSeo } from "@/lib/local-seo";
import { defaultOgImage } from "@/lib/seo";
import { site } from "@/lib/site";

const homeOgTitle = `${site.name} | ${localSeo.cityState}`;

/** SEO-lite: intent-led homepage title; keeps brand + location visible in search. */
const homeMetaTitle = `Back & neck pain · Chiro, PT & massage | ${localSeo.cityState}`;

export const metadata: Metadata = {
  title: homeMetaTitle,
  description: defaultSiteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeOgTitle,
    description: defaultSiteDescription,
    url: "/",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: homeOgTitle,
    description: defaultSiteDescription,
    images: [defaultOgImage.url],
  },
};

const heroBullets = [
  "Same-day visits when we can fit you in",
  "We will check benefits — have your member ID ready",
  "Florida: no referral required for chiropractic",
] as const;

const team = [
  {
    name: "Dr. Robert Malhoit",
    role: "Chiropractor",
    image: "/team/dr-robert-malhoit.png",
    imageAlt:
      "Dr. Robert Malhoit, chiropractor at Gateway Wellness & Rehab, in navy scrubs.",
  },
  {
    name: "Dr. Christopher Gleis, MD",
    role: "Specializes in pain management",
    image: "/team/dr-christopher-gleis.png",
    imageAlt:
      "Dr. Christopher Gleis, MD, pain management physician, in a white lab coat.",
  },
  {
    name: "Dr. Kristopher Fagan",
    role: "Chiropractor — pregnancy & pediatrics",
    image: "/team/kristopher-fagan.png",
    imageAlt: "Dr. Kristopher Fagan, chiropractor at Gateway Wellness & Rehab.",
  },
  {
    name: "Jessica Swanson",
    role: "Massage therapist",
    image: "/team/jessica-swanson.png",
    imageAlt:
      "Jessica Swanson, licensed massage therapist at Gateway Wellness & Rehab.",
  },
] as const;

const insuranceLogos = [
  { src: "/insurance/cigna.png", alt: "Cigna — health insurance" },
  { src: "/insurance/medicare.png", alt: "Medicare logo" },
  { src: "/insurance/tricare.png", alt: "TRICARE logo" },
  { src: "/insurance/baycare.png", alt: "BayCare logo" },
  {
    src: "/insurance/blue-cross-blue-shield.png",
    alt: "BlueCross BlueShield logo",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gw-teal-dark text-gw-cream">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-gw-accent blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gw-teal blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pb-6 pt-14 sm:px-6 sm:pb-8 sm:pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gw-accent sm:text-sm">
            {site.address.street} · {localSeo.cityState}
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[1.65rem] font-semibold leading-[1.12] sm:text-3xl md:text-[2.35rem]">
            Back, neck, or injury pain? One Land O&apos; Lakes team for relief &amp; rehab.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-snug text-gw-cream/90 sm:text-lg">
            Chiropractors, physical therapy, massage, and medical support — same address on
            Land O&apos; Lakes Blvd. Pick a time online, request a slot, or call. We&apos;ll
            tell you what to bring and what happens first.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gw-accent px-8 py-3.5 text-center text-base font-semibold text-gw-ink shadow-md transition hover:opacity-95"
            >
              Get on the schedule
            </Link>
            <a
              href={site.phoneTel}
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/40 bg-transparent px-8 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white/10"
            >
              Call {site.phone}
            </a>
          </div>
          <ul className="mt-8 max-w-xl space-y-3 text-sm text-gw-cream/90 sm:text-[0.9375rem]">
            {heroBullets.map((text) => (
              <li key={text} className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-gw-accent" aria-hidden>
                  <CheckIcon className="h-5 w-5" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <HomeTrustStrip />
      </section>

      <HomePriorityServices />
      <HomeWhatToExpect />
      <HomeFeaturedTestimonials />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="text-center font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark sm:text-3xl md:text-4xl">
          Providers who actually talk to each other
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-gw-muted sm:text-base">
          Chiro, PT, massage, and medical — under one roof in {localSeo.city}. Less runaround,
          clearer plans.
        </p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl border border-gw-border bg-gw-white shadow-sm">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 220px"
                />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-gw-ink">
                {member.name}
              </h3>
              <p className="text-sm text-gw-muted">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gw-border bg-gw-cream/50 p-6 sm:p-8">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gw-teal-dark">
            Straight answers, then a plan
          </h3>
          <p className="mt-3 text-sm leading-snug text-gw-muted sm:text-base">
            We look at how you move, what hurts, and your history — then map next steps
            (adjustments, PT, massage, imaging only when it fits). Most major insurance
            accepted; same-day openings when the schedule allows.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <h3 className="text-center font-[family-name:var(--font-display)] text-xl font-semibold text-gw-teal-dark sm:text-2xl">
            Plans we see a lot
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-xs leading-snug text-gw-muted sm:text-sm">
            Logos = common networks, not a guarantee. Your plan rules the final answer — call{" "}
            <a href={site.phoneTel} className="font-medium text-gw-teal underline">
              {site.phone}
            </a>{" "}
            or your carrier to verify.
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
            {insuranceLogos.map((logo) => (
              <li key={logo.src}>
                <div className="flex h-16 w-36 items-center justify-center rounded-xl bg-gw-white px-3 py-2 shadow-sm ring-1 ring-gw-border/80">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={56}
                    className="max-h-12 w-auto object-contain object-center"
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-center gap-3 border-t border-gw-border pt-10">
            <p className="text-center text-xs font-semibold uppercase tracking-wide text-gw-muted">
              Veterans — Community Care
            </p>
            <VaCommunityCareBadge />
          </div>
        </div>
      </section>

      <HomeFinalCta />

      <section className="bg-gw-teal text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
                Rather talk or text first?
              </h2>
              <p className="mt-3 text-sm leading-snug text-white/90 sm:text-base">
                Drop a message — we reply next business day. Hurting today? Skip the wait:
                call <a href={site.phoneTel} className="font-semibold underline">{site.phone}</a>.
              </p>
              <ul className="mt-6 space-y-1.5 text-sm text-white/95">
                <li>{site.address.street}</li>
                <li>
                  {site.address.city}, {site.address.state} {site.address.zip}
                </li>
                <li>
                  <a href={site.phoneTel} className="text-base font-semibold underline">
                    {site.phone}
                  </a>
                </li>
              </ul>
            </div>
            <AppointmentForm
              variant="consult"
              heading="Send a quick note"
              intro="What hurts, how long, and the best number to reach you. We answer within one business day — or call now for same-day options."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" className="fill-gw-accent/25 stroke-gw-accent" strokeWidth="1.5" />
      <path
        className="stroke-gw-ink"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12.5l2.5 2.5L16 9"
      />
    </svg>
  );
}
