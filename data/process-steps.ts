import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: "destination",
    step: 1,
    icon: "Compass",
    title: "Choisissez votre destination",
    description:
      "Indiquez le pays et le type de visa qui correspondent à votre projet de voyage.",
  },
  {
    id: "consultation",
    step: 2,
    icon: "CalendarClock",
    title: "Réservez une consultation",
    description:
      "Échangez avec notre équipe pour évaluer votre situation et vos options.",
  },
  {
    id: "dossier",
    step: 3,
    icon: "FileSearch",
    title: "Préparez votre dossier avec nos conseils",
    description:
      "Nous vous aidons à réunir et vérifier les documents nécessaires.",
  },
  {
    id: "depot",
    step: 4,
    icon: "Send",
    title: "Présentez votre demande auprès des autorités compétentes",
    description:
      "Vous déposez votre dossier complet, l'esprit tranquille et bien préparé.",
  },
];
