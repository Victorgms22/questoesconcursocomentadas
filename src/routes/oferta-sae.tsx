import { createFileRoute } from "@tanstack/react-router";
import { DoorOpen, TrendingUp, NotebookPen, Repeat, LogOut, ListChecks } from "lucide-react";
import { OfferPage, offerHead } from "@/components/funnel/OfferPage";

export const Route = createFileRoute("/oferta-sae")({
  head: offerHead("SAE e Anotações de Enfermagem: 40 Modelos", "Modelos de referência para admissão, evolução, anotação, passagem de plantão, alta e checklists."),
  component: () => (
    <OfferPage
      step="Oferta complementar"
      badge="40 modelos"
      title="SAE e Anotações de Enfermagem: 40 Modelos"
      subtitle="Estruturas de referência para estudar como organizar registros de Enfermagem de forma clara."
      price="R$ 12,90"
      sectionTitle="Modelos incluídos"
      features={[
        { icon: DoorOpen, title: "Admissão", text: "Estrutura para registro de admissão do paciente." },
        { icon: TrendingUp, title: "Evolução", text: "Modelos de evolução de Enfermagem." },
        { icon: NotebookPen, title: "Anotação", text: "Exemplos de anotações objetivas e completas." },
        { icon: Repeat, title: "Passagem de plantão", text: "Roteiro para comunicar informações essenciais." },
        { icon: LogOut, title: "Alta", text: "Estrutura para registro e orientações de alta." },
        { icon: ListChecks, title: "Checklists", text: "Listas de verificação para a rotina." },
      ]}
      includes={["40 modelos de referência", "Admissão, evolução, anotação, plantão e alta", "Checklists", "Acesso digital em PDF"]}
      acceptId="cakto-accept-sae"
      declineId="cakto-decline-sae"
    />
  ),
});
