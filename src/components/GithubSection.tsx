"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Star, GitBranch, ShieldCheck, ExternalLink } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { GITHUB_URL } from "@/config/site";

export function GithubSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-slate-950/40 relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-slate-900/60 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-700 bg-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>{t.github.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.github.title}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.github.subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Audited CI/CD Workflows
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-4 h-4 text-indigo-400" />
                Active Development
              </span>
              <span>•</span>
              <span>MIT Licensed</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all duration-200 hover:border-slate-600 shadow-md"
            >
              <GithubIcon className="w-5 h-5" />
              <span>{t.github.viewRepo}</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href={`${GITHUB_URL}/stargazers`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-amber-300 bg-amber-950/30 hover:bg-amber-950/50 border border-amber-500/30 transition-all duration-200"
            >
              <Star className="w-4 h-4 fill-current text-amber-400" />
              <span>{t.github.starRepo}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
