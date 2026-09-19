import {
  isWindowsAsset,
  isMacAsset,
  isAndroidAsset,
  formatBytes,
  formatReleaseDate,
  parseReleaseData,
} from "../src/lib/github-releases";

let passed = 0;
let failed = 0;

function assert(condition: boolean, testName: string) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${testName}`);
    failed++;
  }
}

console.log("\n🧪 Running GitHub Releases Platform Detection Tests...\n");

// 1. Test Windows Asset Detection
assert(
  isWindowsAsset("cv-builder-windows-x64.exe"),
  "cv-builder-windows-x64.exe identified as Windows"
);
assert(
  isWindowsAsset("cv-builder-windows.zip"),
  "cv-builder-windows.zip identified as Windows"
);
assert(
  isWindowsAsset("cv-builder-windows-release.zip"),
  "cv-builder-windows-release.zip identified as Windows"
);
assert(
  isWindowsAsset("cv-builder-win64-setup.exe"),
  "cv-builder-win64-setup.exe identified as Windows"
);
assert(
  !isWindowsAsset("cv-builder-macos.zip"),
  "cv-builder-macos.zip NOT identified as Windows"
);
assert(
  !isWindowsAsset("app-release.apk"),
  "app-release.apk NOT identified as Windows"
);

// 2. Test macOS Asset Detection
assert(
  isMacAsset("CVBuilder-macos.dmg"),
  "CVBuilder-macos.dmg identified as macOS"
);
assert(
  isMacAsset("cv-builder-macos.zip"),
  "cv-builder-macos.zip identified as macOS"
);
assert(
  isMacAsset("cv-builder-macos-release.zip"),
  "cv-builder-macos-release.zip identified as macOS"
);
assert(
  isMacAsset("cv-builder-darwin-x64.pkg"),
  "cv-builder-darwin-x64.pkg identified as macOS"
);
assert(
  !isMacAsset("cv-builder-windows.zip"),
  "cv-builder-windows.zip NOT identified as macOS"
);
assert(
  !isMacAsset("app-release.apk"),
  "app-release.apk NOT identified as macOS"
);

// 3. Test Android Asset Detection
assert(
  isAndroidAsset("cv-builder-android.apk"),
  "cv-builder-android.apk identified as Android"
);
assert(
  isAndroidAsset("app-release.apk"),
  "app-release.apk identified as Android"
);
assert(
  isAndroidAsset("cv-builder-arm64-v8a-release.apk"),
  "cv-builder-arm64-v8a-release.apk identified as Android"
);
assert(
  !isAndroidAsset("cv-builder-windows.exe"),
  "cv-builder-windows.exe NOT identified as Android"
);
assert(
  !isAndroidAsset("cv-builder-macos.dmg"),
  "cv-builder-macos.dmg NOT identified as Android"
);

// 4. Test formatBytes
assert(formatBytes(18481152) === "17.6 MB", "18481152 bytes formatted as 17.6 MB");
assert(formatBytes(31247564) === "29.8 MB", "31247564 bytes formatted as 29.8 MB");

// 5. Test formatReleaseDate
assert(
  formatReleaseDate("2026-09-18T22:34:04Z")?.includes("2026") ?? false,
  "Release date correctly includes year 2026"
);

// 6. Test parseReleaseData with Full 3-Platform Release
const fullReleaseMock = {
  tag_name: "v1.0.2",
  name: "CV Builder 1.0.2",
  published_at: "2026-09-18T22:34:04Z",
  html_url: "https://github.com/tahar1208guelma/cv-builder/releases/tag/v1.0.2",
  assets: [
    {
      name: "cv-builder-windows-release.zip",
      browser_download_url: "https://github.com/.../cv-builder-windows-release.zip",
      size: 18481152,
    },
    {
      name: "cv-builder-macos-release.zip",
      browser_download_url: "https://github.com/.../cv-builder-macos-release.zip",
      size: 25165824,
    },
    {
      name: "app-release.apk",
      browser_download_url: "https://github.com/.../app-release.apk",
      size: 31247564,
    },
  ],
};

const parsedFull = parseReleaseData(fullReleaseMock);
assert(parsedFull.version === "v1.0.2", "Parsed version is v1.0.2");
assert(parsedFull.windowsUrl !== null, "Windows asset URL extracted");
assert(parsedFull.macosUrl !== null, "macOS asset URL extracted");
assert(parsedFull.androidUrl !== null, "Android asset URL extracted");
assert(parsedFull.windowsSize === "17.6 MB", "Windows size is 17.6 MB");

// 7. Test parseReleaseData with Missing Asset (e.g. Missing macOS)
const missingMacMock = {
  tag_name: "v1.0.3",
  published_at: "2026-09-19T10:00:00Z",
  html_url: "https://github.com/tahar1208guelma/cv-builder/releases/tag/v1.0.3",
  assets: [
    {
      name: "cv-builder-windows.zip",
      browser_download_url: "https://github.com/.../cv-builder-windows.zip",
      size: 18000000,
    },
    {
      name: "cv-builder-android.apk",
      browser_download_url: "https://github.com/.../cv-builder-android.apk",
      size: 30000000,
    },
  ],
};

const parsedMissing = parseReleaseData(missingMacMock);
assert(parsedMissing.version === "v1.0.3", "Parsed version is v1.0.3");
assert(parsedMissing.windowsUrl !== null, "Windows asset present");
assert(parsedMissing.macosUrl === null, "macOS asset correctly detected as null (Coming soon)");
assert(parsedMissing.androidUrl !== null, "Android asset present");

// 8. Test parseReleaseData with Empty Assets
const emptyMock = {
  tag_name: "v1.0.0",
  assets: [],
};
const parsedEmpty = parseReleaseData(emptyMock);
assert(parsedEmpty.windowsUrl === null, "Empty assets results in null windowsUrl");
assert(parsedEmpty.macosUrl === null, "Empty assets results in null macosUrl");
assert(parsedEmpty.androidUrl === null, "Empty assets results in null androidUrl");

console.log(`\nResults: ${passed} passed, ${failed} failed.\n`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log("🎉 All automated tests passed successfully!\n");
}
