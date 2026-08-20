import type { ReactNode } from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Field, FieldLabel } from "../ui/field"
import { labelClasses } from "./styles/FormFieldStyles"

interface Option<T extends string> {
  code: T
  label: string
}

interface FormSelectFieldProps<T extends string> {
  icon: ReactNode
  label: string
  placeholder: string
  value: T
  options: Option<T>[]
  onChange: (value: T) => void
}

export default function FormSelectField<T extends string>({
  icon,
  label,
  placeholder,
  value,
  options,
  onChange,
}: FormSelectFieldProps<T>) {
  const selectedLabel = options.find((item) => item.code === value)?.label

  return (
    <Field>
      <FieldLabel className={labelClasses}>
        {icon}
        {label}
      </FieldLabel>
      <Select value={value} onValueChange={(v) => onChange(v as T)}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder}>{selectedLabel}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((item) => (
              <SelectItem key={item.code} value={item.code}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  )
}
