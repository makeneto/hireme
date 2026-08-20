import { LanguageCode } from "@/interfaces/select-types"
import { SharedCopy } from "@/interfaces/shared-types"

export const SHARED_COPY: Record<LanguageCode, SharedCopy> = {
  pt: {
    subject: (job) => `Candidatura à vaga de ${job}`,
    subjectPlaceholder: "[Título da Vaga]",
    companyPlaceholder: "[Nome da Empresa]",
    emailPlaceholder: "empresa@email.com",
    greeting: (h) => (h < 12 ? "Bom dia" : h < 19 ? "Boa tarde" : "Boa noite"),
    intro: (job, company) =>
      `Venho por este meio apresentar a minha candidatura à vaga de ${job} na empresa ${company}.`,
    attachIntro: (list) =>
      list
        ? `Segue em anexo ${list}. Estou disponível para uma conversa a qualquer momento.`
        : "Estou disponível para uma conversa a qualquer momento.",
    closing: "Cumprimentos,",
    phone: "Telefone:",
    portfolio: "Portfólio:",
    conj: "e",
    to: "Para",
    subjectLabel: "Assunto",
    attachments: {
      cv: "o meu Curriculum Vitae",
      coverLetter: "a Carta de Apresentação",
      bi: "o Bilhete de Identidade",
    },
  },
  en: {
    subject: (job) => `Application for the ${job} position`,
    subjectPlaceholder: "[Job Title]",
    companyPlaceholder: "[Company Name]",
    emailPlaceholder: "company@email.com",
    greeting: (h) =>
      h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening",
    intro: (job, company) =>
      `I am writing to apply for the ${job} position at ${company}.`,
    attachIntro: (list) =>
      list
        ? `Please find attached ${list}. I am available for a conversation at any time.`
        : "I am available for a conversation at any time.",
    closing: "Best regards,",
    phone: "Phone:",
    portfolio: "Portfolio:",
    conj: "and",
    to: "To",
    subjectLabel: "Subject",
    attachments: {
      cv: "my Curriculum Vitae",
      coverLetter: "my Cover Letter",
      bi: "my ID document",
    },
  },
  fr: {
    subject: (job) => `Candidature au poste de ${job}`,
    subjectPlaceholder: "[Titre du poste]",
    companyPlaceholder: "[Nom de l'entreprise]",
    emailPlaceholder: "entreprise@email.com",
    greeting: (h) => (h < 18 ? "Bonjour" : "Bonsoir"),
    intro: (job, company) =>
      `Je me permets de vous adresser ma candidature au poste de ${job} au sein de ${company}.`,
    attachIntro: (list) =>
      list
        ? `Vous trouverez ci-joint ${list}. Je reste disponible pour un entretien à tout moment.`
        : "Je reste disponible pour un entretien à tout moment.",
    closing: "Cordialement,",
    phone: "Téléphone:",
    portfolio: "Portfolio:",
    conj: "et",
    to: "À",
    subjectLabel: "Objet",
    attachments: {
      cv: "mon Curriculum Vitae",
      coverLetter: "ma Lettre de Motivation",
      bi: "ma pièce d'identité",
    },
  },
}
