import { createFileRoute } from "@tanstack/react-router";
import { Mail, Inbox, LifeBuoy, HeartHandshake, CheckCircle2, CalendarDays, Repeat2, NotebookPen } from "lucide-react";
import { Shell, offerHead } from "@/components/funnel/OfferPage";

const steps = [
  { icon: Mail, title: "Confira seu e-mail", text: "As informações de acesso são enviadas para o e-mail usado na compra." },
  { icon: Inbox, title: "Veja spam e promoções", text: "Se não encontrar, procure nas pastas de spam, lixo eletrônico ou promoções." },
  { icon: LifeBuoy, title: "Precisa de ajuda?", text: "Se o acesso não chegar, entre em contato pelo suporte informado no e-mail de compra da Cakto, informando o e-mail usado." },
];

const tips = [
  { icon: CalendarDays, title: "Monte um cronograma", text: "Defina dias e horários fixos de estudo na semana." },
  { icon: Repeat2, title: "Refaça os erros", text: "Volte às questões que você errou antes de avançar." },
  { icon: NotebookPen, title: "Anote o resumo", text: "Escreva o que aprendeu com suas próprias palavras." },
];

export const Route = createFileRoute("/obrigado")({
  head: offerHead("Obrigado · Enfermagem em Estudo", "Orientações para acessar seus materiais de estudo."),
  component: () => (
    <Shell>
      <section className="hero-navy relative overflow-hidden rounded-3xl px-5 py-10 text-center sm:px-10 sm:py-14">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-on-navy/10 ring-1 ring-on-navy/20">
            <HeartHandshake className="h-7 w-7 text-teal-bright" />
          </div>
          <p className="mt-5 text-[11px] font-extrabold tracking-[0.22em] text-teal-bright uppercase">
            Compra concluída
          </p>
          <h1 className="mt-3 text-3xl leading-tight font-bold text-on-navy sm:text-4xl">
            Obrigado!
          </h1>
          <p className="mt-3 text-base leading-relaxed text-on-navy-muted sm:text-lg">
            Veja abaixo como acessar seus materiais de estudo.
          </p>
        </div>
      </section>

      <div className="mx-auto mt-10 grid max-w-3xl gap-4">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="flex gap-4 rounded-2xl border bg-card p-5 shadow-[var(--shadow-card)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-soft">
              <s.icon className="h-5 w-5 text-teal" />
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-base font-bold text-navy">
                <CheckCircle2 className="h-4 w-4 text-teal" />
                {i + 1}. {s.title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="mx-auto mt-12 max-w-3xl">
        <p className="text-xs font-bold tracking-[0.2em] text-teal uppercase">Depois de receber</p>
        <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
          Como aproveitar melhor o material
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {tips.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-teal/25 bg-teal-soft/45 p-5 shadow-[var(--shadow-card)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-card">
                <t.icon className="h-5 w-5 text-teal" />
              </div>
              <h3 className="mt-4 text-base font-bold text-navy">{t.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  ),
});
