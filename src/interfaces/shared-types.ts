import { AttachmentKey } from "./checkbox-types"

export interface SharedCopy {
  subject: (job: string) => string
  subjectPlaceholder: string
  companyPlaceholder: string
  emailPlaceholder: string
  greeting: (hour: number) => string
  intro: (job: string, company: string) => string
  attachIntro: (list: string) => string
  closing: string
  phone: string
  portfolio: string
  conj: string
  to: string
  subjectLabel: string
  attachments: Record<AttachmentKey, string>
}
