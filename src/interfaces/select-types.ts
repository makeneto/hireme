export type LanguageCode = "pt" | "en" | "fr"
export type ApplicationAreaCode = "engineering" | "ti"

export interface Option<T extends string> {
  code: T
  label: string
}
