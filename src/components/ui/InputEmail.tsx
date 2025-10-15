

import React from "react";
import Input from "./Input";

export type InputEmailProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  pattern?: string;
  clearable?: boolean;
  onClear?: () => void;
  inputClassName?: string;
};

export const InputEmail = React.forwardRef<HTMLInputElement, InputEmailProps>(
  (
    {
      id,
      name,
      placeholder,
      error,
      pattern,
      className,
      clearable,
      onClear,
      inputClassName,
      ...rest
    },
    ref
  ) => {
    // RFC5322-compliant email patterns can be very long; usamos una variante práctica
    const defaultPattern = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}";

    return (
      <Input
        ref={ref}
        id={id}
        name={name}
        placeholder={placeholder}
        error={error}
        type="email"
        inputMode="email"
        autoComplete="email"
        clearable={clearable ?? true}
        onClear={onClear}
        pattern={pattern ?? defaultPattern}
        className={className}
        inputClassName={inputClassName}
        {...rest}
      />
    );
  }
);

InputEmail.displayName = "InputEmail";
