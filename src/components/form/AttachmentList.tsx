import { Field, FieldGroup, FieldLabel } from "../ui/field"
import { Checkbox } from "../ui/checkbox"
import { AttachmentsToggleProps } from "./AttachmentsToggle"
import { ATTACHMENTS } from "@/data/options"

export default function AttachmentList({
  attachments,
  onToggle,
}: AttachmentsToggleProps) {
  return (
    <FieldGroup className="mt-1.5 mb-10">
      <div className="grid gap-5">
        {ATTACHMENTS.map((item) => (
          <Field
            key={item.key}
            orientation="horizontal"
            className="flex gap-2 w-fit"
          >
            <Checkbox
              id={`attachment-${item.key}`}
              checked={!!attachments[item.key]}
              onCheckedChange={() => onToggle(item.key)}
              disabled={item.label === "Curriculum"}
            />

            <FieldLabel
              htmlFor={`attachment-${item.key}`}
              className="font-normal cursor-pointer"
            >
              {item.label}
            </FieldLabel>
          </Field>
        ))}
      </div>
    </FieldGroup>
  )
}
