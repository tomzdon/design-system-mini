import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "flex items-center justify-center rounded-xl border px-2 py-0.5 text-brand-foreground-light text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-primary-500 ",
        orange:
          "border-transparent bg-orange-500 text-white ",
        secondary:
          "border-brand-foreground-light bg-brand-foreground-light dark:bg-white dark:text-brand-foreground-light text-white",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

function Badge({
                 className,
                 variant,
                 asChild = false,
                 leftIcon,
                 rightIcon,
                 children,
                 ...props
               }: BadgeProps) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {leftIcon && <span className="mr-1">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="ml-1">{rightIcon}</span>}
    </Comp>
  )
}

export { Badge, badgeVariants }