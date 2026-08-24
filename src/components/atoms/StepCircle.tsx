import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";
import * as React from "react";

const stepCircleVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full font-medium transition-colors",
  {
    variants: {
      state: {
        default: "bg-secondary-100 text-secondary-700",
        active: "bg-primary-600 text-white",
        completed: "bg-primary-600 text-white",
      },
      size: {
        sm: "h-8 w-8 text-sm",
        md: "h-10 w-10 text-base",
        lg: "h-12 w-12 text-lg",
      },
    },
    defaultVariants: {
      state: "default",
      size: "md",
    },
  }
);

export interface StepCircleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepCircleVariants> {
  stepNumber?: number;
  icon?: React.ReactNode;
}

export function StepCircle({
  className,
  state,
  size,
  stepNumber,
  icon,
  ...props
}: StepCircleProps) {
  let content = icon;

  if (!content) {
    if (state === "completed") {
      const iconSize = size === "sm" ? 14 : size === "lg" ? 20 : 16;
      content = <Check size={iconSize} />;
    } else if (stepNumber !== undefined) {
      content = stepNumber;
    }
  }

  return (
    <div
      className={cn(stepCircleVariants({ state, size, className }))}
      {...props}
    >
      {content}
    </div>
  );
}
