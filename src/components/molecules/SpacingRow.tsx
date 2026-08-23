import { cn } from "@/lib/utils";

interface SpacingRowProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  tailwindClass: string;
  description: string;
}

export function SpacingRow({
  name,
  tailwindClass,
  description,
  className,
  ...props
}: SpacingRowProps) {
  return (
    <div className={cn("flex items-start gap-4", className)} {...props}>
      <div
        className={cn(
          "h-4 rounded-sm bg-primary-600 shrink-0 mt-1",
          tailwindClass
        )}
      />
      <div className="flex flex-col gap-1">
        <div className="text-base font-medium text-slate-900">{name}</div>
        <div className="text-sm text-slate-500">{description}</div>
      </div>
    </div>
  );
}
