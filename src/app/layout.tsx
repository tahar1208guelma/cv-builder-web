import type { Metadata, Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import "@/styles/globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SITE_NAME, SITE_DESCRIPTION } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Native Offline Multilingual Resume Builder with Arabic RTL`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "CV Builder",
    "Resume Builder",
    "Arabic CV",
    "سيرة ذاتية بالعربية",
    "صانع السيرة الذاتية",
    "RTL Resume",
    "ATS Resume",
    "Offline CV Builder",
    "Desktop CV Maker",
    "Vector PDF Resume",
    "Open Source CV",
  ],
  authors: [{ name: "CV Builder Team" }],
  creator: "CV Builder Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_AR", "fr_FR"],
    title: `${SITE_NAME} — Native Offline Resume Builder`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Native Offline Resume Builder`,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e17",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${cairo.variable} dark`}>
      <body className="min-h-screen bg-[#0a0e17] text-slate-100 antialiased font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
