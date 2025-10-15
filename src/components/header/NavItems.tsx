"use client";

import React from "react";
import { useI18n } from "@/i18n";

type Props = {
  layout?: "horizontal" | "vertical";
  className?: string;
  onItemClick?: () => void;
};

export default function NavItems({ layout = "vertical", className, onItemClick }: Props) {
  const { texts } = useI18n();

  const items = [
    { key: "home", label: texts.header.nav.home, href: "#" },
    { key: "about", label: texts.header.nav.about, href: "#" },
    { key: "contact", label: texts.header.nav.contact, href: "#" },
  ];

  const isHorizontal = layout === "horizontal";

  const ulClass = isHorizontal
    ? ["flex items-center gap-6 text-sm", className].filter(Boolean).join(" ")
    : ["space-y-1 text-sm", className].filter(Boolean).join(" ");

  return (
    <ul className={ulClass}>
      {items.map((it) => (
        <li key={it.key}>
          <a
            href={it.href}
            onClick={onItemClick}
            className={
              isHorizontal
                ? "hover:underline"
                : "block rounded-md px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
            }
          >
            {it.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

