import { Building2, Briefcase, Mail, Globe, ContactRound } from "lucide-react"
import { Field, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { ApplicationAreaCode, LanguageCode } from "@/types"
import { APPLICATION_AREAS, LANGUAGES } from "@/data/options"

const inputClasses =
  "w-full bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-4 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-lime-500 focus:border-lime-500"

const labelClasses =
  "block text-xs text-neutral-500 dark:text-neutral-400 mb-1.5 flex items-center gap-1"

interface CompanyFormProps {
  companyName: string
  setCompanyName: (value: string) => void
  jobTitle: string
  setJobTitle: (value: string) => void
  companyEmail: string
  setCompanyEmail: (value: string) => void
  language: LanguageCode
  setLanguage: (value: LanguageCode) => void
  applicationArea: ApplicationAreaCode
  setApplicationArea: (value: ApplicationAreaCode) => void
}

export default function CompanyForm({
  companyName,
  setCompanyName,
  jobTitle,
  setJobTitle,
  companyEmail,
  setCompanyEmail,
  language,
  setLanguage,
  applicationArea,
  setApplicationArea,
}: CompanyFormProps) {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <Building2 className="w-4 h-4 text-lime-600 dark:text-lime-500" />
        <h2 className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 uppercase tracking-wide">
          Dados da Empresa
        </h2>
      </div>

      <div className="grid gap-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
          <Field>
            <FieldLabel
              htmlFor="checkout-7j9-card-name-43j"
              className={labelClasses}
            >
              <Building2 className="w-3 h-3" />
              Nome da Empresa
            </FieldLabel>
            <Input
              id="checkout-7j9-card-name-43j"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Ex: Makene Jobs"
              className={inputClasses}
            />
          </Field>
          <Field>
            <FieldLabel
              htmlFor="checkout-7j9-card-name-43j"
              className={labelClasses}
            >
              <Briefcase className="w-3 h-3" />
              Título da Vaga
            </FieldLabel>
            <Input
              id="checkout-7j9-card-name-43j"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Ex: Engenheiro de Software"
              className={inputClasses}
            />
          </Field>
        </div>
        <Field>
          <FieldLabel
            htmlFor="checkout-7j9-card-name-43j"
            className={labelClasses}
          >
            <Mail className="w-3 h-3" /> Email da Empresa
          </FieldLabel>
          <Input
            id="checkout-7j9-card-name-43j"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            placeholder="empresa@gmail.com"
            autoComplete="no"
            className={inputClasses}
          />
        </Field>

        <div className="grid grid-cols-2 gap-x-4">
          <Field>
            <FieldLabel
              htmlFor="checkout-exp-month-ts6"
              className={labelClasses}
            >
              <ContactRound className="w-3 h-3" />
              Idioma da Empresa
            </FieldLabel>

            <Select
              value={language}
              onValueChange={(value) => setLanguage(value as LanguageCode)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione um idioma" />
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
            <FieldLabel
              htmlFor="checkout-exp-month-ts6"
              className={labelClasses}
            >
              <Globe className="w-3 h-3" />
              Área da Candidatura
            </FieldLabel>
            <Select
              value={applicationArea}
              onValueChange={(value) =>
                setApplicationArea(value as ApplicationAreaCode)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma área" />
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
