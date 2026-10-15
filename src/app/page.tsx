import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { NearbySection } from '@/components/sections/NearbySection';
import { AppScreensSection } from '@/components/sections/AppScreensSection';
import { CentralizedSection } from '@/components/sections/CentralizedSection';
import { VendorSection } from '@/components/sections/VendorSection';
import { CommunitySection } from '@/components/sections/CommunitySection';
import { FaqSection } from '@/components/sections/FaqSection';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { VendorSignupSection } from '@/components/sections/VendorSignupSection';
import { jsonLd } from '@/lib/metadata';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main id="main">
        <HeroSection />
        <NearbySection />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CentralizedSection />
        <AppScreensSection />
        <VendorSection />
        {/* Example stories (TestimonialsSection) return after launch, with real reviews. */}
        <CommunitySection />
        <FaqSection />
        <DownloadSection />
        <VendorSignupSection />
      </main>

      <Footer />
    </>
  );
}
