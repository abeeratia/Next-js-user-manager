import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        buttonLogo:
          "rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-colors",
        primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-sm",
        brand:
          "text-base cursor-pointer rounded-xl bg-primary-700 text-white hover:bg-primary-800",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "border-2 border-primary-600 bg-white text-primary-600 hover:bg-primary-50",
        ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
        accent: "bg-accent2-500 hover:bg-accent-600 text-white shadow-sm",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2",
        sm: "h-9 px-3",
        lg: "px-6 py-3 text-base rounded-lg",
        xl: "px-8 py-4 text-base rounded-xl",
        icon: "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: LucideIcon;
  iconSize?: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      icon: Icon,
      iconSize = 16,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Icon && <Icon size={iconSize} />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
