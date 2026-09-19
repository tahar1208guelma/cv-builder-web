"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Briefcase,
  Award,
  FolderPlus,
  Camera,
  Eye,
  FileText,
  Files,
  HardDrive,
  AlignRight,
  Palette,
  ArrowDownUp,
  Smartphone,
} from "lucide-react";

export function FeaturesSection() {
  const { t } = useLanguage();

  const featureIcons = [
    Briefcase,
    Award,
    FolderPlus,
    Camera,
    Eye,
    FileText,
    Files,
    HardDrive,
    AlignRight,
    Palette,
    ArrowDownUp,
    Smartphone,
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-slate-950/60 relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>{t.features.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.features.title}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* 12 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {t.features.items.map((item, idx) => {
            const Icon = featureIcons[idx % featureIcons.length];
            return (
              <div
                key={idx}
                className="group rounded-xl p-5 bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Feature #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  <span className="text-emerald-400/80 font-medium">Included</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
