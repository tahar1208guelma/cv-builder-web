"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Briefcase, BookOpen, CheckCircle2 } from "lucide-react";

export function AudienceSection() {
  const { t } = useLanguage();

  const audienceIcons = [GraduationCap, Briefcase, BookOpen];

  return (
    <section className="py-20 sm:py-28 bg-slate-950/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>{t.audience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.audience.title}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.audience.subtitle}
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.audience.roles.map((role, idx) => {
            const Icon = audienceIcons[idx % audienceIcons.length];
            return (
              <div
                key={idx}
                className="relative rounded-2xl p-7 bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {role.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {role.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-800/80 space-y-2.5">
                  {role.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
