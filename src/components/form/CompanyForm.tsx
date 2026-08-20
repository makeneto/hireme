"use client"

import { Building2, Briefcase, Mail } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "@/store"
import { setField } from "@/store/emailComposerSlice"
import { schema, type CompanyFormValues } from "@/lib/schemas/companyForm"
import FormHeader from "./FormHeader"
import FormField from "./FormField"
import LanguageSelect from "./LanguageSelect"
import ApplicationAreaSelect from "./ApplicationAreaSelect"

export default function CompanyForm() {
  const dispatch = useDispatch<AppDispatch>()
  const { companyName, jobTitle, companyEmail, language, applicationArea } =
    useSelector((s: RootState) => s.emailComposer)

  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: { companyName, jobTitle, companyEmail },
  })

  const fieldError = (field: keyof CompanyFormValues) =>
    form.formState.errors[field]?.message

  const update = (field: keyof CompanyFormValues, value: string) => {
    form.setValue(field, value, { shouldValidate: true, shouldDirty: true })
    dispatch(setField({ field, value }))
  }

  return (
    <>
      <FormHeader />
      <div className="grid gap-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
          <FormField
            id="company-name"
            icon={<Building2 className="w-3 h-3" />}
            label="Nome da Empresa"
            value={companyName}
            placeholder="Google"
            required
            error={fieldError("companyName")}
            onChange={(value) => update("companyName", value)}
          />

          <FormField
            id="job-title"
            icon={<Briefcase className="w-3 h-3" />}
            label="Título da Vaga"
            value={jobTitle}
            placeholder="Engenheiro de Software"
            required
            error={fieldError("jobTitle")}
            onChange={(value) => update("jobTitle", value)}
          />
        </div>

        <FormField
          id="company-email"
          icon={<Mail className="w-3 h-3" />}
          label="Email da Empresa"
          value={companyEmail}
          placeholder="empresa@gmail.com"
          required
          error={fieldError("companyEmail")}
          onChange={(value) => update("companyEmail", value)}
        />

        <div className="grid grid-cols-2 gap-x-4">
          <LanguageSelect language={language} />
          <ApplicationAreaSelect applicationArea={applicationArea} />
        </div>
      </div>
    </>
  )
}