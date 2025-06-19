import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Car",
      title: "Автопарк",
      description:
        "Более 200 уникальных автомобилей. От спорткаров до грузовиков.",
      color: "text-neon-green border-neon-green",
    },
    {
      icon: "Building",
      title: "Недвижимость",
      description: "Покупай дома, квартиры, бизнесы. Создавай свою империю.",
      color: "text-neon-blue border-neon-blue",
    },
    {
      icon: "Users",
      title: "Фракции",
      description: "Присоединяйся к мафии, полиции или создай свою банду.",
      color: "text-neon-purple border-neon-purple",
    },
    {
      icon: "Briefcase",
      title: "Работы",
      description: "20+ видов работ. От таксиста до криминального авторитета.",
      color: "text-neon-pink border-neon-pink",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-rubik font-bold mb-4">
            <span className="text-neon-green neon-text">Особенности</span>{" "}
            сервера
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Погрузись в мир криминальной России с уникальными возможностями
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card p-6 hover:scale-105 transition-all duration-300 border ${feature.color.split(" ")[1]} hover:shadow-lg`}
            >
              <div className={`${feature.color.split(" ")[0]} mb-4`}>
                <Icon name={feature.icon as any} className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
