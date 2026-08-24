import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Label } from "@/components/atoms/Label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/atoms/Popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/atoms/Command"
import { Option, ComboboxFieldProps } from "@/types/select"

export function ComboboxField({
  id,
  label,
  placeholder,
  searchPlaceholder = "Search...",
  options,
  value,
  onChange,
  error,
  required,
}: ComboboxFieldProps) {
  const [open, setOpen] = React.useState(false)

  const selectedOption = options.find((opt) => opt.value === value)

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <Label htmlFor={id} className={error ? "text-destructive" : ""}>
          {label} {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            id={id}
            type="button"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "flex h-11 w-full items-center justify-between rounded-xl border border-primary-200 bg-white px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-50",
              error ? "border-destructive focus:ring-destructive" : "",
              open && "border-primary-600 ring-2 ring-primary-400"
            )}
          >
            {selectedOption ? selectedOption.label : <span className="text-slate-400">{placeholder}</span>}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-0" style={{ width: "var(--radix-popover-trigger-width)" }} align="start">
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>No options found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.label} // Cmdk searches by value
                    onSelect={() => {
                      onChange(option.value === value ? "" : option.value)
                      setOpen(false)
                    }}
                  >
                    <span className={cn("ml-2", option.value === value ? "text-primary-800 font-medium" : "text-slate-600")}>
                      {option.label}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {error && <span className="text-sm text-destructive">{error}</span>}
    </div>
  )
}
