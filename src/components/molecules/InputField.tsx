import * as React from "react";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { cn } from "@/lib/utils";

export interface InputFieldProps extends React.ComponentProps<"input"> {
  label: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, helperText, icon, id, className, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <Label
          htmlFor={id}
          className={cn(
            "text-sm font-semibold mb-0",
            error ? "text-red-500" : "text-slate-900 font-semibold"
          )}
        >
          {label}
        </Label>
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              {icon}
            </div>
          )}
          <Input
            id={id}
            ref={ref}
            className={cn(
              icon && "pl-11",
              error
                ? "border-destructive text-destructive placeholder:text-slate-400 focus-visible:ring-destructive"
                : "border-primary-600 focus-visible:ring-primary-600",
              className
            )}
            {...props}
          />
        </div>
        {error ? (
          <p className="text-sm text-red-600 font-medium">{error}</p>
        ) : helperText ? (
          <p className="text-sm text-slate-500 font-medium ">{helperText}</p>
        ) : null}
      </div>
    );
  }
);
InputField.displayName = "InputField";
