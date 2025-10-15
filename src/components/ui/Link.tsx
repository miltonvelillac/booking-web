import React from "react";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
};

export function LinkElement({ label, className, ...rest }: LinkProps) {
  const base = "text-sm font-medium text-primary hover:underline";

  return (
    <a
      className={[base, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {label}
    </a>
  );
}

export default LinkElement;
