
import Header from "../components/index/Header";
import Footer from "../components/index/Footer";
import HeroSection from "../components/index/HeroSection";
import AboutSection from "../components/index/AboutSection";
import ToolsSection from "../components/index/ToolsSection";
import TokenomicsSection from "../components/index/TokenomicsSection";
import RoadmapSection from "../components/index/RoadmapSection";
import CTASection from "../components/index/CTASection";

export default function Home() {
  return (
    <main className="text-white">
      <Header />

      <HeroSection />
      <AboutSection />
      <ToolsSection />
      <TokenomicsSection />
      <RoadmapSection />
      {/* <CTASection /> */}

      <Footer />
    </main>
  );
}
