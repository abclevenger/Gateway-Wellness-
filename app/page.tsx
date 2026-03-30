import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppointmentForm } from "@/components/AppointmentForm";
import { defaultSiteDescription, localSeo } from "@/lib/local-seo";
import { defaultOgImage } from "@/lib/seo";
import { site } from "@/lib/site";

const homeOgTitle = `${site.name} | ${localSeo.cityState}`;

export const metadata: Metadata = {
  title: `Chiropractor, PT & medical rehab in ${localSeo.cityState}`,
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

const highlights = [
  {
    title: "Personalized treatment",
    body: "You will receive a full individualized treatment plan.",
  },
  {
    title: "Licensed therapists",
    body: "Your treatment will be performed by only licensed therapists.",
  },
  {
    title: "Experienced staff",
    body: "Our therapists are trained and certified in therapy technique.",
  },
  {
    title: "Comfortable clinic",
    body: "Our clinic feels like a comfortable health & fitness center.",
  },
  {
    title: "Practitioners network",
    body: "We will work closely with all your health practitioners.",
  },
  {
    title: "Therapy goals",
    body: "Setting goals is the best way to enjoy a successful outcome.",
  },
];

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
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gw-accent">
            {site.tagline}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl">
            Welcome to {site.name}
          </h1>
          <p className="mt-3 max-w-2xl text-sm font-medium text-gw-cream/85">
            {site.address.street} · {localSeo.cityState} · Serving {localSeo.county} &amp;{" "}
            Tampa Bay
          </p>
          <p className="mt-6 max-w-2xl text-lg text-gw-cream/90">
            We will be your first choice, your second opinion, or your last resort —
            with personalized care across chiropractic, medical, physical therapy, and
            massage.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact/"
              className="rounded-full bg-gw-accent px-6 py-3 text-sm font-semibold text-gw-ink shadow-sm transition hover:opacity-90"
            >
              Schedule an appointment
            </Link>
            <Link
              href="/online-scheduling/"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              24/7 online scheduling
            </Link>
          </div>
          <p className="mt-5 text-sm text-gw-cream/75">
            Prefer to call?{" "}
            <a
              href={site.phoneTel}
              className="font-semibold text-gw-accent underline decoration-gw-accent/50 underline-offset-2 hover:decoration-gw-accent"
            >
              {site.phone}
            </a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gw-border bg-gw-white p-6 shadow-sm"
            >
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gw-teal-dark">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gw-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-gw-border bg-gw-white">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-gw-teal-dark">
            {site.name} primary goal
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gw-muted">
            Our primary goal is to be your{" "}
            <span className="font-semibold text-gw-ink">first choice</span> as a wellness
            partner — from injury through functional rehabilitation — so you can enjoy a
            life pain-free on your own terms instead of adjusting your life to work around
            your pain.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-gw-teal-dark">
          Meet our team
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gw-border bg-gw-cream/50 p-8">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gw-teal-dark">
            About our practice
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gw-muted">
            Our team of highly trained professionals utilizes the latest healing
            technologies to restore you to pain-free health quickly and safely. We
            thoroughly evaluate and treat contributing root factors related to your
            issue — including overall body condition, genetics, and postural habits.
          </p>
          <p className="mt-4 text-sm font-semibold text-gw-teal-dark">
            {site.name} accepts most health insurance.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <h3 className="text-center font-[family-name:var(--font-display)] text-xl font-semibold text-gw-teal-dark">
            Plans &amp; networks we often work with
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-xs text-gw-muted">
            Logos are for identification only. Benefits and participation vary by plan —
            call <a href={site.phoneTel} className="text-gw-teal underline">{site.phone}</a>{" "}
            or your carrier to confirm coverage.
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
        </div>
      </section>

      <section className="bg-gw-teal text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold">
                Your health is our top priority
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/90">
                Request an appointment today — we are here to help with every issue you may
                have.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>{site.address.street}</li>
                <li>
                  {site.address.city}, {site.address.state} {site.address.zip}
                </li>
                <li>
                  <a href={site.phoneTel} className="font-semibold underline">
                    {site.phone}
                  </a>
                </li>
              </ul>
            </div>
            <AppointmentForm
              variant="consult"
              heading="Consult with us"
              intro="Have a medical question? Fill out the form and our staff will contact you by the end of the next working day."
            />
          </div>
        </div>
      </section>
    </>
  );
}
