import { googleMapsDirectionsUrl, site } from "@/lib/site";

export function GoogleMapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-2xl border border-gw-border bg-gw-cream/30 shadow-sm ring-1 ring-black/5">
        <iframe
          title={`Map: ${site.name}`}
          src={site.googleMapsEmbedSrc}
          className="h-[280px] w-full border-0 sm:h-[380px] md:h-[450px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-3 text-center text-sm text-gw-muted">
        <a
          href={googleMapsDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gw-teal underline underline-offset-2"
        >
          Open in Google Maps
        </a>
        {" · "}
        <span>Get directions to our Land O&apos; Lakes office</span>
      </p>
    </div>
  );
}
