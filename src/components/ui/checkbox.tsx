import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface ExtendedCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  id: string;
  label: React.ReactNode;
  error?: string;
  isValid?: boolean;
  description?: string;
  variant?: 'default' | 'orange';
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  ExtendedCheckboxProps
>(
  (
    {
      id,
      label,
      className,
      error,
      isValid,
      disabled,
      description,
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    const isError = Boolean(error);

    const variantClass =
      variant === 'orange'
        ? 'data-[state=checked]:bg-orange-500 data-[state=checked]:text-white '
        : 'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground';

    return (
      <div className="flex flex-col items-start space-y-1">
        <label
          htmlFor={id}
          className={cn(
            'flex items-flex-start gap-2',
            disabled && 'cursor-not-allowed opacity-70',
          )}
        >
          <CheckboxPrimitive.Root
            id={id}
            ref={ref}
            disabled={disabled}
            className={cn(
              'peer h-[16px] w-[16px] shrink-0 rounded-[4px] border border-base-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
              variantClass,
              disabled && 'cursor-not-allowed opacity-50',
              isError && 'border-error-medium text-error-medium',
              isValid && !isError && 'border-base-input',
              props.checked && variant === 'orange' && 'border-orange-500',
              props.checked && variant !== 'orange' && 'border-primary',
              className,
            )}
            {...props}
          >
            <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
              <Check color="#fff" size={14} />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
          <div className="flex flex-col items-start">
            <span className="body-2-medium">{label}</span>
            <span className="body-2 text-muted-foreground">{description}</span>
          </div>
        </label>
        {isError && <p className="body-3 text-error-medium">{error}</p>}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
