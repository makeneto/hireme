import { ReactNode } from "react"

export function getHighlightValues(text: string, values: string[]): ReactNode {
  const activeValues = values.map((value) => value.trim()).filter(Boolean)
  if (!activeValues.length) return text
  const pattern = new RegExp(
    `(${activeValues.map((value) => value.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")).join("|")})`,
    "g",
  )
  return text.split(pattern).map((part, index) =>
    activeValues.includes(part) ? (
      <strong key={index} className="font-semibold">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}
