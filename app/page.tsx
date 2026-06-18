const services = [
  {
    title: "KI-Anwendungen",
    text: "Wir entwickeln interne Tools, Kundenportale und Automationen, die echte Arbeitsabläufe abbilden.",
  },
  {
    title: "Agentic Workflows",
    text: "Mehrstufige Assistenten verbinden Wissen, Datenbanken, Nachrichtenkanäle und menschliche Freigaben.",
  },
  {
    title: "Produktisierung",
    text: "Aus einem operativen Problem entsteht ein nutzbares Produkt mit UX, Monitoring und klarer Roadmap.",
  },
];

const process = [
  "Abläufe verstehen und messbare Engpässe finden",
  "Daten, Schnittstellen und Sicherheitsgrenzen klären",
  "Prototyp in Wochen statt Quartalen bauen",
  "Mit echten Nutzern testen, nachschärfen und betreiben",
];

const stack = [
  "OpenAI",
  "Next.js",
  "Supabase",
  "Twilio",
  "Vercel",
  "HubSpot",
  "WhatsApp",
  "Analytics",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#151a17]">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-black/10 bg-[#f7f5ef]/88 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Willy Agency">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-[#111815] text-sm font-black text-[#f1c84b]">
              W
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.18em]">
              Willy Agency
            </span>
          </a>
          <nav className="hidden items-center gap-1 text-sm font-medium text-[#435049] md:flex">
            <a className="rounded-md px-3 py-2 hover:bg-black/5" href="#services">
              Leistungen
            </a>
            <a className="rounded-md px-3 py-2 hover:bg-black/5" href="#case">
              Projekt
            </a>
            <a className="rounded-md px-3 py-2 hover:bg-black/5" href="#kontakt">
              Kontakt
            </a>
          </nav>
          <a
            className="rounded-md bg-[#151a17] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2b3730]"
            href="mailto:hello@willyagency.ch?subject=KI-Anwendung%20fuer%20mein%20Unternehmen"
          >
            Projekt starten
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative isolate overflow-hidden px-5 pb-14 pt-28 sm:px-8 lg:px-10"
      >
        <div className="absolute inset-0 -z-10">
          <img
            src="/saas-fee-story-bg-clean.png"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#10211b]/78" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f5ef] to-transparent" />
        </div>

        <div className="mx-auto grid min-h-[82vh] max-w-7xl content-end gap-10 pb-12 lg:grid-cols-[minmax(0,1.08fr)_420px] lg:items-end">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#f1c84b]">
              KI-Apps fuer Unternehmen
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Wir bauen Business-Software, die mitdenkt.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
              Willy Agency entwickelt KI-basierte Anwendungen fuer Teams, die
              schneller reagieren, Wissen nutzbar machen und wiederkehrende
              Arbeit sauber automatisieren wollen.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-md bg-[#f1c84b] px-5 py-3 text-sm font-bold text-[#151a17] hover:bg-[#ffd966]"
                href="#case"
              >
                Aktuelles Projekt ansehen
              </a>
              <a
                className="rounded-md border border-white/32 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                href="#services"
              >
                Leistungen
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-white/18 bg-white/92 p-5 shadow-2xl shadow-black/20 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a3e2f]">
              Schwerpunkt
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <dt className="text-3xl font-semibold">24/7</dt>
                <dd className="mt-1 text-sm leading-5 text-[#5f6c64]">
                  KI-Service fuer Kunden und Teams
                </dd>
              </div>
              <div>
                <dt className="text-3xl font-semibold">API</dt>
                <dd className="mt-1 text-sm leading-5 text-[#5f6c64]">
                  Integration statt Insellösung
                </dd>
              </div>
              <div>
                <dt className="text-3xl font-semibold">MVP</dt>
                <dd className="mt-1 text-sm leading-5 text-[#5f6c64]">
                  Schnell testen, sauber ausbauen
                </dd>
              </div>
              <div>
                <dt className="text-3xl font-semibold">CH</dt>
                <dd className="mt-1 text-sm leading-5 text-[#5f6c64]">
                  Lokaler Kontext, robuste Umsetzung
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section id="services" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f6c5c]">
                Leistungen
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                Von der Idee zur KI-Anwendung, die im Betrieb standhaelt.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <article
                  className="rounded-lg border border-[#d8d5c8] bg-white p-5 shadow-sm"
                  key={service.title}
                >
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5c6861]">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a3e2f]">
              Arbeitsweise
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
              Pragmatisch genug fuer den Start, strukturiert genug fuer Wachstum.
            </h2>
          </div>
          <ol className="grid gap-3">
            {process.map((item, index) => (
              <li
                className="flex gap-4 rounded-lg border border-[#e1ded2] bg-[#fbfaf5] p-4"
                key={item}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[#173a31] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-base leading-7 text-[#46524b]">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="case" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2f6c5c]">
              Aktuelles Projekt
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Saas-Fee AI Concierge beantwortet Gaesteanfragen automatisch.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#5c6861]">
              Der Concierge kombiniert oeffentliche Informationen, geschuetztes
              Unterkunftswissen, Chat-Interface, Analytics und
              WhatsApp-Benachrichtigungen. So bekommen Gaeste sofort Hilfe,
              waehrend Betreiber nur bei relevanten Faellen eingreifen.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  className="rounded-md border border-[#cfd3c5] bg-white px-3 py-2 text-sm font-semibold text-[#314039]"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              className="mt-8 inline-flex rounded-md bg-[#151a17] px-5 py-3 text-sm font-bold text-white hover:bg-[#2b3730]"
              href="https://saas-fee-concierge.ch"
            >
              saas-fee-concierge.ch
            </a>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#d8d5c8] bg-white shadow-xl shadow-black/10">
            <img
              src="/saas-fee-story-bg-clean.png"
              alt="Bergpanorama von Saas-Fee als visueller Kontext des AI Concierge Projekts"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="grid gap-4 p-5 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold">5</p>
                <p className="mt-1 text-sm text-[#627069]">Sprachen</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">2</p>
                <p className="mt-1 text-sm text-[#627069]">Wissensbereiche</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">WA</p>
                <p className="mt-1 text-sm text-[#627069]">Eskalationen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-[#151a17] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f1c84b]">
              Kontakt
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              Haben Sie einen Prozess, der endlich als KI-App funktionieren soll?
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              className="rounded-lg border border-white/16 bg-white p-5 text-[#151a17] hover:bg-[#f7f5ef]"
              href="mailto:hello@willyagency.ch?subject=KI-Anwendung%20fuer%20mein%20Unternehmen"
            >
              <span className="block text-sm font-bold uppercase tracking-[0.14em] text-[#8a3e2f]">
                E-Mail
              </span>
              <span className="mt-3 block text-xl font-semibold">
                hello@willyagency.ch
              </span>
            </a>
            <a
              className="rounded-lg border border-white/16 bg-[#f1c84b] p-5 text-[#151a17] hover:bg-[#ffd966]"
              href="https://saas-fee-concierge.ch"
            >
              <span className="block text-sm font-bold uppercase tracking-[0.14em]">
                Demo
              </span>
              <span className="mt-3 block text-xl font-semibold">
                Concierge testen
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
