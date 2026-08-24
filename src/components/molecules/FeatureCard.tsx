import * as React from "react"
import { cn } from "@/lib/utils"
import { FeatureCardProps } from "@/types/select"

export function FeatureCard({
  title,
  description,
  icon,
  iconContainerClassName,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col gap-4",
        className
      )}
    >
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
          iconContainerClassName
        )}
      >
        {icon}
      </div>
      <div>
        <h4 className="mb-2 text-sm font-bold text-slate-800">{title}</h4>
        <p className="text-xs leading-relaxed text-slate-500">{description}</p>
      </div>
    </div>
  )
}
