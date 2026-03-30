import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/chiropractic-medicine/",
  "/medical-services/",
  "/physical-therapy/",
  "/massage-therapy/",
  "/services-list/",
  "/get-to-know-us/",
  "/testimonials/",
  "/faq/",
  "/privacy-policy/",
  "/terms-and-conditions/",
  "/a2p-policy/",
  "/accessibility-policy/",
  "/form/",
  "/pediatric-form/",
  "/contact/",
  "/online-scheduling/",
];

const priorityByPath: Record<string, number> = {
  "/": 1,
  "/contact/": 0.95,
  "/chiropractic-medicine/": 0.9,
  "/physical-therapy/": 0.9,
  "/massage-therapy/": 0.9,
  "/medical-services/": 0.9,
  "/faq/": 0.85,
  "/services-list/": 0.85,
  "/get-to-know-us/": 0.8,
  "/online-scheduling/": 0.8,
  "/testimonials/": 0.75,
  "/form/": 0.7,
  "/pediatric-form/": 0.7,
  "/privacy-policy/": 0.4,
  "/terms-and-conditions/": 0.4,
  "/a2p-policy/": 0.4,
  "/accessibility-policy/": 0.4,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path === "/" ||
      path === "/contact/" ||
      path === "/faq/" ||
      path === "/physical-therapy/" ||
      path === "/massage-therapy/"
        ? "weekly"
        : "monthly",
    priority: priorityByPath[path] ?? 0.75,
  }));
}
