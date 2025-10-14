"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { getTexts, type Locale } from "./dictionaries";
import type { Texts } from "@/content/texts";

type I18nContextValue = {
  locale: Locale;
  texts: Texts;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  initialLocale = "en",
  children,
}: {
  initialLocale?: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const texts = useMemo(() => getTexts(locale), [locale]);

  const value = useMemo(() => ({ locale, texts, setLocale }), [locale, texts]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

