import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/oferta-questoes" });
  },
  head: () => ({
    meta: [
      { title: "Ofertas Enfermagem em Estudo" },
      { name: "description", content: "Ofertas complementares de materiais de estudo para Enfermagem." },
      { property: "og:title", content: "Ofertas Enfermagem em Estudo" },
      { property: "og:description", content: "Ofertas complementares de materiais de estudo para Enfermagem." },
    ],
  }),
});
