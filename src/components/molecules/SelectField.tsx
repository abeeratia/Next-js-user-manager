import * as React from "react"
import { Label } from "@/components/atoms/Label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/atoms/Select"
import { Option, SelectFieldProps } from "@/types/select"

export function SelectField({
  id,
  label,
  placeholder,
  options,
  value,
  onChange,
  error,
  required,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <Label htmlFor={id} className={error ? "text-destructive" : ""}>
          {label} {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={id} className={error ? "border-destructive focus:ring-destructive" : ""}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <span className="text-sm text-destructive">{error}</span>}
    </div>
  )
}
