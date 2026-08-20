"use client"

import { Building2, Briefcase, Mail, Globe, ContactRound } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useDispatch, useSelector } from "react-redux"
import { Field, FieldDescription, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { APPLICATION_AREAS, LANGUAGES } from "@/data/options"
import type {
  ApplicationAreaCode,
  LanguageCode,
} from "@/interfaces/select-type"
import type { RootState, AppDispatch } from "@/store"
import {
  setApplicationArea,
  setField,
  setLanguage,
} from "@/store/emailComposerSlice"
import NotNullSign from "./ui/not-null-sign"

const schema = z.object({
  companyName: z.string().trim().min(1, "Nome da empresa é obrigatório."),
  jobTitle: z.string().trim().min(1, "Título da vaga é obrigatório."),
  companyEmail: z.string().trim().email("Introduza um e-mail válido."),
})
type FormValues = z.infer<typeof schema>
const inputClasses =
  "w-full bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-4 text-sm"
const labelClasses =
  "block text-xs text-neutral-500 dark:text-neutral-400 mb-1.5 flex items-center gap-1"

export default function CompanyForm() {
  const dispatch = useDispatch<AppDispatch>()
  const { companyName, jobTitle, companyEmail, language, applicationArea } =
    useSelector((s: RootState) => s.emailComposer)
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: { companyName, jobTitle, companyEmail },
  })
  const fieldError = (field: keyof FormValues) =>
    form.formState.errors[field]?.message
  const update = (
    field: "companyName" | "jobTitle" | "companyEmail",
    value: string,
  ) => {
    form.setValue(field, value, { shouldValidate: true, shouldDirty: true })
    dispatch(setField({ field, value }))
  }

  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <Building2 className="w-4 h-4 text-lime-600 dark:text-lime-500" />
        <h2 className="text-sm font-semibold uppercase tracking-wide">
          Dados da Empresa
        </h2>
      </div>
      <div className="grid gap-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
          <Field data-invalid={!!fieldError("companyName")}>
            <FieldLabel htmlFor="company-name" className={labelClasses}>
              <Building2 className="w-3 h-3" />
              Nome da Empresa <NotNullSign />
            </FieldLabel>
            <Input
              id="company-name"
              value={companyName}
              onChange={(e) => update("companyName", e.target.value)}
              placeholder="Ex: Makene Jobs"
              className={inputClasses}
              aria-invalid={!!fieldError("companyName")}
            />
            {fieldError("companyName") && (
              <FieldDescription className="text-destructive text-xs">
                {fieldError("companyName")}
              </FieldDescription>
            )}
          </Field>

          <Field data-invalid={!!fieldError("jobTitle")}>
            <FieldLabel htmlFor="job-title" className={labelClasses}>
              <Briefcase className="w-3 h-3" />
              Título da Vaga <NotNullSign />
            </FieldLabel>
            <Input
              id="job-title"
              value={jobTitle}
              onChange={(e) => update("jobTitle", e.target.value)}
              placeholder="Ex: Engenheiro de Software"
              className={inputClasses}
              aria-invalid={!!fieldError("jobTitle")}
            />
            {fieldError("jobTitle") && (
              <FieldDescription className="text-destructive text-xs">
                {fieldError("jobTitle")}
              </FieldDescription>
            )}
          </Field>
        </div>

        <Field data-invalid={!!fieldError("companyEmail")}>
          <FieldLabel htmlFor="company-email" className={labelClasses}>
            <Mail className="w-3 h-3" />
            Email da Empresa <NotNullSign />
          </FieldLabel>
          <Input
            id="company-email"
            value={companyEmail}
            onChange={(e) => update("companyEmail", e.target.value)}
            placeholder="empresa@gmail.com"
            className={inputClasses}
            aria-invalid={!!fieldError("companyEmail")}
          />
          {fieldError("companyEmail") && (
            <FieldDescription className="text-destructive text-xs">
              {fieldError("companyEmail")}
            </FieldDescription>
          )}
        </Field>

        <div className="grid grid-cols-2 gap-x-4">
          <Field>
            <FieldLabel className={labelClasses}>
              <ContactRound className="w-3 h-3" />
              Idioma da Empresa
            </FieldLabel>
            <Select
              value={language}
              onValueChange={(value) =>
                dispatch(setLanguage(value as LanguageCode))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione um idioma">
                  {LANGUAGES.find((item) => item.code === language)?.label}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {LANGUAGES.map((item) => (
                    <SelectItem key={item.code} value={item.code}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel className={labelClasses}>
              <Globe className="w-3 h-3" />
              Área da Candidatura
            </FieldLabel>
            <Select
              value={applicationArea}
              onValueChange={(value) =>
                dispatch(setApplicationArea(value as ApplicationAreaCode))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma área">
                  {
                    APPLICATION_AREAS.find(
                      (item) => item.code === applicationArea,
                    )?.label
                  }
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {APPLICATION_AREAS.map((item) => (
                    <SelectItem key={item.code} value={item.code}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </div>
      </div>
    </>
  )
}

export { schema }
