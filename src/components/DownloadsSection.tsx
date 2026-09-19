"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PLATFORMS, GITHUB_URL } from "@/config/site";
import {
  Download,
  Monitor,
  Smartphone,
  Apple,
  CheckCircle2,
  HardDrive,
  Cpu,
  FileCode,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export function DownloadsSection() {
  const { t } = useLanguage();

  const getPlatformIcon = (id: string) => {
    switch (id) {
      case "windows":
        return Monitor;
      case "android":
        return Smartphone;
      case "macos":
        return Apple;
      default:
        return HardDrive;
    }
  };

  return (
    <section id="download" className="py-20 sm:py-32 bg-slate-950/60 relative border-t border-slate-800/80">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Download className="w-3.5 h-3.5" />
            <span>{t.downloads.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.downloads.title}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.downloads.subtitle}
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLATFORMS.map((platform) => {
            const Icon = getPlatformIcon(platform.id);
            const isRecommended = platform.recommended;

            return (
              <div
                key={platform.id}
                className={`relative rounded-2xl p-7 bg-slate-900/80 border transition-all duration-300 flex flex-col justify-between ${
                  isRecommended
                    ? "border-indigo-500/60 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-500/20"
                    : "border-slate-800 hover:border-slate-700 shadow-lg"
                }`}
              >
                {/* Recommended ribbon */}
                {isRecommended && (
                  <div className="absolute -top-3 end-6">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-600 text-white shadow-md">
                      <CheckCircle2 className="w-3 h-3" />
                      Recommended
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">
                        {platform.name}
                      </h3>
                      <p className="text-xs text-indigo-400 font-semibold">
                        {platform.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Specs list */}
                  <div className="space-y-3 py-4 border-y border-slate-800/80 text-xs text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Cpu className="w-3.5 h-3.5 text-slate-500" />
                        {t.downloads.requirements}
                      </span>
                      <span className="font-medium text-slate-200 text-right">
                        {platform.requirement}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <FileCode className="w-3.5 h-3.5 text-slate-500" />
                        {t.downloads.format}
                      </span>
                      <span className="font-mono text-slate-200">
                        {platform.format}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <HardDrive className="w-3.5 h-3.5 text-slate-500" />
                        {t.downloads.specs}
                      </span>
                      <span className="font-mono text-slate-200">
                        v{platform.version} ({platform.size})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Download CTA */}
                <div className="mt-8 space-y-2.5">
                  <a
                    href={platform.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                      isRecommended
                        ? "bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:from-indigo-500 hover:to-blue-500 text-white shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98]"
                        : "bg-slate-800 hover:bg-slate-700 text-white hover:border-slate-600 border border-slate-700"
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    <span>
                      {t.downloads.downloadBtn} {platform.name}
                    </span>
                  </a>

                  <a
                    href={platform.ciRunUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 text-indigo-400" />
                    <span>Direct CI Artifact ({platform.size})</span>
                  </a>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>Offline Standalone Binary • No Spyware</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification & Releases Note */}
        <div className="mt-12 p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.downloads.checksumNote}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`${GITHUB_URL}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              <span>GitHub Releases</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span>•</span>
            <a
              href={`${GITHUB_URL}/actions`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <span>CI/CD Pipelines</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
