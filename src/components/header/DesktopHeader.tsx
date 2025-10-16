"use client";

import SessionBtn from "@/features/sessionButton/sessionButton";
import { useI18n } from "@/i18n";
import Brand from "./Brand";
import NavItems from "./NavItems";

type HeaderProps = { title?: string };

export default function DesktopHeader({ title }: HeaderProps) {
  const { texts } = useI18n();
  const displayTitle = title || texts.header.title;

  return (
    <header className="sticky top-0 z-40 hidden md:block border-b border-black/10 dark:border-white/15 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-14 grid grid-cols-[auto_1fr_auto] items-center">
          <div className="justify-self-start">
            <Brand name={displayTitle} />
          </div>
          <nav className="justify-self-center text-gray-300">
            <NavItems layout="horizontal" />
          </nav>
          <div className="justify-self-end">
            <SessionBtn />
          </div>
        </div>
      </div>
    </header>
  );
}
