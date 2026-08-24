import * as React from "react"
import { ChevronDown, Loader2 } from "lucide-react"
import { useQuery } from "@tanstack/react-query"

import { cn } from "@/lib/utils"
import { Label } from "@/components/atoms/Label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/atoms/Popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/atoms/Command"
import { useDebounce } from "@/hooks/use-debounce"
import { User, AsyncComboboxFieldProps } from "@/types/select"

export function AsyncComboboxField({
  id,
  label,
  placeholder,
  searchPlaceholder = "Search...",
  value,
  onChange,
  error,
  required,
}: AsyncComboboxFieldProps) {
  const [open, setOpen] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState("")
  const debouncedSearch = useDebounce(searchTerm, 300)

  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ["users", debouncedSearch],
    queryFn: async () => {
      const res = await fetch(`/api/users?search=${debouncedSearch}`)
      const json = await res.json()
      return json.data
    },
  })

  const selectedUser = React.useMemo(() => {
    // If we already have a user in the fetched list, use it
    const found = users?.find((u) => u.id === value)
    if (found) return found
    
    // Otherwise, we might want to fetch the user by ID or just assume we don't have full data here
    // For this example, if there's a value but not in list, we just show "Selected"
    return value ? { id: value, name: "Selected User" } : null
  }, [users, value])

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
            {selectedUser ? selectedUser.name : <span className="text-slate-400">{placeholder}</span>}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-0" style={{ width: "var(--radix-popover-trigger-width)" }} align="start">
          <Command shouldFilter={false}>
            <div className="flex items-center border-b border-primary-200 px-3">
              <input
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <CommandList>
              {isLoading && (
                <div className="p-4 flex items-center justify-center text-slate-500">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Loading...
                </div>
              )}
              {!isLoading && users?.length === 0 && (
                <CommandEmpty>No users found.</CommandEmpty>
              )}
              <CommandGroup>
                {!isLoading &&
                  users?.map((user) => (
                    <CommandItem
                      key={user.id}
                      value={user.id}
                      onSelect={() => {
                        onChange(user.id === value ? "" : user.id)
                        setOpen(false)
                      }}
                    >
                      <div className="flex flex-col">
                        <span className={cn(user.id === value ? "text-primary-800 font-medium" : "text-slate-800")}>
                          {user.name}
                        </span>
                        <span className="text-xs text-slate-500">{user.email}</span>
                      </div>
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
