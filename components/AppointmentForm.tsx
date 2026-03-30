"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Variant = "consult" | "contact" | "general" | "pediatric";

export function AppointmentForm({
  variant,
  heading,
  intro,
}: {
  variant: Variant;
  heading: string;
  intro?: string;
}) {
  const formFieldId = useId();
  const successRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (status !== "success" || !successRef.current) return;
    successRef.current.focus();
    successRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("sending");
    const fd = new FormData(form);

    const base = {
      variant,
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    let body: Record<string, string | Variant>;
    if (variant === "contact") {
      body = {
        ...base,
        first_name: String(fd.get("first_name") ?? "").trim(),
        last_name: String(fd.get("last_name") ?? "").trim(),
      };
    } else if (variant === "pediatric") {
      body = {
        ...base,
        parent_name: String(fd.get("parent_name") ?? "").trim(),
        child_name: String(fd.get("child_name") ?? "").trim(),
        child_dob: String(fd.get("child_dob") ?? "").trim(),
      };
    } else {
      body = {
        ...base,
        name: String(fd.get("name") ?? "").trim(),
      };
    }

    try {
      const res = await fetch("/api/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again or call us.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please call the office if this continues.");
    }
  }

  return (
    <section className="rounded-2xl border border-gw-border bg-gw-white p-6 shadow-sm sm:p-8">
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-gw-teal-dark">
        {heading}
      </h2>
      {intro ? (
        <p className="mt-2 text-sm leading-relaxed text-gw-muted">{intro}</p>
      ) : null}

      {status === "success" ? (
        <div
          ref={successRef}
          id="appointment-form-success"
          tabIndex={-1}
          className="mt-6 rounded-lg border border-gw-teal/30 bg-gw-teal/5 px-4 py-4 text-sm text-gw-ink outline-none ring-gw-teal/20 focus-visible:ring-2"
          role="status"
          aria-live="polite"
          aria-labelledby="appointment-form-success-title"
        >
          <p id="appointment-form-success-title" className="font-semibold text-gw-teal-dark">
            Thank you — we received your message.
          </p>
          <p className="mt-2 leading-relaxed text-gw-muted">
            Our team typically replies within one business day during office hours. If your
            need is urgent, please call{" "}
            <a href={site.phoneTel} className="font-medium text-gw-teal underline">
              {site.phone}
            </a>
            .
          </p>
          <button
            type="button"
            className="mt-4 min-h-12 rounded-full border border-gw-border bg-gw-white px-5 py-3 text-sm font-semibold text-gw-teal-dark shadow-sm transition hover:bg-gw-cream active:bg-gw-cream sm:min-h-0 sm:py-2"
            onClick={() => setStatus("idle")}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          className="mt-6 space-y-5 sm:space-y-4"
          onSubmit={handleSubmit}
          aria-busy={status === "sending"}
        >
          {variant === "contact" ? (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  fieldIdPrefix={formFieldId}
                  label="First name"
                  name="first_name"
                  required
                  autoComplete="given-name"
                />
                <Field
                  fieldIdPrefix={formFieldId}
                  label="Last name"
                  name="last_name"
                  required
                  autoComplete="family-name"
                />
              </div>
              <Field
                fieldIdPrefix={formFieldId}
                label="Phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
              />
              <Field
                fieldIdPrefix={formFieldId}
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
              />
              <Field
                fieldIdPrefix={formFieldId}
                label="Message"
                name="message"
                textarea
                required
                autoComplete="off"
              />
            </>
          ) : variant === "pediatric" ? (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  fieldIdPrefix={formFieldId}
                  label="Parent / guardian name"
                  name="parent_name"
                  required
                  autoComplete="name"
                />
                <Field
                  fieldIdPrefix={formFieldId}
                  label="Child's name"
                  name="child_name"
                  required
                  autoComplete="off"
                />
              </div>
              <Field
                fieldIdPrefix={formFieldId}
                label="Child's date of birth"
                name="child_dob"
                autoComplete="bday"
              />
              <Field
                fieldIdPrefix={formFieldId}
                label="Phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
              />
              <Field
                fieldIdPrefix={formFieldId}
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
              />
              <Field
                fieldIdPrefix={formFieldId}
                label="Message / reason for visit"
                name="message"
                textarea
                required
                autoComplete="off"
              />
            </>
          ) : (
            <>
              <Field
                fieldIdPrefix={formFieldId}
                label="Name"
                name="name"
                required
                autoComplete="name"
              />
              <Field
                fieldIdPrefix={formFieldId}
                label="Phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
              />
              <Field
                fieldIdPrefix={formFieldId}
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
              />
              <Field
                fieldIdPrefix={formFieldId}
                label="Message"
                name="message"
                textarea
                required
                autoComplete="off"
              />
            </>
          )}

          {errorMessage ? (
            <p className="text-sm font-medium text-red-700" role="alert">
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "sending"}
            className="min-h-14 w-full rounded-full bg-gw-teal px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-gw-teal-dark active:bg-gw-teal-dark disabled:cursor-not-allowed disabled:opacity-60 sm:min-h-12 sm:w-auto sm:py-3 sm:text-sm sm:font-semibold"
          >
            {status === "sending" ? (
              <span className="inline-flex items-center justify-center gap-2">
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                  aria-hidden
                />
                Sending…
              </span>
            ) : variant === "contact" ? (
              "Send request"
            ) : (
              "Submit"
            )}
          </button>
          <p className="text-xs text-gw-muted">
            Submissions go to our team only; we don&apos;t use this form for marketing texts
            without your consent. For emergencies, call 911. For same-day questions, call{" "}
            <a href={site.phoneTel} className="font-medium text-gw-teal underline">
              {site.phone}
            </a>
            .
          </p>
        </form>
      )}
    </section>
  );
}

function Field({
  fieldIdPrefix,
  label,
  name,
  type = "text",
  textarea,
  required,
  autoComplete,
  inputMode,
}: {
  fieldIdPrefix: string;
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "tel" | "email" | "text";
}) {
  const id = `${fieldIdPrefix}-${name}`;
  return (
    <div className="block text-sm font-medium text-gw-ink">
      <label htmlFor={id} className="block">
        <span>
          {label}
          {required ? (
            <span className="text-gw-muted"> (required)</span>
          ) : null}
        </span>
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={4}
          autoComplete={autoComplete}
          aria-required={required}
          className="mt-1.5 min-h-12 w-full rounded-lg border border-gw-border bg-gw-cream/40 px-3 py-3 text-base text-gw-ink outline-none ring-gw-teal/30 focus:ring-2 sm:min-h-0 sm:py-2 sm:text-sm"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          inputMode={inputMode}
          aria-required={required}
          className="mt-1.5 min-h-12 w-full rounded-lg border border-gw-border bg-gw-cream/40 px-3 py-3 text-base text-gw-ink outline-none ring-gw-teal/30 focus:ring-2 sm:min-h-0 sm:py-2 sm:text-sm"
        />
      )}
    </div>
  );
}
