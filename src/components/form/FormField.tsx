import type { ReactNode } from "react"

import { Field, FieldDescription, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import NotNullSign from "../ui/not-null-sign"
import { inputClasses, labelClasses } from "./styles/FormFieldStyles"

interface FormFieldProps {
  id: string
  icon: ReactNode
  label: string
  value: string
  placeholder: string
  error?: string
  required?: boolean
  onChange: (value: string) => void
}

export default function FormField({
  id,
  icon,
  label,
  value,
  placeholder,
  error,
  required,
  onChange,
}: FormFieldProps) {
  return (
    <Field data-invalid={!!error}>
      <FieldLabel htmlFor={id} className={labelClasses}>
        {icon}
        {label} {required && <NotNullSign />}
      </FieldLabel>
      <Input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClasses}
        aria-invalid={!!error}
      />
      {error && (
        <FieldDescription className="text-destructive text-xs">
          {error}
        </FieldDescription>
      )}
    </Field>
  )
}
