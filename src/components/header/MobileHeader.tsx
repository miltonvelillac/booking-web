"use client";

import React, { useState } from "react";
import Brand from "./Brand";
import { useI18n } from "@/i18n";
import NavItems from "./NavItems";
import { navigateService } from "@/services/navigate/navigateService";
import SignUpBtn from "@/features/signUpBtn/signUpBtn";

type HeaderProps = { title?: string };

export default function MobileHeader({ title }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { texts } = useI18n();
  const displayTitle = title || texts.header.title;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-black/10 dark:border-white/15 bg-background/80 backdrop-blur md:hidden h-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-12">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className="cursor-pointer inline-flex items-center justify-center rounded-md h-9 w-9 border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M3.75 6.75h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Zm0 6h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Zm0 6h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Z" />
              </svg>
            </button>

            <div className="justify-self-center"><Brand name={displayTitle} /></div>

            <div className="justify-self-end" />
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-hidden />
          <div id="mobile-menu" className="absolute left-0 top-0 h-full w-72 max-w-[85vw] bg-background border-r border-black/10 dark:border-white/15 shadow-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium opacity-60">{texts.header.menuLabel}</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-md h-8 w-8 hover:bg-black/5 dark:hover:bg-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M6.225 4.811a.75.75 0 0 0-1.06 1.06L10.94 11.647l-5.773 5.776a.75.75 0 1 0 1.06 1.06l5.774-5.773 5.776 5.773a.75.75 0 0 0 1.06-1.06l-5.773-5.776 5.773-5.774a.75.75 0 1 0-1.06-1.06L11.713 10.59 6.225 5.1Z" />
                </svg>
              </button>
            </div>

            <nav className="mt-4">
              <NavItems layout="vertical" onItemClick={() => setOpen(false)} />
            </nav>

            <div className="mt-6">
              <SignUpBtn />
            </div>
          </div>
        </div>
      )}
    </>
  );
}








