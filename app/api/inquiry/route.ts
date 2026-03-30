import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type Variant = "consult" | "contact" | "general" | "pediatric";

type InquiryBody = {
  variant: Variant;
  first_name?: string;
  last_name?: string;
  name?: string;
  parent_name?: string;
  child_name?: string;
  child_dob?: string;
  phone: string;
  email: string;
  message: string;
};

function isNonEmpty(s: unknown): s is string {
  return typeof s === "string" && s.trim().length > 0;
}

function validate(body: InquiryBody): string | null {
  if (!isNonEmpty(body.phone) || !isNonEmpty(body.email) || !isNonEmpty(body.message)) {
    return "Phone, email, and message are required.";
  }
  switch (body.variant) {
    case "contact":
      if (!isNonEmpty(body.first_name) || !isNonEmpty(body.last_name)) {
        return "First and last name are required.";
      }
      break;
    case "pediatric":
      if (!isNonEmpty(body.parent_name) || !isNonEmpty(body.child_name)) {
        return "Parent/guardian and child's name are required.";
      }
      break;
    case "consult":
    case "general":
      if (!isNonEmpty(body.name)) {
        return "Name is required.";
      }
      break;
    default:
      return "Invalid form type.";
  }
  return null;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.PABBLY_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "PABBLY_WEBHOOK_URL is not configured." },
      { status: 503 },
    );
  }

  let parsed: unknown;
  try {
    parsed = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!parsed || typeof parsed !== "object") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const body = parsed as InquiryBody;
  const err = validate(body);
  if (err) {
    return NextResponse.json({ error: err }, { status: 400 });
  }

  const subjectLabels: Record<Variant, string> = {
    consult: `Website inquiry — ${site.name}`,
    contact: `Appointment request — ${site.name}`,
    general: `General form — ${site.name}`,
    pediatric: `Pediatric form — ${site.name}`,
  };

  const payload = {
    source: "gateway-wellness-website",
    submitted_at: new Date().toISOString(),
    subject: subjectLabels[body.variant],
    ...body,
  };

  const upstream = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!upstream.ok) {
    return NextResponse.json(
      { error: "Could not deliver your message. Please call the office." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
