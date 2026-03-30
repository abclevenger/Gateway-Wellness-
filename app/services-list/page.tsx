import { ServicesListContent } from "@/content/ServicesListContent";
import { ProseArticle } from "@/components/ProseArticle";
import { localPageMeta } from "@/lib/page-meta";

export const metadata = localPageMeta({
  path: "/services-list/",
  title: "Clinic services list — Land O' Lakes, FL",
  description:
    "Full list of chiropractic, medical, massage, and physical therapy services at Gateway Wellness & Rehab on Land O' Lakes Blvd.",
});

export default function ServicesListPage() {
  return (
    <ProseArticle>
      <ServicesListContent />
    </ProseArticle>
  );
}
