"use client"

import { useEmailComposer } from "@/hooks/useEmailComposer"
import Header from "@/components/Header"
import Form from "@/components/Form"
import EmailPreview from "@/components/EmailPreview"

export default function Home() {
  const composer = useEmailComposer()

  return (
    <main className="min-h-screen text-neutral-900 dark:text-neutral-100">
      <Header />

      <div className="relative mx-auto grid grid-cols-1 md:grid-cols-[40%_auto] gap-15">
        <Form composer={composer} />
        <EmailPreview composer={composer} />
      </div>
    </main>
  )
}
