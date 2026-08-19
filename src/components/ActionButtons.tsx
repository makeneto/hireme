import { Send, RotateCcw } from "lucide-react"
import { Button } from "./ui/button"

interface ActionButtonsProps {
  canSubmit: boolean
  onSubmit: () => void
  onReset: () => void
  sent: boolean
}

export default function ActionButtons({
  canSubmit,
  onSubmit,
  onReset,
  sent,
}: ActionButtonsProps) {
  return (
    <>
      <div className="flex gap-3">
        <Button onClick={onSubmit} disabled={!canSubmit}>
          <Send className="w-4 h-4" /> Enviar no Gmail
        </Button>

        <Button onClick={onReset} variant="outline">
          <RotateCcw className="w-4 h-4" /> Cancelar
        </Button>
      </div>

      {!canSubmit && (
        <p className="text-xs text-neutral-400 dark:text-neutral-600 mt-5.5">
          Preencha nome da empresa, título da vaga e e-mail para poderes enviar.
        </p>
      )}
      {sent && (
        <p className="text-xs text-lime-600 dark:text-lime-500 mt-5.5">
          Gmail aberto numa nova aba, já com destinatário, assunto e corpo
          preenchidos. Anexa o CV, Carta e/ou BI manualmente antes de enviar. O
          navegador não permite anexar ficheiros automaticamente por um link.
        </p>
      )}
    </>
  )
}
