import baseTexts, { type Texts } from "@/content/texts";

export type Locale = "en" | "es";

// Spanish translations (example). Extend as needed.
export const esTexts: Texts = {
  app: { name: "AC UI" },
  header: {
    menuLabel: "Menú",
    nav: { home: "Inicio", about: "Acerca de", contact: "Contacto" },
  },
  home: {
    title: "Características Clave",
    card: { title: "Título", text: "hola" },
  },
  footer: { versionPrefix: "v" },
};

export const dictionaries: Record<Locale, Texts> = {
  en: baseTexts,
  es: esTexts,
};

export function getTexts(locale: Locale = "en"): Texts {
  return dictionaries[locale] ?? baseTexts;
}

