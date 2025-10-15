"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import baseTexts, { type Texts } from "@/content/texts";
import enBundle from './locales/en.json';
import esBundle from './locales/es.json';

export type Locale = "en" | "es";

type Messages = Record<string, any>;

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  texts: Texts;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const bundles: Record<Locale, Messages> = {
  en: enBundle as Messages,
  es: esBundle as Messages,
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "es"; // default SSR
    return (localStorage.getItem("locale") as Locale) || "es";
  });
  const initialMessages = bundles[(typeof window === 'undefined' ? 'es' : (localStorage.getItem('locale') as Locale) || 'es')];
  const [messages, setMessages] = useState<Messages>(initialMessages);
  const [texts, setTexts] = useState<Texts>(baseTexts);

  useEffect(() => {
    const m = bundles[locale];
    setMessages(m);
    const merged: Texts = {
      app: m.app ?? baseTexts.app,
      header: m.header ?? baseTexts.header,
      home: m.home ?? baseTexts.home,
      footer: m.footer ?? baseTexts.footer,
    };
    setTexts(merged);
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") localStorage.setItem("locale", l);
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      const template = messages[key] ?? key;
      if (!params) return template;
      return Object.entries(params).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)), template);
    },
    [messages]
  );

  const value = useMemo<I18nContextValue>(() => ({ locale, setLocale, t, texts }), [locale, setLocale, t, texts]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
