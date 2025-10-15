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
    { id, name, placeholder, error, pattern, className, inputClassName, ...rest },
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
        rightIcon={
          <button
            type="button"
            aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
            aria-pressed={show}
            title={show ? "Ocultar contraseña" : "Mostrar contraseña"}
            onClick={() => setShow((s) => !s)}
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

