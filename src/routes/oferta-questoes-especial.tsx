import { createFileRoute } from "@tanstack/react-router";
import { Brain, HeartPulse, Baby, Syringe, ShieldPlus, Users, Scale, Activity, Pill, ClipboardList, MessageSquareText, ListChecks, Target } from "lucide-react";
import { OfferPage, offerHead } from "@/components/funnel/OfferPage";
import capa from "@/assets/capa-questoes.png";

const areas = [
  { icon: Scale, title: "Legislação do SUS", text: "Princípios, diretrizes e Lei 8.080/90." },
  { icon: Users, title: "Saúde Coletiva", text: "Atenção básica, vigilância e epidemiologia." },
  { icon: ShieldPlus, title: "Ética e Legislação", text: "Código de ética e exercício profissional." },
  { icon: Activity, title: "Fundamentos", text: "Técnicas básicas e sinais vitais." },
  { icon: HeartPulse, title: "Clínica Médica", text: "Cuidados ao adulto e ao idoso." },
  { icon: Syringe, title: "Urgência e Emergência", text: "Atendimento inicial e suporte de vida." },
  { icon: Baby, title: "Saúde da Mulher e Criança", text: "Pré-natal, puerpério e pediatria." },
  { icon: Brain, title: "Saúde Mental", text: "Rede de atenção psicossocial." },
  { icon: Pill, title: "Farmacologia", text: "Cálculo de medicação e administração." },
  { icon: ClipboardList, title: "Biossegurança", text: "Precauções e controle de infecção." },
];

export const Route = createFileRoute("/oferta-questoes-especial")({
  head: offerHead("200 Questões Comentadas · Condição Especial", "Condição especial: pratique com 200 questões comentadas de concursos de Enfermagem em 10 áreas."),
  component: () => (
    <OfferPage
      step="Condição especial"
      badge="Preço especial para você"
      title="200 Questões Comentadas de Concursos de Enfermagem"
      subtitle="Treine com questões organizadas por área, entenda o porquê de cada alternativa e confira o gabarito ao final."
      price="R$ 19,90" oldPrice="R$ 24,90"
      sectionTitle="As dez áreas de estudo"
      features={[
        ...areas,
        { icon: Target, title: "Prática por questões", text: "Ajuda a fixar o conteúdo e reconhecer o estilo das bancas." },
        { icon: MessageSquareText, title: "Comentários explicativos", text: "Cada questão traz a justificativa da resposta correta." },
        { icon: ListChecks, title: "Gabarito", text: "Gabarito completo para corrigir seu desempenho." },
      ]}
      includes={["200 questões em 10 áreas", "Comentário explicativo em cada questão", "Gabarito completo", "Acesso digital em PDF"]}
      image={capa}
      imageAlt="Capa do material 200 Questões Comentadas para concursos de Enfermagem"
    />
  ),
});
