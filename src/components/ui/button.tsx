import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 text-[14px] leading-[18px] font-bold uppercase font-roboto gap-2 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                primary: "bg-[#b6e40d] text-neutral-darker",
                secondary: "bg-neutral-darkest text-white ",
                tertiary: "bg-neutral-darkest text-white border border-white",
                outline: "bg-transparent text-neutral-darkest border border-neutral-dark",
                text: "bg-transparent text-neutral-darkest font-normal gap-1 hover:text-neutral-medium",

            },
            size: {
                medium: "px-[8px] py-[7px]",
                large: "px-[20px] py-[10px]",
                icon: "size-9",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "medium",
        },
    }
)

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    asChild?: boolean
    title?: string
    icon?: React.ReactNode
    fullwidth?: boolean
    titleClassName?: string
}

function Button({
                    className,
                    variant,
                    size,
                    asChild = false,
                    title,
                    icon,
                    fullwidth,
                    titleClassName,
                    ...props
                }: ButtonProps) {
    const Comp = asChild ? Slot : "button"

    return (
        <Comp
            data-slot="button"
            className={cn(
                buttonVariants({variant, size, className}),
                fullwidth && "w-full"
            )}
            {...props}
        >
            {icon && <span>{icon}</span>}
            {title && <span className={cn(titleClassName)}>{title}</span>}
        </Comp>
    )
}

export {Button, buttonVariants}