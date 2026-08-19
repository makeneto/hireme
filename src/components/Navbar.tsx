"use client"

import ThemeToggle from "./ThemeToggle"
import { Send } from "lucide-react"
import { useEmailComposer } from "@/hooks/useEmailComposer"
import { Button } from "./ui/button"
import Logo from "./Logo"

export default function Navbar() {
  const composer = useEmailComposer()

  return (
    <nav className="bg-background/50 dark:bg-background/80 backdrop-blur-[21px] flex justify-between items-center translate-z-0 z-1000 w-full h-full py-4 px-8 md:pl-14 xl:px-60 md:pr-10 sticky top-0 border-b">
      <Logo />

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={composer.handleSubmit}
          disabled={!composer.canSubmit}
        >
          <Send className="w-4 h-4" /> Enviar no Gmail
        </Button>

        <div className="w-px h-6 hidden md:block bg-gray-200 dark:bg-gray-800" />

        <ThemeToggle />
      </div>
    </nav>
  )
}
