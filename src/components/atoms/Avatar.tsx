import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full text-xs font-semibold uppercase",
  {
    variants: {
      color: {
        default: "bg-slate-100 text-slate-800",
        success: "bg-primary-100 text-primary-700",
      },
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
      },
    },
    defaultVariants: {
      color: "default",
      size: "md",
    },
  }
)

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof avatarVariants> {
  initials: string
}

function Avatar({ className, color, size, initials, ...props }: AvatarProps) {
  return (
    <div className={cn(avatarVariants({ color, size }), className)} {...props}>
      {initials}
    </div>
  )
}

export { Avatar, avatarVariants }
