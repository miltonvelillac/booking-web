

import React from "react";
import Input from "./Input";

export type InputEmailProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  pattern?: string;
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
        clearable={true}
        pattern={pattern ?? defaultPattern}
        className={className}
        {...rest}
      />
    );
  }
);

InputEmail.displayName = "InputEmail";
