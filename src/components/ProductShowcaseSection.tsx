"use client";

import React, { useState } from "react";
import {
  Sparkles,
  FileEdit,
  Eye,
  FileDown,
  Languages,
  CheckCircle2,
  Sliders,
} from "lucide-react";

export function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"forms" | "preview" | "pdf" | "rtl">("forms");

  const tabs = [
    {
      id: "forms" as const,
      label: "Visual Data Entry",
      icon: FileEdit,
      headline: "Guided Ergonomic Forms with Auto-Save",
      description:
        "Effortlessly manage complex professional backgrounds. Add chronological work history, degrees, certificates, and grouped skill categories with intuitive plus/minus controls.",
      features: [
        "Structured chronological date pickers",
        "Dynamic reordering of experiences and projects",
        "Bullet-point formatting with action verbs",
        "Instant local auto-saving to SQLite",
      ],
    },
    {
      id: "preview" as const,
      label: "Real-Time Preview",
      icon: Eye,
      headline: "Pixel-Perfect Instant Synchronization",
      description:
        "Every keystroke is immediately reflected in the live preview canvas. No need to click 'compile' or wait for slow web server rendering.",
      features: [
        "Side-by-side desktop dual-pane workspace",
        "Zoom in and out with zero blurriness",
        "Dynamic layout reflow as sections expand",
        "A4 and US Letter dimensional accuracy",
      ],
    },
    {
      id: "pdf" as const,
      label: "Vector PDF Engine",
      icon: FileDown,
      headline: "Recruiter-Ready Vector PDFs with Embedded Fonts",
      description:
        "Generates clean, selectable, lightweight PDF documents that pass Applicant Tracking Systems (ATS) with 100% accuracy.",
      features: [
        "Selectable and searchable vector text",
        "Cairo & Inter typography embedded in the PDF",
        "Intelligent multi-page pagination rules",
        "High-density 300 DPI print quality",
      ],
    },
    {
      id: "rtl" as const,
      label: "Arabic RTL Engine",
      icon: Languages,
      headline: "Native Middle Eastern & North African Typography",
      description:
        "Native Arabic text shaping, right-to-left layout orientation, and proper punctuation positioning for professional Arabic resumes.",
      features: [
        "True right-to-left margin alignments",
        "Authentic Arabic cursive ligature shaping",
        "Bilingual profile switching without data loss",
        "Culturally aligned academic section terminology",
      ],
    },
  ];

  const current = tabs.find((t) => t.id === activeTab) || tabs[0];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Workflow &amp; Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for Speed, Accuracy, and Control
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            See how CV Builder transforms resume crafting into a seamless, distraction-free native experience.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <CurrentIcon className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                  {current.headline}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {current.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Display Mock for Current Tab */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-slate-950 border border-slate-800 p-6 shadow-inner space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-500 text-[11px]">
                  <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                    <Sliders className="w-3.5 h-3.5" /> Engine Architecture
                  </span>
                  <span>status: optimal</span>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[11px] mb-1">State Management &amp; Storage</div>
                    <div className="text-slate-200 font-semibold">SQLite On-Device Database • Zero Network Requests</div>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[11px] mb-1">PDF Compilation Layer</div>
                    <div className="text-slate-200 font-semibold">Native Direct PDF Canvas • Embedded Cairo &amp; Roboto Fonts</div>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[11px] mb-1">Accessibility &amp; Machine Parsing</div>
                    <div className="text-slate-200 font-semibold">ATS-Compliant Structure • Selectable Unicode Text Stream</div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Latency: &lt; 16ms</span>
                  <span className="text-emerald-400">100% Native Execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
