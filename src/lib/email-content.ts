import type { CopyEntry } from "@/data/copy"

export const SIGNATURE = {
  name: "Makene Neto",
  location: "Luanda, Angola",
  phoneNumber: "(+244) 945336003",
  portfolioUrl: "https://makenedev.vercel.app",
  linkedinUrl: "https://linkedin.com/in/makene-neto",
} as const

interface BodyValues {
  jobTitle: string
  companyName: string
  attachmentList: string
  hour: number
}

export function buildBodyParagraphs(
  t: CopyEntry,
  values: BodyValues,
): string[] {
  const jobTitle = values.jobTitle.trim() || t.subjectPlaceholder
  const companyName = values.companyName.trim() || t.companyPlaceholder

  return [
    `${t.greeting(values.hour)},`,
    t.intro(jobTitle, companyName),
    t.skills,
    t.profile,
    t.attachIntro(values.attachmentList),
  ]
}

export function buildClosingBlock(t: CopyEntry): string[] {
  return [
    t.closing,
    SIGNATURE.name,
    SIGNATURE.location,
    "",
    `${t.phone} ${SIGNATURE.phoneNumber}`,
    `${t.portfolio} ${SIGNATURE.portfolioUrl}`,
    `LinkedIn: ${SIGNATURE.linkedinUrl}`,
  ]
}

export function buildGmailComposeUrl(
  to: string,
  subject: string,
  body: string,
): string {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
    su: subject,
    body,
  })
  return `https://mail.google.com/mail/?${params.toString()}`
}

/** Deep link to the native Gmail app (iOS and Android). */
export function buildGmailAppUrl(
  to: string,
  subject: string,
  body: string,
): string {
  const encodedTo = encodeURIComponent(to)
  const encodedSubject = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(body)
  return `googlegmail://co?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`
}

/**
 * Open Gmail: try the native app on mobile, with automatic fallback
 * for Gmail web if the app is not installed. On the desktop it goes
 * direct to the web.
 */
export function openGmailCompose(
  to: string,
  subject: string,
  body: string,
): void {
  const webUrl = buildGmailComposeUrl(to, subject, body)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  if (!isMobile) {
    window.open(webUrl, "_blank", "noopener,noreferrer")
    return
  }

  let didHide = false
  const onVisibilityChange = () => {
    if (document.hidden) didHide = true
  }
  document.addEventListener("visibilitychange", onVisibilityChange)

  const fallbackTimer = setTimeout(() => {
    document.removeEventListener("visibilitychange", onVisibilityChange)

    // If the page was never hidden, the app didn't open — it drops to the web.
    if (!didHide) {
      window.open(webUrl, "_blank", "noopener,noreferrer")
    }
  }, 1200)

  window.addEventListener("pagehide", () => clearTimeout(fallbackTimer), {
    once: true,
  })

  window.location.href = buildGmailAppUrl(to, subject, body)
}
