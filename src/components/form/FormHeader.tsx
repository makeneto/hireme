import { Building2 } from "lucide-react"

export default function FormHeader() {
  return (
    <div className="flex items-center gap-2 mb-6">
      <Building2 className="w-4 h-4 text-lime-600 dark:text-lime-500" />
      <h2 className="text-sm font-semibold uppercase tracking-wide">
        Dados da Empresa
      </h2>
    </div>
  )
}
