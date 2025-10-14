import React from "react";

type LabelProps = {
  label: string;
  forInput: string; // id del input asociado
  id?: string;
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ label, forInput, id, className, ...rest }: LabelProps) {
  const base = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";

  return (
    <label
      id={id}
      htmlFor={forInput}
      className={[base, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {label}
    </label>
  );
}

export default Label;
