import React from "react";

type TitleProps = {
  label: string;
  id?: string;
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export function Title({ label, id, className }: TitleProps) {
  const base = "text-3xl font-bold text-gray-900 dark:text-white";

  return (
    <h2
      id={id}
      className={[base, className].filter(Boolean).join(" ")}
    >
      {label}
    </h2>
  );
}

export default Title;
