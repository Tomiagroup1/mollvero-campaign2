import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrustSection from "@/components/TrustSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustBar />
      <HowItWorksSection />
      <FeaturesSection />
      <TrustSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
