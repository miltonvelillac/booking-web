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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 3l18 18"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.584 10.587A3 3 0 0013.5 13.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.53 12.943C20.232 12.068 21.5 10.5 21.5 10.5S18.5 6 12 6a10.3 10.3 0 00-3.2.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.53 7.56C3.768 8.932 2.5 10.5 2.5 10.5S5.5 15 12 15c1.116 0 2.15-.154 3.078-.434"
      />
    </svg>
  );
}

export default EyeOff;

