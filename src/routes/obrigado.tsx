import { createFileRoute } from "@tanstack/react-router";
import { Mail, Inbox, LifeBuoy, HeartHandshake, CheckCircle2 } from "lucide-react";
import { Shell, offerHead } from "@/components/funnel/OfferPage";

const steps = [
  { icon: Mail, title: "Confira seu e-mail", text: "As informações de acesso são enviadas para o e-mail usado na compra." },
  { icon: Inbox, title: "Veja spam e promoções", text: "Se não encontrar, procure nas pastas de spam, lixo eletrônico ou promoções." },
  { icon: LifeBuoy, title: "Precisa de ajuda?", text: "Se o acesso não chegar, entre em contato pelo suporte informado no e-mail de compra da Cakto, informando o e-mail usado." },
];

export const Route = createFileRoute("/obrigado")({
  head: offerHead("Obrigado · Enfermagem em Estudo", "Orientações para acessar seus materiais de estudo."),
  component: () => (
    <Shell>
      <section className="hero-navy relative overflow-hidden rounded-3xl px-5 py-10 text-center sm:px-10 sm:py-14">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
            <HeartHandshake className="h-7 w-7 text-teal" />
          </div>
          <p className="mt-5 text-[11px] font-extrabold tracking-[0.22em] text-teal uppercase">
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
    </Shell>
  ),
});
