import Link from "next/link"
import { parseClosingLine } from "@/lib/parseClosingLine"

interface ClosingBlockLineProps {
  line: string
}

export default function ClosingBlockLine({ line }: ClosingBlockLineProps) {
  if (!line) return <div className="h-6" />

  const parsed = parseClosingLine(line)

  if (parsed.type === "text") {
    return <p>{parsed.content}</p>
  }

  return (
    <p>
      {parsed.label}:{" "}
      <Link
        href={parsed.href}
        className="text-lime-700 dark:text-lime-500 hover:underline"
      >
        {parsed.value}
      </Link>
    </p>
  )
}
