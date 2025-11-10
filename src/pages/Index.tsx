import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ImpactSection } from "@/components/ImpactSection";
import { AboutSummarySection } from "@/components/AboutSummarySection";
import { WhyGoodForestsSection } from "@/components/WhyGoodForestsSection";
import { PartnersSummarySection } from "@/components/PartnersSummarySection";
import { OurWorkSection } from "@/components/OurWorkSection";
import { ResourcesSummarySection } from "@/components/ResourcesSummarySection";
import { WorkWithUsSection } from "@/components/WorkWithUsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroductionSection />
      <ProgramsSection />
      <ImpactSection />
      <AboutSummarySection />
      <WhyGoodForestsSection />
      <PartnersSummarySection />
      <OurWorkSection />
      <ResourcesSummarySection />
      <WorkWithUsSection />
      <Footer />
    </div>
  );
};

export default Index;
