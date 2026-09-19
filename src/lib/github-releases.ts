import {
  GITHUB_OWNER,
  GITHUB_REPOSITORY,
  GITHUB_RELEASES_URL,
} from "@/config/site";

export interface ReleaseAssetInfo {
  name: string;
  downloadUrl: string;
  size: number;
  formattedSize: string;
}

export interface LatestRelease {
  version: string;
  publishedAt: string | null;
  formattedDate: string | null;
  windowsUrl: string | null;
  windowsSize: string | null;
  windowsAsset: ReleaseAssetInfo | null;
  macosUrl: string | null;
  macosSize: string | null;
  macosAsset: ReleaseAssetInfo | null;
  androidUrl: string | null;
  androidSize: string | null;
  androidAsset: ReleaseAssetInfo | null;
  releaseUrl: string;
  status: "success" | "no_releases" | "rate_limited" | "error";
  errorMessage?: string;
}

interface RawGitHubAsset {
  name?: string;
  browser_download_url?: string;
  size?: number;
}

interface RawGitHubRelease {
  tag_name?: string;
  name?: string;
  published_at?: string;
  html_url?: string;
  assets?: RawGitHubAsset[];
  message?: string;
}

/**
 * Format bytes to a human-readable MB / KB string
 */
export function formatBytes(bytes?: number): string {
  if (!bytes || bytes <= 0) return "0 MB";
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) {
    return `${mb.toFixed(1)} MB`;
  }
  const kb = bytes / 1024;
  return `${kb.toFixed(0)} KB`;
}

/**
 * Format ISO date string to readable "Month Year" (e.g., "September 2026")
 */
export function formatReleaseDate(isoDate?: string | null): string | null {
  if (!isoDate) return null;
  try {
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) return null;
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  } catch {
    return null;
  }
}

/**
 * Determines whether an asset filename belongs to Windows
 */
export function isWindowsAsset(fileName: string): boolean {
  const lower = fileName.toLowerCase();

  // Avoid matching Mac, Darwin, or Android files
  const isMac =
    lower.includes("mac") ||
    lower.includes("darwin") ||
    lower.includes("osx") ||
    lower.includes("apple");
  const isAndroid =
    lower.includes("android") ||
    lower.endsWith(".apk") ||
    lower.endsWith(".aab");
  if (isMac || isAndroid) return false;

  // Direct .exe or .msi is definitely Windows
  if (lower.endsWith(".exe") || lower.endsWith(".msi")) return true;

  // For .zip, require windows / win indicator
  const hasWinIndicator =
    lower.includes("windows") ||
    lower.includes("win64") ||
    lower.includes("win32") ||
    lower.includes("win_") ||
    lower.includes("-win-") ||
    lower.startsWith("win-");

  return lower.endsWith(".zip") && hasWinIndicator;
}

/**
 * Determines whether an asset filename belongs to macOS
 */
export function isMacAsset(fileName: string): boolean {
  const lower = fileName.toLowerCase();
  const isDarwin = lower.includes("darwin");

  // Avoid matching Windows or Android files
  const isWin =
    !isDarwin &&
    (lower.includes("windows") ||
      lower.includes("win64") ||
      lower.includes("win32") ||
      lower.includes("win_") ||
      lower.includes("-win-") ||
      lower.startsWith("win-") ||
      lower.endsWith(".exe") ||
      lower.endsWith(".msi"));

  const isAndroid =
    lower.includes("android") ||
    lower.endsWith(".apk") ||
    lower.endsWith(".aab");
  if (isWin || isAndroid) return false;

  const hasMacExt =
    lower.endsWith(".dmg") ||
    lower.endsWith(".pkg") ||
    lower.endsWith(".zip") ||
    lower.endsWith(".app.zip");

  if (!hasMacExt) return false;

  // Direct .dmg or .pkg is definitely macOS
  if (lower.endsWith(".dmg") || lower.endsWith(".pkg")) return true;

  // For .zip, require mac / darwin / osx indicator
  const hasMacIndicator =
    lower.includes("macos") ||
    lower.includes("darwin") ||
    lower.includes("mac") ||
    lower.includes("osx") ||
    lower.includes("apple");

  return hasMacIndicator;
}

/**
 * Determines whether an asset filename belongs to Android
 */
export function isAndroidAsset(fileName: string): boolean {
  const lower = fileName.toLowerCase();
  const hasAndroidExt = lower.endsWith(".apk") || lower.endsWith(".aab");
  if (hasAndroidExt) return true;

  const hasAndroidIndicator =
    lower.includes("android") || lower.includes("apk");
  return hasAndroidIndicator && (lower.endsWith(".zip") || hasAndroidExt);
}

/**
 * Parse raw GitHub Release API response into normalized LatestRelease object
 */
export function parseReleaseData(raw: RawGitHubRelease): LatestRelease {
  const version = raw.tag_name || raw.name || "Latest";
  const publishedAt = raw.published_at || null;
  const formattedDate = formatReleaseDate(publishedAt);
  const releaseUrl = raw.html_url || GITHUB_RELEASES_URL;

  const assets = raw.assets || [];

  let windowsAsset: ReleaseAssetInfo | null = null;
  let macosAsset: ReleaseAssetInfo | null = null;
  let androidAsset: ReleaseAssetInfo | null = null;

  for (const asset of assets) {
    const name = asset.name || "";
    const downloadUrl = asset.browser_download_url || "";
    const size = asset.size || 0;
    const formattedSize = formatBytes(size);

    if (!downloadUrl) continue;

    const assetInfo: ReleaseAssetInfo = {
      name,
      downloadUrl,
      size,
      formattedSize,
    };

    if (!windowsAsset && isWindowsAsset(name)) {
      windowsAsset = assetInfo;
    } else if (!macosAsset && isMacAsset(name)) {
      macosAsset = assetInfo;
    } else if (!androidAsset && isAndroidAsset(name)) {
      androidAsset = assetInfo;
    }
  }

  return {
    version,
    publishedAt,
    formattedDate,
    windowsUrl: windowsAsset ? windowsAsset.downloadUrl : null,
    windowsSize: windowsAsset ? windowsAsset.formattedSize : null,
    windowsAsset,
    macosUrl: macosAsset ? macosAsset.downloadUrl : null,
    macosSize: macosAsset ? macosAsset.formattedSize : null,
    macosAsset,
    androidUrl: androidAsset ? androidAsset.downloadUrl : null,
    androidSize: androidAsset ? androidAsset.formattedSize : null,
    androidAsset,
    releaseUrl,
    status: "success",
  };
}

/**
 * Fetch latest published release from GitHub API with Next.js ISR caching
 */
export async function fetchLatestRelease(): Promise<LatestRelease> {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPOSITORY}/releases/latest`;

  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "cv-builder-web",
      },
      next: {
        // Cache in Next.js Data Cache for 15 minutes (900 seconds)
        revalidate: 900,
      },
    });

    if (res.status === 404) {
      return {
        version: "v1.0.0",
        publishedAt: null,
        formattedDate: null,
        windowsUrl: null,
        windowsSize: null,
        windowsAsset: null,
        macosUrl: null,
        macosSize: null,
        macosAsset: null,
        androidUrl: null,
        androidSize: null,
        androidAsset: null,
        releaseUrl: GITHUB_RELEASES_URL,
        status: "no_releases",
        errorMessage: "No published release found yet.",
      };
    }

    if (res.status === 403) {
      return {
        version: "v1.0.0",
        publishedAt: null,
        formattedDate: null,
        windowsUrl: null,
        windowsSize: null,
        windowsAsset: null,
        macosUrl: null,
        macosSize: null,
        macosAsset: null,
        androidUrl: null,
        androidSize: null,
        androidAsset: null,
        releaseUrl: GITHUB_RELEASES_URL,
        status: "rate_limited",
        errorMessage: "GitHub API rate limit exceeded.",
      };
    }

    if (!res.ok) {
      return {
        version: "v1.0.0",
        publishedAt: null,
        formattedDate: null,
        windowsUrl: null,
        windowsSize: null,
        windowsAsset: null,
        macosUrl: null,
        macosSize: null,
        macosAsset: null,
        androidUrl: null,
        androidSize: null,
        androidAsset: null,
        releaseUrl: GITHUB_RELEASES_URL,
        status: "error",
        errorMessage: `GitHub API error: HTTP ${res.status}`,
      };
    }

    const data: RawGitHubRelease = await res.json();
    return parseReleaseData(data);
  } catch (error) {
    return {
      version: "v1.0.0",
      publishedAt: null,
      formattedDate: null,
      windowsUrl: null,
      windowsSize: null,
      windowsAsset: null,
      macosUrl: null,
      macosSize: null,
      macosAsset: null,
      androidUrl: null,
      androidSize: null,
      androidAsset: null,
      releaseUrl: GITHUB_RELEASES_URL,
      status: "error",
      errorMessage:
        error instanceof Error ? error.message : "Failed to fetch release",
    };
  }
}
