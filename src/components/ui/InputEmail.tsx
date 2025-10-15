

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
      inputClassName,
      disabled,
      onClear,
      ...rest
    },
    ref
  ) => {

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
        pattern={pattern}
        disabled={disabled}
        className={className}
        inputClassName={inputClassName}
        {...rest}
      />
    );
  }
);

InputEmail.displayName = "InputEmail";
