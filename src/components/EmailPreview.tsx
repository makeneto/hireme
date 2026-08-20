import EmailBody from "./email-preview/EmailBody"
import PreviewHeader from "./email-preview/PreviewHeader"
import PreviewRecipient from "./email-preview/PreviewRecipient"
import PreviewSubject from "./email-preview/PreviewSubject"
import Footer from "./Footer"
import { ComposerProps } from "@/interfaces/form-types"

export default function EmailPreview({ composer }: ComposerProps) {
  const {
    t,
    language,
    companyEmail,
    companyName,
    jobTitle,
    subjectText,
    bodyParagraphs,
    closingBlock,
    previewOpen,
  } = composer

  const emailPreviewClassName =
    "fixed inset-0 z-50 overflow-auto rounded-none border-0 bg-background pt-16 md:static md:rounded-2xl md:border md:bg-neutral-100 md:dark:bg-zinc-900 md:pt-0"

  return (
    <article className={previewOpen ? "block md:block" : "hidden md:block"}>
      <div className={emailPreviewClassName}>
        <PreviewHeader language={language} />

        <div className="p-6 md:p-8">
          <PreviewRecipient
            label={t.to}
            email={companyEmail}
            placeholder={t.emailPlaceholder}
          />

          <PreviewSubject
            label={t.subjectLabel}
            subjectText={subjectText}
            placeholder={t.subjectPlaceholder}
          />

          <EmailBody
            bodyParagraphs={bodyParagraphs}
            highlightWords={[jobTitle, companyName]}
            closingBlock={closingBlock}
          />
        </div>
      </div>

      <Footer variant="desktop" />
    </article>
  )
}
