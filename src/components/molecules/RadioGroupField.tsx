import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/atoms/RadioGroup";
import { Label } from "@/components/atoms/Label";
import { cn } from "@/lib/utils";

export interface RadioOption {
  id: string;
  value: string;
  label: string;
}

export interface RadioGroupFieldProps {
  label: string;
  options: RadioOption[];
  defaultValue?: string;
  className?: string;
}

export const RadioGroupField = React.forwardRef<HTMLDivElement, RadioGroupFieldProps>(
  ({ label, options, defaultValue, className, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-4", className)} ref={ref} {...props}>
        <Label className="text-sm font-medium text-slate-900 mb-0">
          {label}
        </Label>
        <RadioGroup defaultValue={defaultValue}>
          <div className="flex flex-col gap-3">
            {options.map((option) => (
              <div key={option.id} className="flex items-center gap-3">
                <RadioGroupItem value={option.value} id={option.id} />
                <label
                  htmlFor={option.id}
                  className="text-md text-slate-800 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>
    );
  }
);
RadioGroupField.displayName = "RadioGroupField";
