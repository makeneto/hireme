import { CopyEntry } from "@/data/copy"
import Placeholder from "./Placeholder"
import { LanguageCode } from "@/interfaces/types"
import { LANGUAGES } from "@/data/options"
import type { ReactNode } from "react"

function highlightValues(text: string, values: string[]): ReactNode {
  const activeValues = values.map((value) => value.trim()).filter(Boolean)
  if (!activeValues.length) return text
  const pattern = new RegExp(
    `(${activeValues.map((value) => value.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")).join("|")})`,
    "g",
  )
  return text.split(pattern).map((part, index) =>
    activeValues.includes(part) ? (
      <strong key={index} className="font-bold">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

interface EmailPreviewProps {
  t: CopyEntry
  language: LanguageCode
  companyEmail: string
  companyName: string
  jobTitle: string
  subjectText: string | null
  bodyParagraphs: string[]
  closingBlock: string[]
}

export default function EmailPreview({
  t,
  language,
  companyEmail,
  companyName,
  jobTitle,
  subjectText,
  bodyParagraphs,
  closingBlock,
}: EmailPreviewProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-auto rounded-none border-0 bg-background pt-16 md:static md:rounded-2xl md:border md:bg-neutral-100 md:dark:bg-zinc-900 md:pt-0">
      <div className="overflow-hidden h-fit md:sticky md:top-6">
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
          <h2 className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 uppercase tracking-wide">
            Pré-visualização
          </h2>
          <span className="text-xs text-neutral-500 dark:text-neutral-500 border border-neutral-200 dark:border-neutral-800 rounded-full px-2 py-1">
            {LANGUAGES.find((l) => l.code === language)?.label}
          </span>
        </div>

        <div className="p-6 md:p-8">
          <div className="text-xs text-neutral-500 dark:text-neutral-500 mb-1">
            {t.to}
          </div>
          <div className="text-sm text-neutral-800 dark:text-neutral-200 mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <span className={companyEmail.trim() ? "font-bold" : undefined}>
              <Placeholder value={companyEmail} fallback={t.emailPlaceholder} />
            </span>
          </div>

          <div className="text-xs text-neutral-500 dark:text-neutral-500 mb-1">
            {t.subjectLabel}
          </div>

          <div className="text-sm text-neutral-900 dark:text-neutral-100 font-medium mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
            {subjectText ? (
              <span className="font-bold">{subjectText}</span>
            ) : (
              <span className="text-neutral-400 dark:text-neutral-600">
                {t.subjectPlaceholder}
              </span>
            )}
          </div>

          <div className="font-display text-neutral-800 dark:text-neutral-100 text-sm leading-relaxed space-y-4">
            {bodyParagraphs.map((p, i) => (
              <p key={i} className="first-of-type:font-semibold">
                {highlightValues(p, [jobTitle, companyName])}
              </p>
            ))}

            <div className="pt-2 text-neutral-600 dark:text-neutral-300">
              {closingBlock.map((line, i) =>
                line ? <p key={i}>{line}</p> : <div key={i} className="h-6" />,
              )}

              <span className="inline-block w-1 h-4 bg-lime-500 animate-pulse align-middle ml-0.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
