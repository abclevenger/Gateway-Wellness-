import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";
import { GlobalJsonLd } from "@/components/GlobalJsonLd";
import { PageShell } from "@/components/PageShell";
import { defaultSiteDescription, localSeo } from "@/lib/local-seo";
import { defaultOgImage } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const defaultTitle = `${site.name} | Chiropractor & Rehab in ${localSeo.cityState}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: defaultSiteDescription,
  keywords: [
    `chiropractor ${localSeo.city}`,
    `chiropractic ${localSeo.cityState}`,
    `physical therapy ${localSeo.city}`,
    `massage therapy ${localSeo.city}`,
    `pain management ${localSeo.county}`,
    `${localSeo.county} chiropractor`,
    "Land O Lakes Blvd clinic",
    "Gateway Wellness Land O Lakes",
    "spinal decompression Land O Lakes",
    "auto accident chiropractor Florida",
    "workers comp physical therapy Pasco County",
    "physical therapy Wesley Chapel FL",
    "physical therapy Lutz Florida",
    "deep tissue massage Wesley Chapel",
    "medical massage Land O Lakes",
    "family medicine Land O Lakes FL",
    "pediatric chiropractor Tampa Bay",
    "integrative wellness clinic Pasco",
  ],
  openGraph: {
    title: defaultTitle,
    description: defaultSiteDescription,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultSiteDescription,
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <GlobalJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gw-teal-dark focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <PageShell>{children}</PageShell>
        {/* LeadConnector / HighLevel chat widget */}
        <Script
          id="leadconnector-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          strategy="afterInteractive"
          {...{
            "data-resources-url":
              "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
            "data-widget-id": "66fadf4c3fd69aa90a77e1d4",
          }}
        />
      </body>
    </html>
  );
}
