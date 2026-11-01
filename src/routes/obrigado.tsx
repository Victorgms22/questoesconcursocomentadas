import { createFileRoute } from "@tanstack/react-router";
import { Mail, Inbox, LifeBuoy, HeartHandshake } from "lucide-react";
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
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-soft">
          <HeartHandshake className="h-8 w-8 text-teal" />
        </div>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Obrigado!</h1>
        <p className="mt-3 text-lg text-muted-foreground">Veja abaixo como acessar seus materiais.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-3xl gap-4">
        {steps.map((s) => (
          <div key={s.title} className="flex gap-4 rounded-xl border bg-card p-5 shadow-[var(--shadow-card)]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-soft">
              <s.icon className="h-5 w-5 text-teal" />
            </div>
            <div>
              <h2 className="text-base font-bold">{s.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  ),
});
