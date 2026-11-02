import { createFileRoute } from "@tanstack/react-router";
import { Pill, Stethoscope, Syringe, AlertTriangle, HeartHandshake } from "lucide-react";
import { OfferPage, offerHead } from "@/components/funnel/OfferPage";
import capa from "@/assets/capa-farmacologia.png";

export const Route = createFileRoute("/oferta-farmacologia")({
  head: offerHead("Farmacologia Aplicada: 80 Fármacos Mais Cobrados", "Classes, usos, vias de administração, efeitos adversos e cuidados de Enfermagem."),
  component: () => (
    <OfferPage
      step="Oferta complementar"
      badge="80 fármacos"
      title="Farmacologia Aplicada: os 80 Fármacos Mais Cobrados"
      subtitle="Um guia objetivo para revisar os medicamentos que mais aparecem em provas de Enfermagem."
      price="R$ 17,90"
      sectionTitle="Como cada fármaco é apresentado"
      features={[
        { icon: Pill, title: "Classes farmacológicas", text: "Fármacos agrupados por classe para facilitar a memorização." },
        { icon: Stethoscope, title: "Usos comuns", text: "Principais indicações clínicas de cada medicamento." },
        { icon: Syringe, title: "Vias de administração", text: "Vias mais utilizadas e observações importantes." },
        { icon: AlertTriangle, title: "Efeitos adversos", text: "Reações que exigem atenção da equipe." },
        { icon: HeartHandshake, title: "Cuidados de Enfermagem", text: "Pontos práticos antes, durante e após a administração." },
      ]}
      includes={["80 fármacos organizados por classe", "Usos, vias e efeitos adversos", "Cuidados de Enfermagem", "Acesso digital em PDF"]}
      image={capa}
      imageAlt="Capa do material Farmacologia Aplicada: 80 Fármacos Mais Cobrados"
    />
  ),
});
