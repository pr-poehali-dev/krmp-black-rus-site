import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-dark-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-neon-green rounded-lg flex items-center justify-center animate-neon-pulse">
              <span className="text-dark-bg font-bold text-xl">BR</span>
            </div>
            <span className="text-2xl font-rubik font-bold text-neon-green neon-text">
              Black Rus
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-foreground hover:text-neon-green transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-foreground hover:text-neon-blue transition-colors"
            >
              Донат
            </a>
            <a
              href="#"
              className="text-foreground hover:text-neon-purple transition-colors"
            >
              Форум
            </a>
            <a
              href="#"
              className="text-foreground hover:text-neon-pink transition-colors"
            >
              Загрузки
            </a>
          </nav>

          <Button className="bg-neon-green text-dark-bg hover:bg-neon-green/80 neon-border border-neon-green">
            <Icon name="Play" className="w-4 h-4 mr-2" />
            Играть
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
