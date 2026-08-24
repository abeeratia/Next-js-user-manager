"use client"

import * as React from "react"
import { Button } from "@/components/atoms/Button"
import { cn } from "@/lib/utils"

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number
  totalPages: number
  totalResults?: number
  resultsPerPage?: number
  onPageChange?: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  totalResults,
  resultsPerPage = 10,
  onPageChange,
  className,
  ...props
}: PaginationProps) {
  const startResult = (currentPage - 1) * resultsPerPage + 1
  const endResult = Math.min(currentPage * resultsPerPage, totalResults || 0)

  // Generate page numbers
  const renderPageNumbers = () => {
    const pages = []
    
    // Always show first page
    pages.push(
      <Button
        key={1}
        variant={currentPage === 1 ? "primary" : "outline"}
        size="sm"
        className={cn("w-9 px-0", currentPage !== 1 && "text-slate-700")}
        onClick={() => onPageChange?.(1)}
      >
        1
      </Button>
    )

    if (totalPages > 1) {
      if (currentPage > 3) {
        pages.push(
          <span key="ellipsis-start" className="px-2 text-slate-500">
            ...
          </span>
        )
      }

      // Middle pages
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        pages.push(
          <Button
            key={i}
            variant={currentPage === i ? "primary" : "outline"}
            size="sm"
            className={cn("w-9 px-0", currentPage !== i && "text-slate-700")}
            onClick={() => onPageChange?.(i)}
          >
            {i}
          </Button>
        )
      }

      if (currentPage < totalPages - 2) {
        pages.push(
          <span key="ellipsis-end" className="px-2 text-slate-500">
            ...
          </span>
        )
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(
          <Button
            key={totalPages}
            variant={currentPage === totalPages ? "primary" : "outline"}
            size="sm"
            className={cn("w-9 px-0", currentPage !== totalPages && "text-slate-700")}
            onClick={() => onPageChange?.(totalPages)}
          >
            {totalPages}
          </Button>
        )
      }
    }

    return pages
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between gap-4 sm:flex-row px-4 py-3 rounded-xl border border-slate-200",
        className
      )}
      {...props}
    >
      <div className="text-sm text-slate-500">
        {totalResults ? (
          `Showing ${startResult} to ${endResult} of ${totalResults} results`
        ) : (
          `Page ${currentPage} of ${totalPages}`
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="text-slate-700"
          disabled={currentPage === 1}
          onClick={() => onPageChange?.(currentPage - 1)}
        >
          Previous
        </Button>
        
        <div className="hidden sm:flex items-center gap-2">
          {renderPageNumbers()}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="text-slate-700"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange?.(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
