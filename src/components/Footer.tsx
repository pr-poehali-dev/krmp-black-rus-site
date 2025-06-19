import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="glass-card border-t border-dark-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-neon-green rounded flex items-center justify-center">
                <span className="text-dark-bg font-bold">BR</span>
              </div>
              <span className="text-xl font-rubik font-bold text-neon-green">
                Black Rus
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Легендарный CRMP сервер с 2019 года
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Игра</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-neon-green transition-colors">
                  Правила
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-green transition-colors">
                  Гайды
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-green transition-colors">
                  Команды
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Сообщество</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-neon-purple transition-colors"
                >
                  Помощь
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neon-purple transition-colors"
                >
                  Тех. поддержка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-neon-purple transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-dark-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Black Rus CRMP. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Icon name="Heart" className="w-4 h-4 text-neon-pink" />
            <span className="text-sm text-muted-foreground">
              Сделано с любовью к игре
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
