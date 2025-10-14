"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "es";

type Messages = Record<string, string>;

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

async function loadMessages(locale: Locale): Promise<Messages> {
  switch (locale) {
    case "es":
      return (await import("./locales/es.json")).default as Messages;
    case "en":
    default:
      return (await import("./locales/en.json")).default as Messages;
  }
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "es"; // default SSR
    return (localStorage.getItem("locale") as Locale) || "es";
  });
  const [messages, setMessages] = useState<Messages>({});

  useEffect(() => {
    let mounted = true;
    loadMessages(locale).then((m) => {
      if (mounted) setMessages(m);
    });
    return () => {
      mounted = false;
    };
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

  const value = useMemo<I18nContextValue>(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

