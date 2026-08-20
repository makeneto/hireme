"use client"

import ActionButtons from "@/components/ActionButtons"
import AttachmentsToggle from "@/components/AttachmentsToggle"
import CompanyForm from "@/components/CompanyForm"
import EmailPreview from "@/components/EmailPreview"
import Header from "@/components/Header"
import { useEmailComposer } from "@/hooks/useEmailComposer"

export default function Home() {
  const composer = useEmailComposer()
  return (
    <div className="min-h-screen text-neutral-900 dark:text-neutral-100">
      <Header />
      <div className="relative mx-auto grid grid-cols-1 md:grid-cols-[40%_auto] gap-15">
        <div
          className={`sticky top-10 h-fit ${composer.previewOpen ? "hidden md:block" : "block"}`}
        >
          <CompanyForm />
          <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-8" />
          <AttachmentsToggle
            attachments={composer.attachments}
            onToggle={composer.toggleAttachment}
          />
          <ActionButtons
            canSubmit={composer.canSubmit}
            onSubmit={composer.handleSubmit}
            onReset={composer.resetForm}
            sent={composer.sent}
            hasValues={
              !!(
                composer.companyName ||
                composer.jobTitle ||
                composer.companyEmail
              )
            }
          />
        </div>
        <div
          className={
            composer.previewOpen ? "block md:block" : "hidden md:block"
          }
        >
          <EmailPreview
            t={composer.t}
            language={composer.language}
            companyEmail={composer.companyEmail}
            companyName={composer.companyName}
            jobTitle={composer.jobTitle}
            subjectText={composer.subjectText}
            bodyParagraphs={composer.bodyParagraphs}
            closingBlock={composer.closingBlock}
          />
        </div>
      </div>
    </div>
  )
}
