import * as React from "react"
import { ChevronDown, Loader2 } from "lucide-react"
import { useInfiniteQuery } from "@tanstack/react-query"

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
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

import { InfiniteScrollSelectFieldProps } from "@/types/select"

export function InfiniteScrollSelectField({
  id,
  label,
  placeholder,
  searchPlaceholder = "Search...",
  value,
  onChange,
  error,
  required,
}: InfiniteScrollSelectFieldProps) {
  const [open, setOpen] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState("")
  const debouncedSearch = useDebounce(searchTerm, 300)

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["countries", debouncedSearch],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await fetch(`/api/countries?search=${debouncedSearch}&page=${pageParam}&limit=15`)
      const json = await res.json()
      return json
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.hasMore) {
        return lastPage.meta.page + 1
      }
      return undefined
    },
  })

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (
      target.scrollHeight - target.scrollTop <= target.clientHeight + 50 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage()
    }
  }

  const options = React.useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || []
  }, [data])

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
            {value ? value : <span className="text-slate-400">{placeholder}</span>}
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
            <CommandList onScroll={handleScroll}>
              {status === "pending" && (
                <div className="p-4 flex items-center justify-center text-slate-500">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Loading...
                </div>
              )}
              {status === "success" && options.length === 0 && (
                <CommandEmpty>No options found.</CommandEmpty>
              )}
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option}
                    value={option}
                    onSelect={() => {
                      onChange(option === value ? "" : option)
                      setOpen(false)
                    }}
                  >
                    <span className={cn(option === value ? "text-primary-800 font-medium" : "text-slate-800")}>
                      {option}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
              
              {/* Intersection observer target and loading indicator */}
              <div className="py-3 text-center text-xs text-slate-500">
                {isFetchingNextPage ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="h-3 w-3 animate-spin mr-2" />
                    Loading more...
                  </div>
                ) : hasNextPage ? (
                  "Scroll to load more"
                ) : options.length > 0 ? (
                  "No more results"
                ) : null}
              </div>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {error && <span className="text-sm text-destructive">{error}</span>}
    </div>
  )
}
