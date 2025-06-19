import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      icon: "Users",
      value: "15,247",
      label: "Активных игроков",
      color: "text-neon-green",
    },
    {
      icon: "Server",
      value: "24/7",
      label: "Онлайн сервер",
      color: "text-neon-blue",
    },
    {
      icon: "MapPin",
      value: "5",
      label: "Игровых городов",
      color: "text-neon-purple",
    },
    {
      icon: "Trophy",
      value: "2019",
      label: "Год основания",
      color: "text-neon-pink",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className={`${stat.color} mb-4 flex justify-center`}>
                <Icon name={stat.icon as any} className="w-8 h-8" />
              </div>
              <div
                className={`text-3xl font-bold ${stat.color} neon-text mb-2`}
              >
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
