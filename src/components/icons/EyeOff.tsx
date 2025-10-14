import React from "react";
import type { IconProps } from "./Eye";

export function EyeOff({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      {...props}
    >
      {/* Mismo ojo que Eye */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.51 7.36 5 12 5c4.64 0 8.577 2.51 9.964 6.678.07.214.07.43 0 .644C20.577 16.49 16.64 19 12 19c-4.64 0-8.577-2.51-9.964-6.678z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      {/* Tachón diagonal */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 4l16 16"
      />
    </svg>
  );
}

export default EyeOff;
