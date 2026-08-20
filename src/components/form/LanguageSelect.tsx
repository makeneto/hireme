import { ContactRound } from "lucide-react"
import { useDispatch } from "react-redux"
import { LANGUAGES } from "@/data/options"
import type { LanguageCode } from "@/interfaces/select-types"
import type { AppDispatch } from "@/store"
import { setLanguage } from "@/store/emailComposerSlice"
import FormSelectField from "./FormSelectField"

interface LanguageSelectProps {
  language: LanguageCode
}

export default function LanguageSelect({ language }: LanguageSelectProps) {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <FormSelectField
      icon={<ContactRound className="w-3 h-3" />}
      label="Idioma da Empresa"
      placeholder="Selecione um idioma"
      value={language}
      options={LANGUAGES}
      onChange={(value) => dispatch(setLanguage(value))}
    />
  )
}
