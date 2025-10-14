"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  label: string;
};

export function Button({ variant = "primary", className = "", label = '', type = 'button', id = '' }: ButtonProps) {
  const base = "w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary transition-transform transform hover:scale-105";
  const cursor = 'cursor-pointer';
  const styles =
    variant === "primary"
      ? "bg-primary"
      : "";

  return <button
    type={type}
    id={id}
    className={[base, styles, cursor].join(' ')}
    >{label}</button>
}

export default Button;
