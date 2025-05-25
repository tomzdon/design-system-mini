import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 button-bold gap-2 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-brand-foreground-light',
        secondary: 'bg-neutral-800 dark:bg-white text-white dark:text-brand-foreground-light',
        tertiary: 'bg-transparent text-brand-foreground-light border border-text-brand-foreground-light dark:border-white dark:text-white',
        outline: 'bg-transparent text-brand-foreground-light border border-neutral-dark',
        text: 'bg-transparent text-brand-foreground-light font-normal gap-1 hover:text-neutral-medium dark:text-white',

      },
      size: {
        medium: 'py-[8px] px-[16px]',
        large: 'px-[20px] py-[10px]',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
);

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  title?: string;
  Icon?: React.ReactNode;
  iconName?: string;
  fullwidth?: boolean;
  titleClassName?: string;
}

function Button({
                  className,
                  variant,
                  size = 'medium',
                  asChild = false,
                  title,
                  Icon,
                  iconName,
                  fullwidth,
                  titleClassName,
                  ...props
                }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        fullwidth && 'w-full',
      )}
      {...props}
    >
      {Icon && Icon}
      {iconName && <i className={`fa-kit ${iconName}`}></i>}
      {title && <span className={cn(titleClassName)}>{title}</span>}
    </Comp>
  );
}

export { Button, buttonVariants };