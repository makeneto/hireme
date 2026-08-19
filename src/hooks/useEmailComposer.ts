"use client"

import { useState } from "react"
import { getCopy } from "@/data/copy"
import { joinList } from "@/lib/utils"
import {
  buildBodyParagraphs,
  buildClosingBlock,
  buildGmailComposeUrl,
} from "@/lib/email-content"
import type {
  ApplicationAreaCode,
  AttachmentKey,
  AttachmentsState,
  LanguageCode,
} from "@/types"

const DEFAULT_ATTACHMENTS: AttachmentsState = {
  cv: true,
  coverLetter: true,
  bi: false,
}

export function useEmailComposer() {
  const [companyName, setCompanyName] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [companyEmail, setCompanyEmail] = useState("")
  const [language, setLanguage] = useState<LanguageCode>("pt")
  const [applicationArea, setApplicationArea] =
    useState<ApplicationAreaCode>("engineering")
  const [attachments, setAttachments] =
    useState<AttachmentsState>(DEFAULT_ATTACHMENTS)
  const [sent, setSent] = useState(false)

  const t = getCopy(applicationArea, language)

  const attachmentKeys = (Object.keys(attachments) as AttachmentKey[]).filter(
    (key) => attachments[key],
  )
  const attachmentList = joinList(
    attachmentKeys.map((key) => t.attachments[key]),
    t.conj,
  )

  const subjectText = jobTitle.trim() ? t.subject(jobTitle) : null
  const canSubmit = Boolean(
    companyName.trim() && jobTitle.trim() && companyEmail.trim(),
  )

  const bodyParagraphs = buildBodyParagraphs(t, {
    jobTitle,
    companyName,
    attachmentList,
    hour: new Date().getHours(),
  })
  const closingBlock = buildClosingBlock(t)

  const toggleAttachment = (key: AttachmentKey) =>
    setAttachments((prev) => ({ ...prev, [key]: !prev[key] }))

  const resetForm = () => {
    setCompanyName("")
    setJobTitle("")
    setCompanyEmail("")
    setAttachments(DEFAULT_ATTACHMENTS)
    setLanguage("pt")
    setApplicationArea("engineering")
    setSent(false)
  }

  const handleSubmit = () => {
    if (!canSubmit) return
    const subject = t.subject(jobTitle)
    const body = [...bodyParagraphs, "", ...closingBlock]
      .join("\n\n")
      .replace(/\n\n\n/g, "\n\n")
    window.open(buildGmailComposeUrl(companyEmail, subject, body), "_blank")
    setSent(true)
  }

  return {
    t,
    language,
    setLanguage,
    applicationArea,
    setApplicationArea,
    companyName,
    setCompanyName,
    jobTitle,
    setJobTitle,
    companyEmail,
    setCompanyEmail,
    attachments,
    toggleAttachment,
    subjectText,
    bodyParagraphs,
    closingBlock,
    canSubmit,
    sent,
    handleSubmit,
    resetForm,
  }
}
