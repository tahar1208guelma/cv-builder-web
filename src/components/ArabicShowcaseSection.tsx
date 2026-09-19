"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  AlignRight,
  Type,
  Languages,
  BookOpenCheck,
  CheckCircle2,
  Sparkles,
  Download,
} from "lucide-react";

export function ArabicShowcaseSection() {
  const { t } = useLanguage();

  const showcaseIcons = [
    AlignRight,
    Type,
    Languages,
    BookOpenCheck,
  ];

  return (
    <section id="arabic-support" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Glow decorative circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.arabicShowcase.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.arabicShowcase.title}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.arabicShowcase.subtitle}
          </p>
        </div>

        {/* Two-Column Grid: Architecture Points vs Authentic Arabic Resume Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 4 Architecture Points */}
          <div className="lg:col-span-6 space-y-6">
            {t.arabicShowcase.points.map((point, idx) => {
              const Icon = showcaseIcons[idx % showcaseIcons.length];
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Authentic Arabic CV Interactive Card */}
          <div className="lg:col-span-6">
            <div
              dir="rtl"
              className="relative rounded-2xl bg-white text-slate-900 p-6 sm:p-8 shadow-2xl border border-slate-200 font-cairo text-right"
            >
              {/* Badge on Card */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  دعم أصيل RTL
                </span>
              </div>

              {/* CV Header */}
              <div className="border-b border-slate-200 pb-5 mb-5">
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                  {t.arabicShowcase.sampleName}
                </h4>
                <p className="text-emerald-700 font-bold text-sm mt-1">
                  {t.arabicShowcase.sampleRole}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mt-3">
                  {t.arabicShowcase.sampleSummary}
                </p>
              </div>

              {/* Experience Section */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3 pb-1 border-b-2 border-emerald-600">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    {t.arabicShowcase.sampleExperienceTitle}
                  </h5>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">
                      {t.arabicShowcase.samplePosition}
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">
                      2021 — الآن
                    </span>
                  </div>
                  <div className="text-xs font-medium text-emerald-700 mb-2">
                    {t.arabicShowcase.sampleCompany}
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>إدارة وتطوير الحلول السحابية الموزعة وفق معايير الأمان ISO 27001.</li>
                    <li>قيادة فريق تقني من 10 مهندسين لتحسين زمن استجابة واجهات التطبيقات.</li>
                    <li>أتمتة خطوط النشر المستمر (CI/CD) وتقليص زمن الإطلاق بنسبة 40%.</li>
                  </ul>
                </div>
              </div>

              {/* Skills Tags in Arabic */}
              <div>
                <div className="flex items-center gap-2 mb-2 pb-1 border-b-2 border-emerald-600">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    المهارات والشهادات
                  </h5>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "الحوسبة السحابية AWS",
                    "إدارة النظم Kubernetes",
                    "هندسة البرمجيات",
                    "شهادة PMP المعتمدة",
                    "أمان الشبكات المؤسسية",
                  ].map((s, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-semibold bg-emerald-50 text-emerald-900 rounded-md border border-emerald-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>نموذج أصيل بخط Cairo ومعايير A4</span>
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <Download className="w-3.5 h-3.5" /> تصدير PDF مباشر
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
