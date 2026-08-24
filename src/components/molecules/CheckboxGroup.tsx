import * as React from "react";
import { Checkbox } from "@/components/atoms/Checkbox";
import { Label } from "@/components/atoms/Label";
import { cn } from "@/lib/utils";

export interface CheckboxOption {
  id: string;
  label: string;
}

export interface CheckboxGroupProps {
  label: string;
  options: CheckboxOption[];
  className?: string;
}

export const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ label, options, className, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-4", className)} ref={ref} {...props}>
        <Label className="text-md font-medium text-slate-900 mb-0">
          {label}
        </Label>
        <div className="flex flex-col gap-3">
          {options.map((option) => (
            <div key={option.id} className="flex items-center gap-3">
              <Checkbox id={option.id} />
              <label
                htmlFor={option.id}
                className="text-md text-slate-900 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
CheckboxGroup.displayName = "CheckboxGroup";
