"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Die Nachricht konnte nicht gesendet werden.");
      }

      form.reset();
      setState("success");
      setMessage(result.message ?? "Danke. Wir melden uns zeitnah.");
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Die Nachricht konnte nicht gesendet werden.",
      );
    }
  }

  return (
    <form
      className="rounded-lg border border-white/16 bg-white p-5 text-[#151a17] shadow-2xl shadow-black/18 sm:p-6"
      onSubmit={handleSubmit}
    >
      <div className="hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold">Vorname</span>
          <input
            className="mt-1 h-11 w-full rounded-md border border-[#cfd3c5] px-3 text-sm outline-none focus:border-[#2f6c5c] focus:ring-2 focus:ring-[#2f6c5c]/20"
            name="firstname"
            autoComplete="given-name"
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-bold">Nachname</span>
          <input
            className="mt-1 h-11 w-full rounded-md border border-[#cfd3c5] px-3 text-sm outline-none focus:border-[#2f6c5c] focus:ring-2 focus:ring-[#2f6c5c]/20"
            name="lastname"
            autoComplete="family-name"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold">E-Mail</span>
          <input
            className="mt-1 h-11 w-full rounded-md border border-[#cfd3c5] px-3 text-sm outline-none focus:border-[#2f6c5c] focus:ring-2 focus:ring-[#2f6c5c]/20"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-bold">Telefon</span>
          <input
            className="mt-1 h-11 w-full rounded-md border border-[#cfd3c5] px-3 text-sm outline-none focus:border-[#2f6c5c] focus:ring-2 focus:ring-[#2f6c5c]/20"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-bold">Unternehmen</span>
        <input
          className="mt-1 h-11 w-full rounded-md border border-[#cfd3c5] px-3 text-sm outline-none focus:border-[#2f6c5c] focus:ring-2 focus:ring-[#2f6c5c]/20"
          name="company"
          autoComplete="organization"
        />
      </label>

      <label className="mt-4 block">
        <span className="text-sm font-bold">Nachricht</span>
        <textarea
          className="mt-1 min-h-32 w-full resize-y rounded-md border border-[#cfd3c5] px-3 py-3 text-sm outline-none focus:border-[#2f6c5c] focus:ring-2 focus:ring-[#2f6c5c]/20"
          name="message"
          placeholder="Worum geht es bei Ihrem Prozess oder Ihrer KI-Anwendung?"
          required
        />
      </label>

      <label className="mt-4 flex gap-3 text-sm leading-6 text-[#4d5a53]">
        <input
          className="mt-1 h-4 w-4 rounded border-[#cfd3c5]"
          name="consent"
          type="checkbox"
          required
        />
        <span>
          Ich bin einverstanden, dass Willy Agency meine Angaben zur Bearbeitung
          der Anfrage in HubSpot speichert und verwendet.
        </span>
      </label>

      <button
        className="mt-5 h-11 w-full rounded-md bg-[#f1c84b] px-5 text-sm font-bold text-[#151a17] hover:bg-[#ffd966] disabled:cursor-not-allowed disabled:opacity-70"
        disabled={state === "submitting"}
        type="submit"
      >
        {state === "submitting" ? "Wird gesendet..." : "Anfrage senden"}
      </button>

      {message ? (
        <p
          className={`mt-4 text-sm font-semibold ${
            state === "success" ? "text-[#2f6c5c]" : "text-[#9b3f35]"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
