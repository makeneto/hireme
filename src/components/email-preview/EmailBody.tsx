import { getHighlightValues } from "@/utils/getHighlightValues"
import ClosingBlockLine from "./ClosingBlockLine"

interface EmailBodyProps {
  bodyParagraphs: string[]
  highlightWords: string[]
  closingBlock: string[]
}

export default function EmailBody({
  bodyParagraphs,
  highlightWords,
  closingBlock,
}: EmailBodyProps) {
  return (
    <div className="font-display text-neutral-800 dark:text-neutral-100 text-sm leading-relaxed space-y-4">
      {bodyParagraphs.map((p, i) => (
        <p key={i}>{getHighlightValues(p, highlightWords)}</p>
      ))}

      <div className="pt-2 grid text-neutral-600 dark:text-neutral-300">
        {closingBlock.map((line, i) => (
          <ClosingBlockLine key={i} line={line} />
        ))}
      </div>
    </div>
  )
}
