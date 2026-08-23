import { cn } from "@/lib/utils";

interface TypographyRowProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  font?: string;
  size: string;
  weight: string;
  letterSpacing: string;
  lineHeight: string;
  usage: string;
  borderColorClassName: string;
  sampleClassName: string;
}

export function TypographyRow({
  name,
  font = "Inter",
  size,
  weight,
  letterSpacing,
  lineHeight,
  usage,
  borderColorClassName,
  sampleClassName,
  className,
  ...props
}: TypographyRowProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 border-l-4 pl-4",
        borderColorClassName,
        className
      )}
      {...props}
    >
      <div className={cn("text-slate-900", sampleClassName)}>{name}</div>
      <div className="text-md text-slate-600 mt-1">
        Font: {font}, Size: {size}, Weight: {weight}
      </div>
      <div className="text-md text-slate-600">
        Letter Spacing: {letterSpacing}, Line Height: {lineHeight}
      </div>
      <div className="text-md text-slate-600">
        {usage}
      </div>
    </div>
  );
}
