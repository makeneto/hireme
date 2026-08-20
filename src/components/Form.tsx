import { ComposerProps } from "@/interfaces/form-types"
import AttachmentsToggle from "./form/AttachmentsToggle"
import ActionButtons from "./form/ActionButtons"
import CompanyForm from "./form/CompanyForm"

export default function Form({ composer }: ComposerProps) {
  return (
    <form
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
          !!(composer.companyName || composer.jobTitle || composer.companyEmail)
        }
      />
    </form>
  )
}
