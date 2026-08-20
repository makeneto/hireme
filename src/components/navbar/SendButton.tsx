import { Send } from "lucide-react"
import { Button } from "../ui/button"
import { ComposerProps } from "@/interfaces/form-types"

export default function SendButton({ composer }: ComposerProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={composer.handleSubmit}
      disabled={!composer.canSubmit}
      className="hidden md:inline-flex"
    >
      <Send className="w-4 h-4" /> Enviar no Gmail
    </Button>
  )
}
