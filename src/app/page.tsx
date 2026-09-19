import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ArabicShowcaseSection } from "@/components/ArabicShowcaseSection";
import { TemplatesSection } from "@/components/TemplatesSection";
import { AudienceSection } from "@/components/AudienceSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ProductShowcaseSection } from "@/components/ProductShowcaseSection";
import { DownloadsSection } from "@/components/DownloadsSection";
import { FaqSection } from "@/components/FaqSection";
import { SupportSection } from "@/components/SupportSection";
import { GithubSection } from "@/components/GithubSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0a0e17] text-slate-100 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <ArabicShowcaseSection />
        <TemplatesSection />
        <AudienceSection />
        <HowItWorksSection />
        <ProductShowcaseSection />
        <DownloadsSection />
        <FaqSection />
        <SupportSection />
        <GithubSection />
      </main>
      <Footer />
    </div>
  );
}
