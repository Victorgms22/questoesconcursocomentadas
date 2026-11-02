import { createFileRoute } from "@tanstack/react-router";
import { Timer, FileCheck2, MessageSquareText, BarChart3 } from "lucide-react";
import { OfferPage, offerHead } from "@/components/funnel/OfferPage";
import capa from "@/assets/capa-simulados.png";

export const Route = createFileRoute("/oferta-simulados")({
  head: offerHead("2 Simulados Cronometrados de Enfermagem", "Dois simulados de 50 questões com cartão-resposta, gabarito comentado e quadro de desempenho."),
  component: () => (
    <OfferPage
      step="Oferta complementar"
      badge="2 simulados · 50 questões cada"
      title="2 Simulados Cronometrados de Enfermagem"
      subtitle="Pratique em condições parecidas com a prova, controlando o tempo e acompanhando sua evolução."
      price="R$ 19,90"
      sectionTitle="O que tem nos simulados"
      features={[
        { icon: Timer, title: "2 simulados de 50 questões", text: "Com tempo sugerido para treinar o ritmo de prova." },
        { icon: FileCheck2, title: "Cartão-resposta", text: "Modelo para marcar suas respostas como no dia da prova." },
        { icon: MessageSquareText, title: "Gabarito comentado", text: "Explicação de cada questão para revisar os erros." },
        { icon: BarChart3, title: "Quadro de desempenho", text: "Registre acertos por área e veja onde reforçar." },
      ]}
      includes={["2 simulados com 50 questões cada", "Cartão-resposta para impressão", "Gabarito comentado", "Quadro de desempenho"]}
      image={capa}
      imageAlt="Capa do material 2 Simulados Cronometrados de Enfermagem"
    />
  ),
});
