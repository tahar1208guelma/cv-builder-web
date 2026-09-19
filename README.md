# CV Builder — Product Landing Page & Download Portal

A modern, high-performance product landing page and download portal for **CV Builder**, a native offline-first multilingual resume application with first-class Arabic RTL support.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)
![React](https://img.shields.io/badge/React-19-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8.svg)
![HeroUI](https://img.shields.io/badge/HeroUI-v3-purple.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)

---

## 🌟 Features

- **Trilingual Internationalization & RTL**:
  - English (`en` — LTR)
  - French (`fr` — LTR)
  - Arabic (`ar` — RTL)
  - Seamless zero-reload switching with automatic `dir="rtl"` and `lang="ar"` application to the `<html>` root.
  - Automatic Google Font switching: **Cairo** for Arabic and **Inter** for Latin scripts.
- **Modern Tech Stack**:
  - Next.js 15 (App Router)
  - React 19
  - Tailwind CSS v4
  - HeroUI v3
  - Lucide Icons
  - TypeScript in Strict Mode
- **Zero Horizontal Overflow**:
  - Pixel-perfect responsiveness verified at 320px, 375px, 768px, 1024px, 1440px, and 1920px.
- **High-Fidelity Interactive App Mockup**:
  - Live interactive resume canvas simulation with real-time toggle between English and Arabic layouts.
- **Dedicated Product Sections**:
  - **Sticky Navbar**: Brand wordmark, smooth navigation, language dropdown selector, GitHub repo link, and download CTA.
  - **Hero Section**: Value proposition badge, headline, dual CTAs, key value metrics, and interactive mockup.
  - **Benefits**: 6 HeroUI cards highlighting privacy, vector PDF, offline operation, and templates.
  - **12 Feature Highlights**: Comprehensive grid with icons covering the entire Flutter application feature set.
  - **Specialized Arabic Showcase**: Technical architectural explanation and authentic right-to-left layout sample.
  - **Templates Showcase**: Interactive filtering (All, Free, Premium) across 7 templates.
  - **Target Audience**: Dedicated profiles for Students, Professionals, and Academics.
  - **How It Works**: 4-step guided progression.
  - **Product Showcase**: Interactive tabbed workflow architecture exploration.
  - **Platform Downloads**: Native packages for **Windows** (64-bit .zip), **Android** (.apk), and **macOS** (.zip) with system requirements and specs.
  - **FAQ Accordion**: 7 interactive collapsible items covering privacy, ATS compatibility, and platforms.
  - **Support the Project**: Non-intrusive "Buy Me a Coffee" CTA.
  - **GitHub / Open Source**: Open source transparency and repository links.
  - **Footer**: Multi-column navigation, privacy guarantee, and quick language switchers.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18.18.0` or later (tested on Node.js `v24.x`)
- npm `v9.x` or later

### Installation

```bash
# Clone the repository
git clone https://github.com/tahar1208guelma/cv-builder-web.git

# Navigate into the project folder
cd cv-builder-web

# Install dependencies
npm install
```

### Local Development Server

Run the development server on [http://localhost:3000](http://localhost:3000):

```bash
npm run dev
```

### Code Quality & Validation

```bash
# Run ESLint (0 warnings, 0 errors)
npm run lint

# Build production bundle with static optimization
npm run build
```

---

## ⚙️ Centralized Configuration

All external links, platform binaries, and metadata are centralized in [`src/config/site.ts`](src/config/site.ts):

| Variable | Description |
|---|---|
| `SITE_NAME` | Website name |
| `SITE_DESCRIPTION` | SEO description |
| `GITHUB_URL` | Flutter application GitHub repository |
| `SUPPORT_URL` | Buy Me a Coffee / Sponsor URL |
| `WINDOWS_DOWNLOAD_URL` | Latest Windows release artifact link |
| `MACOS_DOWNLOAD_URL` | Latest macOS release artifact link |
| `ANDROID_DOWNLOAD_URL` | Latest Android APK release artifact link |
| `PLATFORMS` | System requirements, file sizes, and release formats |
| `TEMPLATES` | Template definitions, categories, and tier levels |

---

## 🌐 Deploy to Vercel

This project is fully pre-configured for one-click deployment to [Vercel](https://vercel.com).

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Vercel Dashboard

1. Push this repository to GitHub.
2. Log in to [Vercel Dashboard](https://vercel.com).
3. Click **"Add New..."** &rarr; **"Project"**.
4. Import `cv-builder-web`.
5. Keep default build settings (`Framework: Next.js`, `Build Command: next build`).
6. Click **Deploy**.

---

## 📄 License

This project is licensed under the MIT License.
