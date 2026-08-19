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
        <div className="sticky top-10 h-fit">
          <CompanyForm
            companyName={composer.companyName}
            setCompanyName={composer.setCompanyName}
            jobTitle={composer.jobTitle}
            setJobTitle={composer.setJobTitle}
            companyEmail={composer.companyEmail}
            setCompanyEmail={composer.setCompanyEmail}
            language={composer.language}
            setLanguage={composer.setLanguage}
            applicationArea={composer.applicationArea}
            setApplicationArea={composer.setApplicationArea}
          />

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
          />
        </div>

        <EmailPreview
          t={composer.t}
          language={composer.language}
          companyEmail={composer.companyEmail}
          subjectText={composer.subjectText}
          bodyParagraphs={composer.bodyParagraphs}
          closingBlock={composer.closingBlock}
        />
      </div>
    </div>
  )
}
