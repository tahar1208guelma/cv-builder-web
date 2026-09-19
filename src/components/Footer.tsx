"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FileText, ShieldCheck, Globe } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { GITHUB_URL, WINDOWS_DOWNLOAD_URL, ANDROID_DOWNLOAD_URL, MACOS_DOWNLOAD_URL, SUPPORT_URL } from "@/config/site";

export function Footer() {
  const { t, locale, setLocale } = useLanguage();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <FileText className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {t.nav.brand}
              </span>
            </a>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{t.footer.privacyNotice}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              {t.footer.linksTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#arabic-support" className="hover:text-white transition-colors">
                  {t.nav.arabic}
                </a>
              </li>
              <li>
                <a href="#templates" className="hover:text-white transition-colors">
                  {t.nav.templates}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Platforms */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              {t.footer.platformsTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href={WINDOWS_DOWNLOAD_URL} className="hover:text-white transition-colors">
                  Windows 64-bit (.zip)
                </a>
              </li>
              <li>
                <a href={ANDROID_DOWNLOAD_URL} className="hover:text-white transition-colors">
                  Android (.apk)
                </a>
              </li>
              <li>
                <a href={MACOS_DOWNLOAD_URL} className="hover:text-white transition-colors">
                  macOS Silicon &amp; Intel (.zip)
                </a>
              </li>
              <li>
                <a href="#download" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  {t.downloads.title} &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Open Source & Community */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              {t.footer.openSourceTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/releases`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Release Notes
                </a>
              </li>
              <li>
                <a
                  href={`${GITHUB_URL}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Report an Issue
                </a>
              </li>
              <li>
                <a
                  href={SUPPORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                >
                  Support the Project
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Language Switches */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {t.nav.brand}. {t.footer.rights}
          </p>

          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <div className="flex items-center gap-1 bg-slate-900 rounded-lg p-1 border border-slate-800">
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                  locale === "en"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale("fr")}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                  locale === "fr"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLocale("ar")}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                  locale === "ar"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
