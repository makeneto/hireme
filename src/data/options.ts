import { AttachmentKey } from "@/interfaces/checkbox-types"
import type {
  ApplicationAreaCode,
  Option,
  LanguageCode,
} from "@/interfaces/select-types"

export const LANGUAGES: Option<LanguageCode>[] = [
  { code: "pt", label: "Português" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
]

export const APPLICATION_AREAS: Option<ApplicationAreaCode>[] = [
  { code: "engineering", label: "Eng. de Software" },
  { code: "ti", label: "Prof. de TI" },
]

export const ATTACHMENTS: { key: AttachmentKey; label: string }[] = [
  { key: "cv", label: "Curriculum" },
  { key: "coverLetter", label: "Carta de Apresentação" },
  { key: "bi", label: "BI" },
]
