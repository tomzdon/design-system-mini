import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import React from 'react';
import { cn } from '@/lib/utils';

interface ExtendedCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  id: string;
  label: React.ReactNode;
  error?: string;
  isValid?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  ExtendedCheckboxProps
>(({ id, label, className, error, isValid, disabled, ...props }, ref) => {
  const isError = Boolean(error);

  return (
    <div className="flex flex-col items-start space-y-1">
      <label
        htmlFor={id}
        className={cn('flex items-center gap-2', disabled && 'cursor-not-allowed opacity-70')}
      >
        <CheckboxPrimitive.Root
          id={id}
          ref={ref}
          disabled={disabled}
          className={cn(
            'peer h-[16px] w-[16px] shrink-0 rounded-[2px] border border-neutral-medium  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
            'data-[state=checked]:bg-primary-dark data-[state=checked]:text-primary-foreground',
            disabled && 'cursor-not-allowed opacity-50',
            isError && 'border-error-medium text-error-medium',
            isValid && !isError && 'border-primary',
            props.checked && 'border-primary-dark',
            className,
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator className="flex items-center justify-center  ">
            <i className={`fa-kit fa-check  text-[10px]  ${!disabled  ? 'text-white' : 'text-error'}`} />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <span className="body-2">{label}</span>
      </label>
      {isError && <p className="body-3 text-error-medium">{error}</p>}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
