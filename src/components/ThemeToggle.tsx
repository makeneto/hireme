"use client"

import { useTheme } from "next-themes"
import { Button } from "./ui/button"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="hidden md:block"
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vEewL3IqHt4EVkee4yAJWim9QCivJS.png"
        alt="Alternar tema"
        className="nav-icon size-5 object-contain"
      />
    </Button>
  )
}
