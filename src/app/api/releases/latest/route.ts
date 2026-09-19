import { NextResponse } from "next/server";
import { fetchLatestRelease } from "@/lib/github-releases";

export const revalidate = 900; // 15 minutes ISR

export async function GET() {
  try {
    const release = await fetchLatestRelease();

    return NextResponse.json(release, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
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
        releaseUrl: "https://github.com/tahar1208guelma/cv-builder/releases",
        status: "error",
        errorMessage:
          error instanceof Error ? error.message : "Internal Server Error",
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        },
      }
    );
  }
}
