export type AttachmentKey = "cv" | "coverLetter" | "bi"
export type AttachmentsState = Record<AttachmentKey, boolean>

export type LanguageCode = "pt" | "en" | "fr"
export type ApplicationAreaCode = "engineering" | "ti"

export interface Option<T extends string> {
  code: T
  label: string
}
