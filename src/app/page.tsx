import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { CentralizedSection } from '@/components/sections/CentralizedSection';
import { VendorSection } from '@/components/sections/VendorSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
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
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CentralizedSection />
        <VendorSection />
        <TestimonialsSection />
        <CommunitySection />
        <FaqSection />
        <DownloadSection />
        <VendorSignupSection />
      </main>

      <Footer />
    </>
  );
}
