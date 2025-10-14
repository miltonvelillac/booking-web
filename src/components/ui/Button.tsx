"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none h-9 px-4 py-2";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-90"
      : "border border-black/10 dark:border-white/20 bg-transparent hover:bg-black/5 dark:hover:bg-white/10";

  return <button className={[base, styles, className].join(" ")} {...props} />;
}

export default Button;
