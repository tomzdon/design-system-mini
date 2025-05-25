import React, { forwardRef, useCallback, useState } from 'react';
import clsx from 'clsx';

export interface InputProps {
  id?: string;
  label?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  helpText?: string;
  prefix?: string;
  isValid?: boolean;
  error?: string;
  value?: string;
  icon?: React.ReactNode;
  autoComplete?: string;
  min?: string | number;
  max?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      type = 'text',
      placeholder = '',
      className,
      disabled = false,
      isValid,
      helpText,
      prefix,
      error,
      icon,
      ...inputProps
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = useCallback(() => {
      setShowPassword((prev) => !prev);
    }, []);

    return (
      <div className={clsx('w-full', className)}>
        {label && (
          <label htmlFor={id} className="mb-1 flex justify-between label-medium text-neutral-dark">
            <span>{label}</span>
            {type === 'password' && (
              <span
                onClick={togglePasswordVisibility}
                className="cursor-pointer underline text-[color:var(--color-neutral-light)] dark:text-[color:var(--color-neutral-medium)] text-sm"
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            )}
          </label>
        )}

        <div className="relative flex items-center w-full">
          {icon && (
            <span className="inline-flex items-center px-2 h-10 bg-neutral-lighter text-neutral-dark">
              {icon}
            </span>
          )}

          <div className="relative flex items-center w-full">
            {prefix && (
              <span className="absolute left-2 text-sm h-10 flex items-center text-neutral-medium pointer-events-none">
                {prefix}
              </span>
            )}

            <input
              {...inputProps}
              id={id}
              ref={ref}
              type={showPassword && type === 'password' ? 'text' : type}
              placeholder={placeholder}
              disabled={disabled}
              className={clsx(
                'w-full h-10 px-3 py-2 rounded-md transition outline-none',
                prefix && 'pl-8',
                icon && 'rounded-l-none',
                disabled && 'cursor-not-allowed bg-lightest text-neutral-light',
                !disabled &&
                (error
                  ? 'border border-error-medium focus:ring-1 focus:ring-error-medium focus:border-error-medium'
                  : isValid
                    ? 'border border-primary-dark focus:ring-1 focus:ring-primary-dark focus:border-primary-dark'
                    : 'border border-neutral focus:ring-1 focus:ring-primary-dark focus:border-primary-dark')
              )}
            />
          </div>
        </div>

        {helpText && (
          <p className="mt-1 small text-[color:var(--color-neutral-medium)] dark:text-[color:var(--color-neutral-light)]">
            {helpText}
          </p>
        )}

        {error && (
          <p className="mt-1 body-3 text-[color:var(--color-error-medium)]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputComponent.displayName = 'Input';
export const Input = React.memo(InputComponent);
