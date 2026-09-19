export const SITE_NAME = "CV Builder";

export const SITE_DESCRIPTION =
  "A modern, native, offline-first CV and resume builder with professional multilingual support, native Arabic RTL layouts, live preview, and high-precision PDF export.";

export const SITE_TAGLINE =
  "Build beautiful, professional, ATS-friendly resumes offline with native Arabic RTL support.";

export const GITHUB_OWNER = "tahar1208guelma";
export const GITHUB_REPOSITORY = "cv-builder";

export const GITHUB_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPOSITORY}`;

export const GITHUB_WEB_URL = `https://github.com/${GITHUB_OWNER}/cv-builder-web`;

export const GITHUB_RELEASES_URL = `${GITHUB_URL}/releases`;

export const GITHUB_ACTIONS_URL = `${GITHUB_URL}/actions`;

export const SUPPORT_URL = "REPLACE_WITH_BUY_ME_A_COFFEE_URL";

// Live Verified CI/CD Artifact Runs
export const WINDOWS_CI_RUN_URL =
  "https://github.com/tahar1208guelma/cv-builder/actions/runs/35401731769";

export const ANDROID_CI_RUN_URL =
  "https://github.com/tahar1208guelma/cv-builder/actions/runs/35401731770";

export const MACOS_CI_RUN_URL =
  "https://github.com/tahar1208guelma/cv-builder/actions/runs/35401731758";

// Release Assets (Standard GitHub Release URLs)
export const WINDOWS_DOWNLOAD_URL =
  "https://github.com/tahar1208guelma/cv-builder/releases/download/v1.0.0/cv-builder-windows-release.zip";

export const MACOS_DOWNLOAD_URL =
  "https://github.com/tahar1208guelma/cv-builder/releases/download/v1.0.0/cv-builder-macos-release.zip";

export const ANDROID_DOWNLOAD_URL =
  "https://github.com/tahar1208guelma/cv-builder/releases/download/v1.0.0/app-release.apk";

export const APP_VERSION = "1.0.0";

export const PLATFORMS = [
  {
    id: "windows",
    name: "Windows",
    version: APP_VERSION,
    size: "17.6 MB",
    requirement: "Windows 10 / 11 (64-bit)",
    format: "cv-builder-windows-release.zip",
    downloadUrl: GITHUB_RELEASES_URL,
    directAssetUrl: WINDOWS_DOWNLOAD_URL,
    ciRunUrl: WINDOWS_CI_RUN_URL,
    recommended: true,
    highlight: "Native 64-bit Desktop App",
  },
  {
    id: "android",
    name: "Android",
    version: APP_VERSION,
    size: "29.8 MB",
    requirement: "Android 7.0 (Nougat) or higher",
    format: "app-release.apk",
    downloadUrl: GITHUB_RELEASES_URL,
    directAssetUrl: ANDROID_DOWNLOAD_URL,
    ciRunUrl: ANDROID_CI_RUN_URL,
    recommended: false,
    highlight: "Mobile & Tablet APK",
  },
  {
    id: "macos",
    name: "macOS",
    version: APP_VERSION,
    size: "24.0 MB",
    requirement: "macOS 11 (Big Sur) or higher (Apple Silicon & Intel)",
    format: "cv-builder-macos-release.zip",
    downloadUrl: GITHUB_RELEASES_URL,
    directAssetUrl: MACOS_DOWNLOAD_URL,
    ciRunUrl: MACOS_CI_RUN_URL,
    recommended: false,
    highlight: "Native Metal-Accelerated App",
  },
] as const;

export const TEMPLATES = [
  {
    id: "professional",
    name: "Professional",
    nameAr: "المهني",
    nameFr: "Professionnel",
    description: "Clean, structured, corporate layout ideal for executives and enterprise positions.",
    tier: "free",
    category: "Corporate & Management",
    accentColor: "#1e3a8a",
  },
  {
    id: "modern",
    name: "Modern",
    nameAr: "الحديث",
    nameFr: "Moderne",
    description: "Contemporary design with sleek typography and subtle visual accents.",
    tier: "free",
    category: "Tech & Creative",
    accentColor: "#0284c7",
  },
  {
    id: "academic",
    name: "Academic",
    nameAr: "الأكاديمي",
    nameFr: "Académique",
    description: "Detailed curriculum vitae formatted for researchers, educators, and scholars.",
    tier: "free",
    category: "Research & Higher Ed",
    accentColor: "#334155",
  },
  {
    id: "ats_friendly",
    name: "ATS-Friendly",
    nameAr: "متوافق مع أنظمة التوظيف",
    nameFr: "Optimisé ATS",
    description: "Single-column, machine-readable formatting strictly optimized for applicant tracking algorithms.",
    tier: "free",
    category: "High Volume Applications",
    accentColor: "#059669",
  },
  {
    id: "classic",
    name: "Classic",
    nameAr: "الكلاسيكي",
    nameFr: "Classique",
    description: "Timeless typographical elegance suitable for traditional industries and law.",
    tier: "free",
    category: "Traditional & Finance",
    accentColor: "#475569",
  },
  {
    id: "minimalist",
    name: "Minimalist",
    nameAr: "البسيط",
    nameFr: "Minimaliste",
    description: "Lightweight, distraction-free structure highlighting high-impact accomplishments.",
    tier: "free",
    category: "Design & Startups",
    accentColor: "#64748b",
  },
  {
    id: "executive",
    name: "Executive Two-Column",
    nameAr: "التنفيذي بعمودين",
    nameFr: "Exécutif Deux Colonnes",
    description: "High-density dual-column layout highlighting leadership, core competencies, and career milestones.",
    tier: "premium",
    category: "Senior Leadership & C-Suite",
    accentColor: "#7c3aed",
  },
] as const;
