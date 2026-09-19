"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TEMPLATES } from "@/config/site";
import { LayoutTemplate, Check, Crown } from "lucide-react";

export function TemplatesSection() {
  const { t, locale } = useLanguage();
  const [filter, setFilter] = useState<"all" | "free" | "premium">("all");

  const filteredTemplates = TEMPLATES.filter((template) => {
    if (filter === "all") return true;
    return template.tier === filter;
  });

  return (
    <section id="templates" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <LayoutTemplate className="w-3.5 h-3.5" />
            <span>{t.templates.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.templates.title}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.templates.subtitle}
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "all"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {t.templates.filterAll} ({TEMPLATES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("free")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "free"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {t.templates.filterFree} ({TEMPLATES.filter((t) => t.tier === "free").length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("premium")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "premium"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {t.templates.filterPremium} ({TEMPLATES.filter((t) => t.tier === "premium").length})
            </button>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => {
            const isPremium = template.tier === "premium";
            const displayName =
              locale === "ar"
                ? template.nameAr
                : locale === "fr"
                ? template.nameFr
                : template.name;

            return (
              <div
                key={template.id}
                className={`group rounded-2xl p-5 bg-slate-900/60 hover:bg-slate-900 border transition-all duration-300 flex flex-col justify-between ${
                  isPremium
                    ? "border-amber-500/40 hover:border-amber-400/80 shadow-lg shadow-amber-500/5"
                    : "border-slate-800 hover:border-indigo-500/50 shadow-md"
                }`}
              >
                <div>
                  {/* Miniature Wireframe Preview of CV Sheet */}
                  <div className="w-full aspect-[4/5] rounded-xl bg-slate-950 border border-slate-800 p-4 mb-5 flex flex-col justify-between group-hover:border-slate-700 transition-colors relative overflow-hidden">
                    {/* Visual Layout Simulation */}
                    {template.id === "executive" ? (
                      // Two-column simulation
                      <div className="w-full h-full grid grid-cols-3 gap-2 opacity-80">
                        <div className="col-span-1 border-e border-slate-800 pe-2 space-y-2">
                          <div className="w-6 h-6 rounded-full bg-indigo-500/30" />
                          <div className="w-full h-1.5 bg-slate-800 rounded" />
                          <div className="w-3/4 h-1 bg-slate-800 rounded" />
                          <div className="w-full h-1 bg-slate-800 rounded" />
                        </div>
                        <div className="col-span-2 space-y-2">
                          <div className="w-3/4 h-2.5 bg-indigo-400/40 rounded" />
                          <div className="w-1/2 h-1.5 bg-slate-700 rounded" />
                          <div className="w-full h-1 bg-slate-800 rounded mt-3" />
                          <div className="w-full h-1 bg-slate-800 rounded" />
                          <div className="w-5/6 h-1 bg-slate-800 rounded" />
                        </div>
                      </div>
                    ) : template.id === "modern" ? (
                      // Modern simulation with colored top bar
                      <div className="w-full h-full space-y-2.5 opacity-80">
                        <div className="w-full h-3 rounded bg-sky-500/30" />
                        <div className="w-1/2 h-2 bg-slate-700 rounded" />
                        <div className="w-full h-1 bg-slate-800 rounded mt-3" />
                        <div className="w-4/5 h-1 bg-slate-800 rounded" />
                        <div className="w-3/4 h-1 bg-slate-800 rounded" />
                        <div className="w-full h-1 bg-slate-800 rounded" />
                      </div>
                    ) : template.id === "ats_friendly" ? (
                      // Strictly clean ATS single column
                      <div className="w-full h-full space-y-2 opacity-80">
                        <div className="w-2/3 h-2.5 bg-emerald-400/30 rounded mx-auto" />
                        <div className="w-1/2 h-1 bg-slate-800 rounded mx-auto" />
                        <div className="w-full h-0.5 bg-slate-800 rounded my-2" />
                        <div className="w-full h-1 bg-slate-800 rounded" />
                        <div className="w-5/6 h-1 bg-slate-800 rounded" />
                        <div className="w-3/4 h-1 bg-slate-800 rounded" />
                      </div>
                    ) : (
                      // Standard clean professional layout
                      <div className="w-full h-full space-y-2.5 opacity-80">
                        <div className="w-1/2 h-2.5 bg-indigo-500/30 rounded" />
                        <div className="w-1/3 h-1.5 bg-slate-700 rounded" />
                        <div className="w-full h-1 bg-slate-800 rounded mt-3" />
                        <div className="w-5/6 h-1 bg-slate-800 rounded" />
                        <div className="w-4/6 h-1 bg-slate-800 rounded" />
                        <div className="w-full h-1 bg-slate-800 rounded" />
                      </div>
                    )}

                    {/* Top Tier Tag */}
                    <div className="absolute top-3 end-3">
                      {isPremium ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                          <Crown className="w-3 h-3" />
                          {t.templates.premiumTag}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                          {t.templates.freeTag}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Template Meta */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: template.accentColor }}
                    />
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {template.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {displayName}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {template.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">
                    Format: A4 &amp; US Letter
                  </span>
                  <span className="text-indigo-400 font-semibold group-hover:underline">
                    Available in App
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
