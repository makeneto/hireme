import { Globe } from "lucide-react"
import { useDispatch } from "react-redux"
import { APPLICATION_AREAS } from "@/data/options"
import type { ApplicationAreaCode } from "@/interfaces/select-types"
import type { AppDispatch } from "@/store"
import { setApplicationArea } from "@/store/emailComposerSlice"
import FormSelectField from "./FormSelectField"

interface ApplicationAreaSelectProps {
  applicationArea: ApplicationAreaCode
}

export default function ApplicationAreaSelect({
  applicationArea,
}: ApplicationAreaSelectProps) {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <FormSelectField
      icon={<Globe className="w-3 h-3" />}
      label="Área da Candidatura"
      placeholder="Selecione uma área"
      value={applicationArea}
      options={APPLICATION_AREAS}
      onChange={(value) => dispatch(setApplicationArea(value))}
    />
  )
}
