import type { LucideIcon } from "lucide-react";
import { BookOpenCheck, CheckCircle2, Clock, ShieldCheck, Stethoscope } from "lucide-react";
import type { ReactNode } from "react";
import { useCountdown } from "./countdown";

export function TopBanner() {
  const time = useCountdown();
  return (
    <div className="sticky top-0 z-20 bg-navy px-4 py-2 text-center text-sm font-bold text-primary-foreground">
      Black Friday agora · só esse mês · termina em{" "}
      <span className="font-mono text-timer tabular-nums">{time}</span>
    </div>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-3 text-navy">
          <Stethoscope className="h-5 w-5 text-teal" />
          <span className="font-display font-bold">Enfermagem em Estudo</span>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8 sm:py-12">{children}</main>
      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        Material digital de estudo. Não garante aprovação em concursos.
      </footer>
    </div>
  );
}

export type Feature = { icon: LucideIcon; title: string; text: string };

export function OfferPage(props: {
  step: string;
  badge: string;
  title: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  sectionTitle: string;
  features: Feature[];
  includes: string[];
  acceptId: string;
  declineId: string;
}) {
  const time = useCountdown();
  return (
    <Shell>
      <p className="text-xs font-bold uppercase tracking-widest text-teal">{props.step}</p>
      <section className="mt-3 grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
        <div>
          <span className="inline-block rounded-full bg-teal-soft px-3 py-1 text-xs font-bold text-teal">
            {props.badge}
          </span>
          <h1 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">{props.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{props.subtitle}</p>
        </div>
        <div className="relative rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="flex h-36 items-center justify-center rounded-xl bg-teal-soft">
            <BookOpenCheck className="h-16 w-16 text-teal" strokeWidth={1.5} />
          </div>
          <p className="mt-4 text-center text-sm font-semibold text-muted-foreground">Material digital (PDF)</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">{props.sectionTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {props.features.map((f) => (
            <div key={f.title} className="rounded-xl border bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-soft">
                <f.icon className="h-5 w-5 text-teal" />
              </div>
              <h3 className="mt-3 text-base font-bold">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-xl rounded-2xl border-2 border-teal bg-card p-6 text-center shadow-[var(--shadow-card)] sm:p-8">
        <h2 className="text-xl font-bold">O que você recebe</h2>
        <ul className="mt-4 space-y-2 text-left">
          {props.includes.map((i) => (
            <li key={i} className="flex gap-2 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              {i}
            </li>
          ))}
        </ul>
        {props.oldPrice && (
          <p className="mt-6 text-sm text-muted-foreground line-through">De {props.oldPrice}</p>
        )}
        <p className={`${props.oldPrice ? "" : "mt-6"} font-display text-4xl font-bold text-navy`}>{props.price}</p>
        <p className="mt-1 text-xs text-muted-foreground">pagamento único</p>
        <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy">
          <Clock className="h-4 w-4 text-teal" /> Oferta termina em{" "}
          <span className="font-mono tabular-nums text-teal">{time}</span>
        </p>

        <div
          id={props.acceptId}
          data-cakto-slot="accept"
          className="mt-5 rounded-xl border-2 border-dashed border-teal bg-teal-soft p-5 text-sm font-semibold text-teal"
        >
          Espaço reservado: botão oficial Cakto para ACEITAR a oferta
        </div>
        <div
          id={props.declineId}
          data-cakto-slot="decline"
          className="mt-3 rounded-xl border border-dashed p-3 text-xs text-muted-foreground"
        >
          Espaço reservado: link oficial Cakto para RECUSAR a oferta
        </div>
        <p className="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4" /> Pagamento processado pela plataforma Cakto
        </p>
      </section>
    </Shell>
  );
}

export const offerHead = (title: string, description: string) => () => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ],
});
