import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "prise-de-rendez-vous",
    icon: "CalendarCheck",
    title: "Prise de rendez-vous",
    description:
      "Soyez accompagné dans la préparation de votre demande de rendez-vous.",
  },
  {
    id: "verification-dossier",
    icon: "FileSearch",
    title: "Vérification du dossier",
    description:
      "Identifiez les documents manquants avant le dépôt de votre demande.",
  },
  {
    id: "conseils-personnalises",
    icon: "MessageCircleHeart",
    title: "Conseils personnalisés",
    description:
      "Recevez une orientation adaptée à votre situation et à votre destination.",
  },
  {
    id: "suivi-demande",
    icon: "ListChecks",
    title: "Suivi de votre demande",
    description:
      "Gardez une vision claire des prochaines étapes de votre parcours.",
  },
];
