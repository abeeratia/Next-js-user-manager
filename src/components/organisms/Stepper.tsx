import * as React from "react"
import { StepCircle } from "@/components/atoms/StepCircle"
import { cn } from "@/lib/utils"

export interface Step {
  label: string
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[]
  currentStep: number // 1-indexed
}

export function Stepper({
  steps,
  currentStep,
  className,
  ...props
}: StepperProps) {
  // Calculate percentage (e.g. step 2 of 3 is roughly 50% or 66% depending on how you count. The design says 66% for step 2 of 3, so it's probably Math.round((currentStep / steps.length) * 100) or something. Wait, 2/3 is 66%).
  const percentage = Math.round((currentStep / steps.length) * 100)

  return (
    <div className={cn("w-full flex flex-col items-center", className)} {...props}>
      <div className="flex items-start w-full max-w-4xl mb-8">
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < currentStep
          const isActive = stepNumber === currentStep
          
          let state: "default" | "active" | "completed" = "default"
          if (isCompleted) state = "completed"
          else if (isActive) state = "active"

          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center gap-3 relative z-10 w-14 sm:w-24">
                <StepCircle
                  state={state}
                  size="sm"
                  stepNumber={stepNumber}
                />
                <span 
                  className={cn(
                    "text-sm font-medium text-center whitespace-nowrap absolute pt-10",
                    isActive || isCompleted ? "text-primary-600" : "text-slate-500"
                  )}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div 
                  className={cn(
                    "flex-1 h-1.5 mt-[21px] mx-1 sm:mx-4 transition-colors duration-300 min-w-[8px]",
                    isCompleted ? "bg-primary-600" : "bg-slate-200"
                  )}
                />
              )}
            </React.Fragment>
          )
        })}
      </div>
      
      <div className="text-sm pt-10 text-slate-600">
        Step {currentStep} of {steps.length} - {percentage}% complete
      </div>
    </div>
  )
}
