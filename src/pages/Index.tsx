import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Black Rus - Лучший CRMP сервер | Играй сейчас!"
        description="Присоединяйся к Black Rus - самому популярному CRMP серверу! Уникальный геймплей, честная администрация, активное сообщество. Начни играть прямо сейчас!"
        keywords="Black Rus, CRMP сервер, GTA SAMP, ролевая игра, игровой сервер, многопользовательская игра, онлайн игра"
      />
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
