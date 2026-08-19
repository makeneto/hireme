import type { CopyEntry } from "@/data/copy"

export const SIGNATURE = {
  name: "Makene Neto",
  location: "Luanda, Angola",
  phoneNumber: "(+244) 945336003",
  portfolioUrl: "https://makenedev.vercel.app",
  linkedinUrl: "https://linkedin.com/in/makene-neto",
} as const

interface BodyValues {
  jobTitle: string
  companyName: string
  attachmentList: string
  hour: number
}

export function buildBodyParagraphs(
  t: CopyEntry,
  values: BodyValues,
): string[] {
  const jobTitle = values.jobTitle.trim() || t.subjectPlaceholder
  const companyName = values.companyName.trim() || t.companyPlaceholder

  return [
    `${t.greeting(values.hour)},`,
    t.intro(jobTitle, companyName),
    t.skills,
    t.profile,
    t.attachIntro(values.attachmentList),
  ]
}

export function buildClosingBlock(t: CopyEntry): string[] {
  return [
    t.closing,
    SIGNATURE.name,
    SIGNATURE.location,
    "",
    `${t.phone} ${SIGNATURE.phoneNumber}`,
    `${t.portfolio} ${SIGNATURE.portfolioUrl}`,
    `LinkedIn: ${SIGNATURE.linkedinUrl}`,
  ]
}

export function buildGmailComposeUrl(
  to: string,
  subject: string,
  body: string,
): string {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
    su: subject,
    body,
  })
  return `https://mail.google.com/mail/?${params.toString()}`
}
