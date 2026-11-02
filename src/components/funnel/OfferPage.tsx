import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  Clock,
  CreditCard,
  Download,
  FileText,
  ShieldCheck,
  Stethoscope,
  X,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { useCountdown } from "./countdown";

/** Checkout oficial da Cakto para aceitar a oferta. */
export const ACCEPT_URL = "https://pay.cakto.com.br/m6gh4fn";
/** Destino de quem não quer a oferta complementar. */
export const DECLINE_URL = "https://simuladoscronometrados.lovable.app";

export function TopBanner() {
  const time = useCountdown();
  return (
    <div className="sticky top-0 z-30 bg-navy">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5 text-center text-xs font-bold text-on-navy sm:text-sm">
        <span className="inline-flex items-center gap-1 rounded-full bg-teal px-2.5 py-0.5 text-[11px] font-extrabold tracking-wide text-on-navy uppercase">
          <Zap className="h-3 w-3" /> Black Friday
        </span>
        <span>só esse mês · termina em</span>
        <span className="font-mono text-timer tabular-nums">{time}</span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b bg-card">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy">
            <Stethoscope className="h-5 w-5 text-teal-bright" />
          </span>
          <span className="font-display text-base font-bold text-navy">Enfermagem em Estudo</span>
        </div>
        <span className="hidden items-center gap-1.5 text-xs font-semibold text-muted-foreground sm:inline-flex">
          <ShieldCheck className="h-4 w-4 text-teal" /> Ambiente 100% digital
        </span>
      </div>
    </header>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 pb-32 sm:py-12 md:pb-12">{children}</main>
      <footer className="border-t bg-card py-8">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-navy">
            <Stethoscope className="h-4 w-4 text-teal" />
            <span className="font-display text-sm font-bold">Enfermagem em Estudo</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Material digital de estudo. Não garante aprovação em concursos.
            <br className="hidden sm:block" /> Pagamento processado pela plataforma Cakto.
          </p>
        </div>
      </footer>
    </div>
  );
}

export type Feature = { icon: LucideIcon; title: string; text: string };

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold tracking-[0.2em] text-teal uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
    </div>
  );
}

const parsePrice = (v: string) => Number(v.replace(/[^\d,]/g, "").replace(",", ".")) || 0;

function discountPct(price: string, oldPrice?: string) {
  if (!oldPrice) return null;
  const p = parsePrice(price);
  const o = parsePrice(oldPrice);
  if (!p || !o || o <= p) return null;
  return Math.round((1 - p / o) * 100);
}

const steps = [
  { title: "Aceite a oferta", text: "Clique no botão abaixo para ir à página de pagamento." },
  { title: "Finalize o pagamento", text: "A cobrança é processada pela plataforma Cakto." },
  { title: "Receba o material", text: "O acesso é enviado para o e-mail usado na compra." },
];

export function OfferPage(props: {
  step: string;
  badge: string;
  title: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  sectionTitle: string;
  features: Feature[];
  /** Cards compactos em 5 colunas, para listas longas como as dez áreas. */
  dense?: boolean;
  extrasTitle?: string;
  extras?: Feature[];
  includes: string[];
  image: string;
  imageAlt: string;
}) {
  const time = useCountdown();
  const off = discountPct(props.price, props.oldPrice);
  const dense = Boolean(props.dense);

  return (
    <Shell>
      {/* HERO */}
      <section className="hero-navy relative overflow-hidden rounded-3xl px-5 py-9 sm:px-10 sm:py-14">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-[11px] font-extrabold tracking-[0.22em] text-teal-bright uppercase">
              {props.step}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-on-navy/20 bg-on-navy/10 px-3 py-1 text-xs font-bold text-on-navy">
              <BadgePercent className="h-3.5 w-3.5 text-teal-bright" /> {props.badge}
            </span>
            <h1 className="mt-4 text-3xl leading-[1.12] font-bold text-on-navy sm:text-5xl">
              {props.title}
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-on-navy-muted sm:text-lg">
              {props.subtitle}
            </p>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 text-sm font-bold text-on-navy">
              <li className="inline-flex items-center gap-2">
                <Download className="h-4 w-4 text-teal-bright" /> Acesso digital
              </li>
              <li className="inline-flex items-center gap-2">
                <FileText className="h-4 w-4 text-teal-bright" /> Formato PDF
              </li>
              <li className="inline-flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-teal-bright" /> Pagamento único
              </li>
            </ul>
          </div>

          <figure className="relative mx-auto w-full max-w-[19rem] sm:max-w-xs">
            {off !== null && (
              <span className="absolute -top-3 -left-3 z-10 -rotate-6 rounded-full bg-timer px-3 py-1.5 text-xs font-extrabold text-navy shadow-lg">
                -{off}%
              </span>
            )}
            <div className="rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-black/5">
              <img
                src={props.image}
                alt={props.imageAlt}
                width={1024}
                height={1024}
                className="w-full rounded-xl"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs font-semibold text-on-navy-muted">
              Material digital (PDF)
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-14">
        <SectionHeading eyebrow="O que está incluído" title={props.sectionTitle} />
        <div
          className={
            dense
              ? "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
              : "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {props.features.map((f, i) => (
            <article
              key={f.title}
              className={`group relative overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-0.5 hover:border-teal/45 ${dense ? "p-4" : "p-5"}`}
            >
              <span className="font-display absolute top-3 right-3.5 text-xl font-bold text-muted-foreground/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className={`flex items-center justify-center rounded-xl bg-teal-soft ${dense ? "h-9 w-9" : "h-11 w-11"}`}
              >
                <f.icon className={dense ? "h-4 w-4 text-teal" : "h-5 w-5 text-teal"} />
              </div>
              <h3 className={`font-bold text-navy ${dense ? "mt-3 text-sm" : "mt-4 text-base"}`}>
                {f.title}
              </h3>
              <p
                className={`leading-relaxed text-muted-foreground ${dense ? "mt-1 text-xs" : "mt-1.5 text-sm"}`}
              >
                {f.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* EXTRAS */}
      {props.extras && props.extras.length > 0 && (
        <section className="mt-12">
          <SectionHeading eyebrow="Método" title={props.extrasTitle ?? "Como o material funciona"} />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {props.extras.map((f) => (
              <article
                key={f.title}
                className="rounded-2xl border border-teal/25 bg-teal-soft/45 p-5 shadow-[var(--shadow-card)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-card">
                  <f.icon className="h-5 w-5 text-teal" />
                </div>
                <h3 className="mt-4 text-base font-bold text-navy">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* OFFER + PRICE */}
      <section className="mt-14 grid items-start gap-6 lg:grid-cols-[1fr_22rem]">
        <div className="rounded-3xl border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
          <SectionHeading eyebrow="Resumo" title="O que você recebe" />
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {props.includes.map((i) => (
              <li
                key={i}
                className="flex gap-2.5 rounded-xl bg-background p-3 text-sm font-semibold text-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                {i}
              </li>
            ))}
          </ul>

          <h3 className="mt-9 text-lg font-bold text-navy">Como funciona</h3>
          <ol className="mt-4 space-y-3">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-3">
                <span className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-on-navy">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-bold text-navy">{s.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="rounded-3xl border-2 border-teal bg-card p-6 shadow-[var(--shadow-card)] lg:sticky lg:top-24">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-teal-soft px-3 py-1 text-xs font-bold text-teal">
            <Clock className="h-3.5 w-3.5" /> Oferta termina em{" "}
            <span className="font-mono tabular-nums">{time}</span>
          </p>

          {props.oldPrice && (
            <p className="mt-5 text-sm font-semibold text-muted-foreground line-through">
              De {props.oldPrice}
            </p>
          )}
          <p
            className={`${props.oldPrice ? "" : "mt-5"} font-display text-4xl font-bold text-navy`}
          >
            {props.price}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">pagamento único · acesso digital</p>

          <a
            id="aceitar-oferta"
            href={ACCEPT_URL}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-5 py-4 text-base font-extrabold text-on-navy transition hover:brightness-108 active:translate-y-px"
          >
            Quero aceitar a oferta <ArrowRight className="h-5 w-5" />
          </a>

          <a
            id="recusar-oferta"
            href={DECLINE_URL}
            className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border px-4 py-2.5 text-xs font-semibold text-muted-foreground transition hover:border-foreground/25 hover:text-foreground"
          >
            Não tenho interesse <X className="h-3.5 w-3.5" />
          </a>

          <ul className="mt-5 space-y-2 border-t pt-5 text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <CreditCard className="h-3.5 w-3.5 shrink-0 text-teal" /> Pagamento processado pela
              plataforma Cakto
            </li>
            <li className="flex items-center gap-2">
              <FileText className="h-3.5 w-3.5 shrink-0 text-teal" /> Material entregue em PDF
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-teal" /> Material de estudo · não
              garante aprovação
            </li>
          </ul>
        </aside>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-card/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="shrink-0">
            <p className="text-[10px] font-bold tracking-wide text-muted-foreground uppercase">
              Total
            </p>
            <p className="font-display text-lg leading-none font-bold text-navy">{props.price}</p>
          </div>
          <a
            href={ACCEPT_URL}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-teal px-4 py-3 text-sm font-extrabold text-on-navy"
          >
            Aceitar oferta <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
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
