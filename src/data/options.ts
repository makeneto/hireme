import type {
  ApplicationAreaCode,
  Option,
  LanguageCode,
} from "@/interfaces/types"

export const LANGUAGES: Option<LanguageCode>[] = [
  { code: "pt", label: "Português" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
]

export const APPLICATION_AREAS: Option<ApplicationAreaCode>[] = [
  { code: "engineering", label: "Eng. de Software" },
  { code: "ti", label: "Prof. de TI" },
]
