import { GetToKnowUsContent } from "@/content/GetToKnowUsContent";
import { ProseArticle } from "@/components/ProseArticle";
import { localPageMeta } from "@/lib/page-meta";

export const metadata = localPageMeta({
  path: "/get-to-know-us/",
  title: "About our Land O' Lakes wellness clinic",
  description:
    "Integrative chiropractic, medical, physical therapy, and massage care in Pasco County since 2006 — Gateway Wellness & Rehab.",
});

export default function GetToKnowUsPage() {
  return (
    <ProseArticle>
      <GetToKnowUsContent />
    </ProseArticle>
  );
}
