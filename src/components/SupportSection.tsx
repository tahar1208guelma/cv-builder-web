"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Coffee, ExternalLink } from "lucide-react";
import { SUPPORT_URL } from "@/config/site";

export function SupportSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-indigo-950/40 via-slate-900/60 to-slate-900/80 border border-indigo-500/30 shadow-2xl overflow-hidden text-center">
          {/* Decorative glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Coffee className="w-3.5 h-3.5" />
            <span>{t.support.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            {t.support.title}
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {t.support.subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Coffee className="w-5 h-5 text-slate-950 fill-current" />
              <span>{t.support.buttonText}</span>
              <ExternalLink className="w-4 h-4 text-slate-900" />
            </a>
          </div>

          <p className="mt-5 text-xs text-slate-400 max-w-md mx-auto">
            {t.support.note}
          </p>
        </div>
      </div>
    </section>
  );
}
