import * as React from "react"
import { Check, ChevronDown, X } from "lucide-react"

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
import { Option, MultiSelectFieldProps } from "@/types/select"

export function MultiSelectField({
  id,
  label,
  placeholder,
  options,
  selected,
  onChange,
  maxItems,
  error,
  required,
  searchPlaceholder,
}: MultiSelectFieldProps) {
  const [open, setOpen] = React.useState(false)

  const handleUnselect = (item: string) => {
    onChange(selected.filter((i) => i !== item))
  }

  const handleSelect = (item: string) => {
    if (selected.includes(item)) {
      onChange(selected.filter((i) => i !== item))
    } else {
      onChange([...selected, item])
    }
  }

  const selectedOptions = options.filter((opt) => selected.includes(opt.value))
  const isMaxReached = maxItems !== undefined && selected.length >= maxItems

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
            className={cn(
              "flex min-h-11 w-full items-center justify-between rounded-xl border border-primary-200 bg-white px-3 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-50",
              error ? "border-destructive focus:ring-destructive" : "",
              open && "border-primary-600 ring-2 ring-primary-400"
            )}
          >
            <div className="flex flex-wrap gap-2">
              {selected.length === 0 && (
                <span className="text-slate-400">{placeholder}</span>
              )}
              {selectedOptions.map((opt) => (
                <span
                  key={opt.value}
                  className="flex items-center gap-1 rounded bg-primary-100 px-2 py-1 text-xs font-medium text-primary-800"
                >
                  {opt.label}
                  <div
                    role="button"
                    tabIndex={0}
                    className="ml-1 rounded-full outline-none focus:ring-2 focus:ring-primary-400"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleUnselect(opt.value)
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleUnselect(opt.value)
                    }}
                  >
                    <X className="h-3 w-3 text-slate-500 hover:text-slate-700" />
                  </div>
                </span>
              ))}
            </div>
            <ChevronDown className="h-4 w-4 opacity-50 shrink-0 ml-2" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-0" style={{ width: "var(--radix-popover-trigger-width)" }} align="start">
          <Command>
            {searchPlaceholder && (
              <CommandInput placeholder={searchPlaceholder} />
            )}
            <CommandList>
              {isMaxReached && (
                <div className="px-2 py-2 text-sm text-orange-600 bg-orange-50 border-b border-orange-100 font-medium">
                  Maximum {maxItems} options selected
                </div>
              )}
              <CommandEmpty>No options found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selected.includes(option.value)
                  const isDisabled = !isSelected && isMaxReached
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => handleSelect(option.value)}
                      disabled={isDisabled}
                      className={cn(
                        "flex items-center",
                        isDisabled && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                          isSelected
                            ? "border-primary-600 bg-primary-600 text-white"
                            : "border-primary-300 opacity-50 [&_svg]:invisible"
                        )}
                      >
                        <Check className="h-3 w-3" />
                      </div>
                      <span className={isSelected ? "text-primary-800 font-medium" : "text-slate-600"}>{option.label}</span>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {error && <span className="text-sm text-destructive">{error}</span>}
    </div>
  )
}
