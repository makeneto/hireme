import { CopyEntry } from "@/data/copy"
import Placeholder from "./Placeholder"
import { LanguageCode } from "@/interfaces/types"
import { LANGUAGES } from "@/data/options"
import type { ReactNode } from "react"
import Link from "next/link"
import { parseClosingLine } from "@/lib/parseClosingLine"
import Footer from "./Footer"

function highlightValues(text: string, values: string[]): ReactNode {
  const activeValues = values.map((value) => value.trim()).filter(Boolean)
  if (!activeValues.length) return text
  const pattern = new RegExp(
    `(${activeValues.map((value) => value.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")).join("|")})`,
    "g",
  )
  return text.split(pattern).map((part, index) =>
    activeValues.includes(part) ? (
      <strong key={index} className="font-semibold">
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
    <article>
      <div className="fixed inset-0 z-50 overflow-auto rounded-none border-0 bg-background pt-16 md:static md:rounded-2xl md:border md:bg-neutral-100 md:dark:bg-zinc-900 md:pt-0">
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
            <span className={companyEmail.trim() ? "font-medium" : undefined}>
              <Placeholder value={companyEmail} fallback={t.emailPlaceholder} />
            </span>
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-500 mb-1">
            {t.subjectLabel}
          </div>

          <div className="text-sm text-neutral-900 dark:text-neutral-100 font-medium mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
            {subjectText ? (
              <span className="font-semibold">{subjectText}</span>
            ) : (
              <span className="text-neutral-400 dark:text-neutral-600">
                {t.subjectPlaceholder}
              </span>
            )}
          </div>

          <div className="font-display text-neutral-800 dark:text-neutral-100 text-sm leading-relaxed space-y-4">
            {bodyParagraphs.map((p, i) => (
              <p key={i}>{highlightValues(p, [jobTitle, companyName])}</p>
            ))}

            <div className="pt-2 grid text-neutral-600 dark:text-neutral-300">
              {closingBlock.map((line, i) => {
                if (!line) return <div key={i} className="h-6" />

                const parsed = parseClosingLine(line)

                if (parsed.type === "text") {
                  return <p key={i}>{parsed.content}</p>
                }

                return (
                  <p key={i}>
                    {parsed.label}:{" "}
                    <Link
                      href={parsed.href}
                      className="text-lime-700 dark:text-lime-500 hover:underline"
                    >
                      {parsed.value}
                    </Link>
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer variant="desktop" />
    </article>
  )
}
