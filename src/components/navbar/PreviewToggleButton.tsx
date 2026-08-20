import { Eye } from "lucide-react"

import { Button } from "../ui/button"
import { ComposerProps } from "@/interfaces/form-types"

export default function PreviewToggleButton({ composer }: ComposerProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={
        composer.previewOpen ? composer.showPreview : composer.closePreview
      }
      disabled={!composer.previewOpen && !composer.canSubmit}
      className="md:hidden"
    >
      <Eye className="w-4 h-4" />{" "}
      {composer.previewOpen ? "Voltar ao Formulário" : "Mostrar Prévia"}
    </Button>
  )
}
