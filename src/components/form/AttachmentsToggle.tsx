import { Paperclip } from "lucide-react"

import { AttachmentKey, AttachmentsState } from "@/interfaces/checkbox-types"
import AttachmentList from "./AttachmentList"

export interface AttachmentsToggleProps {
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

      <AttachmentList attachments={attachments} onToggle={onToggle} />
    </>
  )
}
