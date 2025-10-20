"use client";

import React, { useEffect, useImperativeHandle, useRef, useState } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputClassName?: string;
  clearable?: boolean;
  onClear?: () => void;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputClassName,
      error,
      leftIcon,
      rightIcon,
      id,
      name,
      placeholder,
      type = "text",
      pattern,
      clearable,
      disabled,
      onClear,
      tabIndex,
      ...rest
    },
    ref
  ) => {
    const base = 'form-input block w-full h-12 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-primary focus:border-primary text-gray-900 dark:text-white';
    const border = error
      ? "border-red-500 focus:ring-red-500/30"
      : "border-gray-300 focus:border-primary focus:ring-primary/30 dark:border-gray-700";
    const withIconsLeft = leftIcon ? "pl-10" : "";

    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const [hasValue, setHasValue] = useState(
      typeof (rest as any).value !== "undefined"
        ? String((rest as any).value ?? "").length > 0
        : String((rest as any).defaultValue ?? "").length > 0
    );
    useEffect(() => {
      if (typeof (rest as any).value !== "undefined") {
        setHasValue(String((rest as any).value ?? "").length > 0);
      }
    }, [(rest as any).value]);

    const hasRightControls = rightIcon || clearable;
    const withIconsRight = hasRightControls ? "pr-10" : "";
    const cursorRightIcon = clearable ? 'cursor-pointer' : '';
    const rightIconBase = 'cursor-pointer rounded p-1 hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-600 text-gray-500 hover:text-gray-700';

    const errorId = error ? `${id ?? "input"}-error` : undefined;
    const disabledStyles = disabled
      ? 'bg-[var(--disable)] cursor-not-allowed focus:ring-0 focus:border-gray-300 dark:focus:border-gray-600'
      : '';

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (typeof (rest as any).value === "undefined") {
        setHasValue(e.currentTarget.value.length > 0);
      }
      rest.onChange?.(e);
    };

    const handleClear = () => {
      if (typeof (rest as any).value !== "undefined") {
        onClear?.();
      } else if (inputRef.current) {
        inputRef.current.value = "";
        setHasValue(false);
        const ev = new Event("input", { bubbles: true });
        inputRef.current.dispatchEvent(ev);
      }
      inputRef.current?.focus();
    };

    return (
      <div className={className}>
        <div className="relative">
          {leftIcon && (
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              {leftIcon}
            </span>
          )}

          <input
            ref={inputRef}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            disabled={disabled}
            className={[base, border, withIconsLeft, withIconsRight, disabled ? 'input-disabled' : '', disabledStyles, inputClassName]
              .filter(Boolean)
              .join(" ")}
            aria-invalid={!!error}
            aria-describedby={errorId}
            tabIndex={typeof tabIndex === 'number' ? tabIndex : 0}
            onChange={handleChange}
            {...rest}
          />

          {(rightIcon || (clearable && hasValue)) && (
            <span className={["absolute inset-y-0 right-0 flex items-center pr-2 gap-1 text-gray-400", disabled ? "pointer-events-none opacity-70" : ""].filter(Boolean).join(" ") }>
              {rightIcon && (
                <span className="flex items-center">{rightIcon}</span>
              )}
              {clearable && hasValue && !disabled && (
                <button
                  type="button"
                  aria-label="Clear input"
                  onClick={handleClear}
                  tabIndex={typeof tabIndex === 'number' ? tabIndex + 1 : 0}
                  className={[cursorRightIcon, rightIconBase].join(' ')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </span>
          )}
        </div>

        {error && (
          <p id={errorId} className="mt-1 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
