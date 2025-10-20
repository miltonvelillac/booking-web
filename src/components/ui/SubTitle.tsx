import React from "react";

type SubtitleProps = {
  label: string;
  id?: string;
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export function Subtitle({ label, id, className }: SubtitleProps) {
  const base = "text-gray-500 dark:text-gray-400 mt-2";

  return (
    <p
      id={id}
      className={[base, className].filter(Boolean).join(" ")}
    >
      {label}
    </p>
  );
}

export default Subtitle;
