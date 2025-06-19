import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-purple-900/20" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-rubik font-bold mb-6">
            <span className="text-neon-green neon-text">BLACK</span>
            <br />
            <span className="text-neon-blue neon-text">RUS</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Легендарный CRMP сервер. Реальная криминальная жизнь в виртуальном
            мире. Присоединяйся к тысячам игроков!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-neon-green text-dark-bg hover:bg-neon-green/80 neon-border border-neon-green text-lg px-8 py-4"
            >
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Начать играть
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 text-lg px-8 py-4"
            >
              <Icon name="Download" className="w-5 h-5 mr-2" />
              Скачать клиент
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="w-8 h-8 text-neon-green" />
      </div>
    </section>
  );
};

export default HeroSection;
