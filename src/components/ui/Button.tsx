"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  label: string;
};

export function Button({
  variant = "primary",
  className = "",
  label = "",
  type = "button",
  id = "",
  disabled,
  tabIndex,
  ...rest
}: ButtonProps) {
  const base =
    "w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary transition-transform transform";
  const hover = disabled ? "" : "hover:bg-opacity-90 hover:scale-105";
  const cursor = disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer";
  const styles = variant === "primary" ? "bg-primary" : "";

  return (
    <button
      type={type}
      id={id}
      disabled={disabled}
      className={[base, styles, cursor, hover, className].filter(Boolean).join(" ")}
      tabIndex={typeof tabIndex === 'number' ? tabIndex : 0}
      {...rest}
    >
      {label}
    </button>
  );
}

export default Button;
