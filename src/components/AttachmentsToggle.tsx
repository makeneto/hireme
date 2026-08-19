import { AttachmentKey, AttachmentsState } from "@/types"
import { Paperclip } from "lucide-react"
import { Field, FieldGroup, FieldLabel } from "./ui/field"
import { Checkbox } from "./ui/checkbox"

const ITEMS: { key: AttachmentKey; label: string }[] = [
  { key: "cv", label: "Curriculum" },
  { key: "coverLetter", label: "Carta de Apresentação" },
  { key: "bi", label: "BI" },
]

interface AttachmentsToggleProps {
  attachments: AttachmentsState
  onToggle: (key: AttachmentKey) => void
}

export default function AttachmentsToggle({
  attachments,
  onToggle,
}: AttachmentsToggleProps) {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <Paperclip className="w-4 h-4 text-lime-600 dark:text-lime-500" />
        <h2 className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 uppercase tracking-wide">
          Anexos a Mencionar
        </h2>
      </div>

      <FieldGroup className="mt-1.5 mb-10">
        <div className="grid gap-5">
          {ITEMS.map((item) => (
            <Field key={item.key} orientation="horizontal">
              <Checkbox
                id={`attachment-${item.key}`}
                checked={!!attachments[item.key]}
                onCheckedChange={() => onToggle(item.key)}
              />

              <FieldLabel
                htmlFor={`attachment-${item.key}`}
                className="font-normal"
              >
                {item.label}
              </FieldLabel>
            </Field>
          ))}
        </div>
      </FieldGroup>
    </>
  )
}
