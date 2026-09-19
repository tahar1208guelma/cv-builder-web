"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "@/i18n/en";
import { fr } from "@/i18n/fr";
import { ar } from "@/i18n/ar";

export type Locale = "en" | "fr" | "ar";

export type Translations = typeof en;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  isRTL: boolean;
}

const translationsMap: Record<Locale, Translations> = {
  en,
  fr,
  ar,
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: en,
  isRTL: false,
});

const STORAGE_KEY = "cv_builder_web_locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && (saved === "en" || saved === "fr" || saved === "ar")) {
        setLocaleState(saved);
        applyLocaleToHtml(saved);
      } else {
        const browserLang = navigator.language.slice(0, 2);
        if (browserLang === "ar") {
          setLocaleState("ar");
          applyLocaleToHtml("ar");
        } else if (browserLang === "fr") {
          setLocaleState("fr");
          applyLocaleToHtml("fr");
        } else {
          setLocaleState("en");
          applyLocaleToHtml("en");
        }
      }
    } catch {
      // localStorage may be disabled
      applyLocaleToHtml("en");
    }
  }, []);

  const applyLocaleToHtml = (loc: Locale) => {
    if (typeof document !== "undefined") {
      const isArabic = loc === "ar";
      document.documentElement.dir = isArabic ? "rtl" : "ltr";
      document.documentElement.lang = loc;
    }
  };

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    applyLocaleToHtml(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // Ignore localStorage error
    }
  };

  const isRTL = locale === "ar";
  const t = translationsMap[locale] || en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-cairo" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
