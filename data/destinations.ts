import type { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "espagne",
    country: "Espagne",
    code: "ES",
    description:
      "Destination la plus demandée pour le tourisme, les visites familiales et les études.",
    categories: ["touristique", "familial", "etudiant"],
  },
  {
    id: "france",
    country: "France",
    code: "FR",
    description:
      "Accompagnement pour les démarches touristiques, familiales et étudiantes.",
    categories: ["touristique", "familial", "etudiant", "professionnel"],
  },
  {
    id: "italie",
    country: "Italie",
    code: "IT",
    description:
      "Orientation adaptée aux profils touristiques et professionnels.",
    categories: ["touristique", "professionnel"],
  },
  {
    id: "autres-destinations",
    country: "Autres destinations européennes",
    code: "EU",
    description:
      "Allemagne, Belgique, Pays-Bas et autres pays de l'espace Schengen.",
    categories: ["touristique", "familial", "etudiant", "professionnel"],
  },
];

export const visaCategoryLabels: Record<Destination["categories"][number], string> = {
  touristique: "Visa touristique",
  familial: "Visa familial",
  etudiant: "Visa étudiant",
  professionnel: "Visa professionnel",
};
