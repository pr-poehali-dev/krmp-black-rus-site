import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AdminPanel />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
