"use client";

import React from "react";

type Props = { name: string };

export default function Brand({ name }: Props) {
  return (
    <div className="flex items-center gap-2 select-none">
      <span aria-hidden className="inline-flex h-5 w-5 items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <rect x="3" y="3" width="9" height="9" rx="2" className="fill-primary" />
          <rect x="12" y="12" width="9" height="9" rx="2" className="fill-primary/70" />
        </svg>
      </span>
      <span className="font-semibold text-white tracking-tight text-base sm:text-lg">
        {name}
      </span>
    </div>
  );
}

