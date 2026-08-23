import * as React from "react";
import { cn } from "@/lib/utils";

export interface ColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  hex: string;
  label: string;
  colorClassName: string;
  lightText?: boolean;
}

export function ColorSwatch({
  name,
  hex,
  label,
  colorClassName,
  lightText,
  className,
  ...props
}: ColorSwatchProps) {
  return (
    <div
      className={cn("flex flex-col items-center gap-3", className)}
      {...props}
    >
      <div
        className={cn(
          "h-16 w-full rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.08)]",
          colorClassName
        )}
      />
      <div className="flex flex-col items-center text-center gap-1">
        <span
          className={cn(
            "text-sm font-bold",
            lightText ? "text-slate-100" : "text-slate-800"
          )}
        >
          {name}
        </span>
        <span
          className={cn(
            "text-xs",
            lightText ? "text-slate-200" : "text-slate-500"
          )}
        >
          {hex}
        </span>
        <span
          className={cn(
            "text-xs italic",
            lightText ? "text-slate-300" : "text-slate-400"
          )}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
