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
  "Same-day visits when we can",
  "We help verify your insurance",
  "No referral needed",
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
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-11 sm:px-6 sm:pb-8 sm:pt-20">
          <p className="text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.16em] text-gw-accent sm:text-sm sm:tracking-[0.18em]">
            {site.address.street} · {localSeo.cityState}
          </p>
          <h1 className="mt-3.5 max-w-[min(100%,19rem)] font-[family-name:var(--font-display)] text-[1.65rem] font-semibold leading-[1.12] tracking-tight sm:mt-4 sm:max-w-3xl sm:text-3xl sm:tracking-normal md:text-[2.25rem]">
            Stop Living With Back or Neck Pain
          </h1>
          <p className="mt-3 max-w-xl text-base leading-snug text-gw-cream/90 sm:mt-4 sm:max-w-2xl sm:text-lg">
            <span className="md:hidden">
              Real relief without surgery or heavy medication.
            </span>
            <span className="hidden md:inline">
              Get real relief in weeks — without surgery or heavy medication.
            </span>
          </p>
          <div className="mt-8 flex flex-col gap-3.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <Link
              href="/contact/"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-gw-accent px-8 py-4 text-center text-base font-bold text-gw-ink shadow-md transition hover:opacity-95 active:opacity-90 sm:min-h-12 sm:py-3.5 sm:font-semibold"
            >
              Book Appointment
            </Link>
            <a
              href={site.phoneTel}
              className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-white/50 bg-transparent px-8 py-4 text-center text-base font-bold text-white transition hover:bg-white/10 active:bg-white/15 sm:min-h-12 sm:py-3.5 sm:font-semibold"
            >
              Call Now
            </a>
          </div>
          <ul className="mt-8 max-w-md space-y-3 text-[0.9375rem] leading-snug text-gw-cream/90 sm:mt-8 sm:max-w-xl sm:space-y-3 sm:text-[0.9375rem]">
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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark sm:text-3xl md:text-4xl">
          Providers who actually talk to each other
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-gw-muted sm:mt-2 sm:text-base">
          <span className="md:hidden">
            Chiro, PT, massage &amp; medical — one roof in {localSeo.city}. Less runaround.
          </span>
          <span className="hidden md:inline">
            Chiro, PT, massage, and medical — under one roof in {localSeo.city}. Less runaround,
            clearer plans.
          </span>
        </p>
        <div className="mt-12 grid gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
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

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gw-border bg-gw-cream/50 p-6 sm:p-8 md:mt-16">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gw-teal-dark">
            Straight answers, then a plan
          </h3>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-gw-muted sm:mt-3 sm:text-base">
            <p className="md:hidden">
              We look at how you move, what hurts, and your history — then map next steps
              (adjustments, PT, massage; imaging when it fits).
            </p>
            <p className="hidden md:block">
              We look at how you move, what hurts, and your history — then map next steps
              (adjustments, PT, massage, imaging only when it fits). Most major insurance
              accepted; same-day openings when the schedule allows.
            </p>
            <p className="text-sm text-gw-muted md:hidden">
              Most major insurance accepted. Same-day when the schedule allows.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <h3 className="text-center font-[family-name:var(--font-display)] text-xl font-semibold text-gw-teal-dark sm:text-2xl">
            Plans we see a lot
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-gw-muted sm:mt-2 sm:text-sm sm:leading-snug">
            <span className="md:hidden">
              Logos = common networks, not a guarantee.
              <span className="mt-2 block">
                <a
                  href={site.phoneTel}
                  className="inline-flex min-h-11 items-center justify-center rounded-lg px-2 font-semibold text-gw-teal underline decoration-2 underline-offset-2"
                >
                  Call {site.phone}
                </a>{" "}
                or your carrier to verify.
              </span>
            </span>
            <span className="hidden md:inline">
              Logos = common networks, not a guarantee. Your plan rules the final answer — call{" "}
              <a href={site.phoneTel} className="font-medium text-gw-teal underline">
                {site.phone}
              </a>{" "}
              or your carrier to verify.
            </span>
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
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-10">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold sm:text-3xl">
                Rather talk or text first?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/90 sm:mt-3 sm:text-base">
                <span className="md:hidden">
                  Message us — we reply next business day. Hurting now?{" "}
                  <a href={site.phoneTel} className="font-bold underline underline-offset-2">
                    Call {site.phone}
                  </a>
                  .
                </span>
                <span className="hidden md:inline">
                  Drop a message — we reply next business day. Hurting today? Skip the wait:
                  call <a href={site.phoneTel} className="font-semibold underline">{site.phone}</a>.
                </span>
              </p>
              <ul className="mt-6 space-y-1.5 text-sm text-white/95">
                <li>{site.address.street}</li>
                <li>
                  {site.address.city}, {site.address.state} {site.address.zip}
                </li>
                <li>
                  <a
                    href={site.phoneTel}
                    className="inline-flex min-h-11 items-center text-base font-semibold underline underline-offset-2"
                  >
                    {site.phone}
                  </a>
                </li>
              </ul>
            </div>
            <AppointmentForm
              variant="consult"
              heading="Send a quick note"
              intro="What hurts, how long, and how to reach you. We reply within one business day — or call now for same-day options."
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
