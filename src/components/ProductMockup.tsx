"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  FileText,
  Download,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Layers,
  Globe2,
  ZoomIn,
  Printer,
} from "lucide-react";

export function ProductMockup() {
  const { t } = useLanguage();
  const [mockupLang, setMockupLang] = useState<"en" | "ar">("ar");

  const isMockupArabic = mockupLang === "ar";

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-2xl border border-slate-700/70 bg-slate-900/90 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl overflow-hidden">
      {/* App Window Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-4 py-3">
        {/* Window controls & app title */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-400 ms-3">
            CV Builder v1.0.2 — [Executive_Resume.pdf]
          </span>
        </div>

        {/* Mockup Toolbar */}
        <div className="flex items-center gap-2">
          {/* Quick Mockup Language Switcher */}
          <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-700/60">
            <button
              type="button"
              onClick={() => setMockupLang("ar")}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                mockupLang === "ar"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              العربية (RTL)
            </button>
            <button
              type="button"
              onClick={() => setMockupLang("en")}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                mockupLang === "en"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              English
            </button>
          </div>

          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-950/60 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t.mockup.verifiedAts}</span>
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.mockup.downloadPdf}</span>
          </button>
        </div>
      </div>

      {/* App Workspace Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] bg-slate-950/60">
        {/* Left Editor Sidebar (Mockup) */}
        <div className="hidden md:block lg:col-span-4 border-e border-slate-800/80 bg-slate-900/40 p-4 space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span>Editor Sections</span>
            <span className="text-[10px] text-indigo-400">Auto-saved</span>
          </div>

          {/* Section Items */}
          <div className="space-y-1.5">
            {[
              {
                icon: FileText,
                name: isMockupArabic ? "البيانات الشخصية" : "Personal Details",
                completed: true,
                active: false,
              },
              {
                icon: Briefcase,
                name: isMockupArabic ? "الخبرات العملية" : "Work Experience",
                completed: true,
                active: true,
              },
              {
                icon: GraduationCap,
                name: isMockupArabic ? "المؤهلات العلمية" : "Education",
                completed: true,
                active: false,
              },
              {
                icon: Sparkles,
                name: isMockupArabic ? "المهارات والقدرات" : "Skills & Competencies",
                completed: true,
                active: false,
              },
              {
                icon: Globe2,
                name: isMockupArabic ? "اللغات" : "Languages",
                completed: true,
                active: false,
              },
              {
                icon: Layers,
                name: isMockupArabic ? "المشاريع والأبحاث" : "Projects & Publications",
                completed: true,
                active: false,
              },
            ].map((section, idx) => {
              const Icon = section.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-medium transition-all ${
                    section.active
                      ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/40"
                      : "text-slate-300 hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className={`w-4 h-4 ${
                        section.active ? "text-indigo-400" : "text-slate-500"
                      }`}
                    />
                    <span>{section.name}</span>
                  </div>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              );
            })}
          </div>

          {/* Active section quick preview field */}
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs space-y-2">
            <div className="flex items-center justify-between text-slate-400 font-medium">
              <span>{isMockupArabic ? "المنصب الحالي" : "Current Role"}</span>
              <span className="text-emerald-400 text-[10px]">Active</span>
            </div>
            <div className="text-slate-200 font-semibold truncate">
              {isMockupArabic
                ? "قائد فريق تطوير النظم السحابية"
                : "Lead Cloud Systems Engineer"}
            </div>
            <div className="text-slate-400 text-[11px] truncate">
              {isMockupArabic
                ? "شركة الاتصالات والحلول الرقمية • 2021 - حتى الآن"
                : "NextGen Cloud Solutions • 2021 - Present"}
            </div>
          </div>
        </div>

        {/* Center / Right Real-time Document Preview Canvas */}
        <div className="lg:col-span-8 p-4 sm:p-6 flex flex-col items-center justify-center bg-slate-900/20">
          {/* Document Canvas Sheet */}
          <div
            dir={isMockupArabic ? "rtl" : "ltr"}
            className={`w-full max-w-2xl bg-white text-slate-900 rounded-xl shadow-2xl p-6 sm:p-8 transition-all duration-300 border border-slate-200/80 ${
              isMockupArabic ? "font-cairo text-right" : "font-sans text-left"
            }`}
          >
            {/* CV Header */}
            <div className="border-b border-slate-200 pb-5 mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {isMockupArabic
                      ? "أحمد بن محمد القحطاني"
                      : "Ahmed M. Al-Qahtani"}
                  </h3>
                  <p className="text-indigo-600 font-semibold text-sm sm:text-base mt-0.5">
                    {isMockupArabic
                      ? "كبير مهندسي البرمجيات والحلول السحابية"
                      : "Senior Cloud & Software Solutions Architect"}
                  </p>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <p>ahmed.engineer@example.com</p>
                  <p>+966 50 123 4567</p>
                  <p>{isMockupArabic ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</p>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs text-slate-600 leading-relaxed mt-4 pt-3 border-t border-slate-100">
                {isMockupArabic
                  ? "مهندس نظم وحلول سحابية خبير يتمتع بأكثر من 8 سنوات من الخبرة في بناء وتوسيع البنى التحتية الموزعة، إدارة فرق هندسية تقنية، وضمان التوافق والأمان السيبراني للأنظمة المؤسسية."
                  : "Senior Cloud Architect with 8+ years of expertise in designing high-throughput distributed systems, leading agile cross-functional engineering teams, and optimizing mission-critical enterprise workloads."}
              </p>
            </div>

            {/* Experience Section */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-3 pb-1 border-b-2 border-indigo-600">
                <Briefcase className="w-4 h-4 text-indigo-600" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  {isMockupArabic ? "الخبرات المهنية" : "Work Experience"}
                </h4>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">
                      {isMockupArabic
                        ? "قائد فريق هندسة النظم السحابية"
                        : "Lead Cloud Infrastructure Architect"}
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">
                      2021 — {isMockupArabic ? "الآن" : "Present"}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-indigo-600 mb-1">
                    {isMockupArabic
                      ? "شركة الاتصالات وحلول التقنية • الرياض"
                      : "Telecom & Cloud Solutions Corp • Riyadh"}
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
                    <li>
                      {isMockupArabic
                        ? "قيادة إعادة تصميم البنية السحابية الموزعة مما أدى لتقليل تكاليف الاستضافة بنسبة 35%."
                        : "Led architecture migration to Kubernetes microservices, cutting cloud costs by 35%."}
                    </li>
                    <li>
                      {isMockupArabic
                        ? "إدارة فريق من 12 مهندس برمجيات ونظم ومراقبة الالتزام بمعايير الأداء 99.99%."
                        : "Mentored 12 engineers and maintained 99.99% SLA availability across critical services."}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills & Education Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2 pb-1 border-b-2 border-indigo-600">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    {isMockupArabic ? "المهارات التقنية" : "Key Skills"}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    "Kubernetes",
                    "AWS / Azure",
                    "Docker",
                    "Go & Python",
                    "CI/CD Pipelines",
                    "Microservices",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-700 rounded border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 pb-1 border-b-2 border-indigo-600">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    {isMockupArabic ? "التعليم" : "Education"}
                  </h4>
                </div>
                <div className="text-xs space-y-0.5 pt-1">
                  <div className="font-bold text-slate-900">
                    {isMockupArabic
                      ? "بكالوريوس هندسة البرمجيات"
                      : "B.S. in Software Engineering"}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {isMockupArabic
                      ? "جامعة الملك سعود • مرتبة الشرف الأولى"
                      : "King Saud University • First Class Honors"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note under preview */}
          <div className="flex items-center gap-4 mt-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Printer className="w-3 h-3 text-indigo-400" /> Vector 300 DPI A4
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ZoomIn className="w-3 h-3 text-indigo-400" /> 100% Crisp Scaling
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
