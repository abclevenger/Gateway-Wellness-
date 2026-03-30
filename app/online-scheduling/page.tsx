import Link from "next/link";
import { localPageMeta } from "@/lib/page-meta";
import { site } from "@/lib/site";

export const metadata = localPageMeta({
  path: "/online-scheduling/",
  title: "Online scheduling — Gateway Wellness Land O' Lakes",
  description:
    "Schedule with Gateway Wellness & Rehab in Land O' Lakes and Pasco County — online requests and phone booking.",
});

export default function OnlineSchedulingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-gw-teal-dark">
        Online scheduling
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-gw-muted">
        We offer convenient scheduling options for new and existing patients. If you
        previously used a third-party scheduling widget on our prior website, you can
        continue booking by phone — or submit an appointment request online and our team
        will confirm your time.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={site.phoneTel}
          className="rounded-full bg-gw-teal px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gw-teal-dark"
        >
          Call {site.phone}
        </a>
        <Link
          href="/contact/"
          className="rounded-full border border-gw-border bg-gw-white px-6 py-3 text-sm font-semibold text-gw-ink shadow-sm hover:bg-gw-cream"
        >
          Request an appointment online
        </Link>
      </div>
    </div>
  );
}
