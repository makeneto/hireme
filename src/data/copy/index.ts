import type {
  ApplicationAreaCode,
  LanguageCode,
} from "@/interfaces/select-types"
import { SHARED_COPY } from "./shared"
import { PROFILE_COPY, ProfileCopy } from "./profile"
import { SharedCopy } from "@/interfaces/shared-types"

export type CopyEntry = SharedCopy & ProfileCopy

export function getCopy(
  area: ApplicationAreaCode,
  language: LanguageCode,
): CopyEntry {
  return { ...SHARED_COPY[language], ...PROFILE_COPY[area][language] }
}
