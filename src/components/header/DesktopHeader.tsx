"use client";

import React from "react";
import { useI18n } from "@/i18n";
import NavItems from "./NavItems";

type HeaderProps = { title?: string };

export default function DesktopHeader({ title }: HeaderProps) {
  const { texts } = useI18n();
  const displayTitle = title || texts.header.title;

  return (
    <header className="sticky top-0 z-40 hidden md:block border-b border-black/10 dark:border-white/15 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-12 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-tight">{displayTitle}</h1>
          <nav>
            <NavItems layout="horizontal" />
          </nav>
        </div>
      </div>
    </header>
  );
}
