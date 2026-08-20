import { LANGUAGES } from "@/data/options"
import { LanguageCode } from "@/interfaces/select-types"

interface PreviewHeaderProps {
  language: LanguageCode
}

export default function PreviewHeader({ language }: PreviewHeaderProps) {
  const languageLabel = LANGUAGES.find((l) => l.code === language)?.label

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 uppercase tracking-wide">
        Pré-visualização
      </h2>
      <span className="text-xs text-neutral-500 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-800 rounded-full px-2 py-1">
        {languageLabel}
      </span>
    </div>
  )
}
