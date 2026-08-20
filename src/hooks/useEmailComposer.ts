"use client"

import { useDispatch, useSelector } from "react-redux"
import { getCopy } from "@/data/copy"
import { joinList } from "@/lib/utils"
import { buildBodyParagraphs, buildClosingBlock, openGmailCompose } from "@/lib/email-content"
import type { AttachmentKey } from "@/types"
import type { RootState, AppDispatch } from "@/store"
import { resetForm, setPreviewOpen, setSent, toggleAttachment } from "@/store/emailComposerSlice"
import { schema } from "@/components/CompanyForm"

export function useEmailComposer() {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((s: RootState) => s.emailComposer)
  const t = getCopy(state.applicationArea, state.language)
  const attachmentKeys = (Object.keys(state.attachments) as AttachmentKey[]).filter((key) => state.attachments[key])
  const attachmentList = joinList(attachmentKeys.map((key) => t.attachments[key]), t.conj)
  const subjectText = state.jobTitle.trim() ? t.subject(state.jobTitle) : null
  const canSubmit = schema.safeParse({ companyName: state.companyName, jobTitle: state.jobTitle, companyEmail: state.companyEmail }).success
  const bodyParagraphs = buildBodyParagraphs(t, { jobTitle: state.jobTitle, companyName: state.companyName, attachmentList, hour: new Date().getHours() })
  const closingBlock = buildClosingBlock(t)
  const handleSubmit = () => { if (!canSubmit) return; openGmailCompose(state.companyEmail, t.subject(state.jobTitle), [...bodyParagraphs, "", ...closingBlock].join("\n\n").replace(/\n\n\n/g, "\n\n")); dispatch(setSent(true)) }
  return { ...state, t, subjectText, bodyParagraphs, closingBlock, canSubmit, toggleAttachment: (key: AttachmentKey) => dispatch(toggleAttachment(key)), handleSubmit, resetForm: () => dispatch(resetForm()), showPreview: () => dispatch(setPreviewOpen(true)), closePreview: () => dispatch(setPreviewOpen(false)) }
}
