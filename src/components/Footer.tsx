import Link from "next/link"
import { Button } from "./ui/button"

export default function Footer({ variant }: { variant: "mobile" | "desktop" }) {
  const now = new Date()
  const currentYear = now.getFullYear()

  return (
    <p
      className={`
        text-center text-xs font-medium text-neutral-500 dark:text-neutral-500 
        ${variant === "mobile" ? "mt-12 sm:hidden" : "mt-5.5"}
        `}
      translate="no"
    >
      © Hireme By{" "}
      <Link href="https://makenedev.vercel.app">
        <Button variant="link" size="xs" className="text-black dark:text-white">
          Makene
        </Button>
      </Link>{" "}
      | {currentYear}
    </p>
  )
}
