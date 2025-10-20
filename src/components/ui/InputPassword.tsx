import React, { useState } from "react";
import Input from "./Input";
import { Eye, EyeOff } from "@/components/icons";

export type InputPasswordProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  pattern?: string;
  inputClassName?: string;
};

export const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  (
    { id, name, placeholder, error, pattern, className, inputClassName, disabled, tabIndex, ...rest },
    ref
  ) => {
    const [show, setShow] = useState(false);

    const EyeIcon = <Eye className="h-5 w-5" />;
    const EyeOffIcon = <EyeOff className="h-5 w-5" />;

    return (
      <Input
        ref={ref}
        id={id}
        name={name}
        placeholder={placeholder}
        error={error}
        type={show ? "text" : "password"}
        pattern={pattern}
        disabled={disabled}
        tabIndex={tabIndex}
        rightIcon={
          <button
            type="button"
            aria-label={show ? "Hide password" : "Show password"}
            aria-pressed={show}
            title={show ? "Hide password" : "Show password"}
            onClick={() => setShow((s) => !s)}
            tabIndex={typeof tabIndex === 'number' ? tabIndex + 1 : 0}
            className="rounded p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 transition-colors"
          >
            {show ? EyeOffIcon : EyeIcon}
          </button>
        }
        className={className}
        inputClassName={inputClassName}
        {...rest}
      />
    );
  }
);

InputPassword.displayName = "InputPassword";

export default InputPassword;

