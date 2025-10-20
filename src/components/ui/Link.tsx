import React from "react";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
};

export function LinkElement({ label, className, tabIndex, ...rest }: LinkProps) {
  const base = "text-sm font-medium text-primary hover:underline";

  return (
    <a
      className={[base, className].filter(Boolean).join(" ")}
      tabIndex={tabIndex}
      {...rest}
    >
      {label}
    </a>
  );
}

export default LinkElement;
