import React from "react";

type LinkProps = {
  label: string;
  href: string;
  id?: string;
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export function LinkElement({ label, id, className, href }: LinkProps) {
  const base = "text-sm font-medium text-primary hover:underline";

  return <a
    id={id}
    className={[base, className].filter(Boolean).join(" ")}
    href={href}
    >{label}</a>
}

export default LinkElement;
