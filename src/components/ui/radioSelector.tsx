import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import clsx from 'clsx';
import React from 'react';

export interface RadioOption<T extends string> {
  value: T;
  label: string;
  disabled?: boolean;
  icon?: string;
  children?: React.ReactNode;
}

interface RadioSelectorProps<T extends string> {
  title?: string;
  value?: T;
  options: RadioOption<T>[];
  onChange?: (value: T) => void;
  className?: string;
  optionClassName?: string;
}

export function RadioSelector<T extends string>({
                                                  title,
                                                  value,
                                                  options,
                                                  onChange,
                                                  className,
                                                  optionClassName,
                                                }: RadioSelectorProps<T>) {
  return (
    <RadioGroupPrimitive.Root
      className={clsx('flex flex-row  items-center gap-2', className)}
      value={value}
      onValueChange={onChange}
    >
      {title && <p className="text-sm font-bold">{title}</p>}
      {options.map((option) => (
        <RadioGroupPrimitive.Item
          key={option.value}
          value={option.value}
          disabled={option.disabled}
          className={clsx(
            'flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer text-sm font-normal border border-transparent transition-all',
            option.disabled && 'cursor-not-allowed opacity-60',
            optionClassName,
          )}
        >
          <div
            className={clsx(
              'relative h-4 w-4 rounded-full border',
              option.disabled
                ? 'border-neutral'
                : value === option.value
                  ? 'border-primary bg-primary'
                  : 'border-neutral-medium',
            )}
          >
            {value === option.value && (
              <div
                className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            )}
          </div>
          {option.icon && <i className={clsx('fa-kit fs-18', option.icon)} />}
          <span>{option.label}</span>

          {option.children}
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
}
