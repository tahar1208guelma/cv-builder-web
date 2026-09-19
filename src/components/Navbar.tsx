"use client";

import React, { useState, useEffect } from "react";
import { useLanguage, Locale } from "@/context/LanguageContext";
import {
  FileText,
  Download,
  Globe,
  Menu,
  X,
  Check,
  ChevronDown,
} from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { GITHUB_URL } from "@/config/site";

export function Navbar() {
  const { t, locale, setLocale, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages: { code: Locale; label: string; nativeName: string }[] = [
    { code: "en", label: "English", nativeName: "English" },
    { code: "fr", label: "Français", nativeName: "Français" },
    { code: "ar", label: "العربية", nativeName: "العربية (RTL)" },
  ];

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  const navLinks = [
    { href: "#features", label: t.nav.features },
    { href: "#arabic-support", label: t.nav.arabic },
    { href: "#templates", label: t.nav.templates },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#download", label: t.nav.download },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
          : "bg-slate-950/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand / Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 p-0.5 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <FileText className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform duration-200" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight leading-none group-hover:text-indigo-200 transition-colors">
                {t.nav.brand}
              </span>
              <span className="text-[11px] text-slate-400 font-medium tracking-wider uppercase mt-1">
                Offline &amp; Multiplatform
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Switcher, GitHub, Download CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors shadow-sm"
                aria-label={t.nav.switchLanguage}
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>{currentLang.nativeName}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200" />
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div
                    className={`absolute ${
                      isRTL ? "left-0" : "right-0"
                    } mt-2 w-48 rounded-xl bg-slate-900 border border-slate-700/80 shadow-2xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150`}
                  >
                    <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800">
                      {t.nav.switchLanguage}
                    </div>
                    {languages.map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => {
                          setLocale(item.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2 text-xs text-left transition-colors ${
                          locale === item.code
                            ? "bg-indigo-600/20 text-indigo-300 font-semibold"
                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{item.nativeName}</span>
                          <span className="text-[10px] text-slate-500">
                            ({item.label})
                          </span>
                        </span>
                        {locale === item.code && (
                          <Check className="w-3.5 h-3.5 text-indigo-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* GitHub Repo Link */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg border border-transparent hover:border-slate-700/60 transition-colors"
              title="GitHub Repository"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Download CTA Button */}
            <a
              href="#download"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-lg shadow-md shadow-indigo-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.nav.downloadNow}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick mobile language toggle */}
            <button
              type="button"
              onClick={() => {
                const next: Record<Locale, Locale> = {
                  en: "fr",
                  fr: "ar",
                  ar: "en",
                };
                setLocale(next[locale]);
              }}
              className="px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/70 rounded-md sm:hidden"
            >
              {locale.toUpperCase()}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/98 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3">
                {t.nav.switchLanguage}
              </div>
              <div className="grid grid-cols-3 gap-2 px-3">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLocale(item.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-2 px-2 text-xs font-medium rounded-lg text-center border transition-colors ${
                      locale === item.code
                        ? "bg-indigo-600/30 text-indigo-300 border-indigo-500/50"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    {item.nativeName}
                  </button>
                ))}
              </div>

              <div className="pt-2 px-3 flex flex-col gap-2">
                <a
                  href="#download"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.nav.downloadNow}</span>
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{t.nav.github}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
