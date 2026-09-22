"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ProductMockup } from "./ProductMockup";
import {
  Download,
  LayoutTemplate,
  ShieldCheck,
  UserX,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Play,
} from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { GITHUB_URL } from "@/config/site";

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden">
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[400px] sm:h-[550px] bg-gradient-to-tr from-indigo-600/20 via-blue-600/15 to-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag / Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs sm:text-sm font-medium shadow-inner shadow-indigo-500/10 backdrop-blur-md animate-in fade-in zoom-in duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.hero.badge}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            <span>{t.hero.titleStart}</span>
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
            <span>{t.hero.titleEnd}</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href="#download"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:from-indigo-500 hover:to-blue-500 rounded-xl shadow-xl shadow-indigo-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-5 h-5" />
              <span>{t.hero.downloadBtn}</span>
            </a>

            <a
              href="#promo-video"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 text-sm sm:text-base font-semibold text-emerald-300 hover:text-white bg-slate-900/90 hover:bg-emerald-950/50 border border-emerald-500/40 rounded-xl shadow-lg shadow-emerald-950/30 transition-all duration-200 hover:border-emerald-400 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span>{t.hero.watchPromoBtn}</span>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl shadow-lg transition-all duration-200 hover:border-slate-600"
            >
              <GithubIcon className="w-5 h-5 text-slate-300" />
              <span>{t.hero.githubBtn}</span>
            </a>

            <a
              href="#templates"
              className="inline-flex items-center gap-2 px-4 py-3.5 text-sm sm:text-base font-medium text-slate-300 hover:text-indigo-300 transition-colors"
            >
              <LayoutTemplate className="w-4 h-4" />
              <span>{t.hero.templatesBtn}</span>
              <Arrow className="w-4 h-4" />
            </a>
          </div>

          {/* 4 Key Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 max-w-4xl mx-auto text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-medium">{t.hero.stats.offline}</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-slate-300">
              <UserX className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="font-medium">{t.hero.stats.noAccount}</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-slate-300">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-medium">{t.hero.stats.arabicRtl}</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-slate-300">
              <LayoutTemplate className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="font-medium">{t.hero.stats.templatesCount}</span>
            </div>
          </div>
        </div>

        {/* Live Mockup Showcase */}
        <div className="mt-14 sm:mt-18">
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}
