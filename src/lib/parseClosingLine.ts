type ClosingLine =
  | {
      type: "text"
      content: string
    }
  | {
      type: "link"
      label: string
      value: string
      href: string
    }

export function parseClosingLine(line: string): ClosingLine {
  const [label, ...rest] = line.split(":")
  const value = rest.join(":").trim()

  if (!value) {
    return { type: "text", content: line.trim() }
  }

  const isPhone = label.trim().toLowerCase() === "telefone"
  const href = isPhone ? `tel:${value.replace(/[^\d+]/g, "")}` : value

  return { type: "link", label: label.trim(), value, href }
}
