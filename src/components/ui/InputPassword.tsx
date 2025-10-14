

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
    {
      id,
      name,
      placeholder,
      error,
      pattern,
      className,
      inputClassName,
      ...rest
    },
    ref
  ) => {
    const [show, setShow] = useState(false);

    const EyeIcon = <Eye className="h-5 w-5" />;
    const EyeOffIcon = <EyeOff className="h-5 w-5" />;

    return (
      <div className={["relative", className].filter(Boolean).join(" ")}>        
        <Input
          ref={ref}
          id={id}
          name={name}
          placeholder={placeholder}
          error={error}
          type={show ? "text" : "password"}
          pattern={pattern}
          // Reservar espacio para el botón de ojo
          inputClassName={["pr-10", inputClassName].filter(Boolean).join(" ")}
          {...rest}
        />

        <button
          type="button"
          aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
          aria-pressed={show}
          title={show ? "Ocultar contraseña" : "Mostrar contraseña"}
          onClick={() => setShow((s) => !s)}
          className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 transition-colors"
        >
          {show ? EyeOffIcon : EyeIcon}
        </button>
      </div>
    );
  }
);

InputPassword.displayName = "InputPassword";
