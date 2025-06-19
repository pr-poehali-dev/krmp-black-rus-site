import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const AdminPanel = () => {
  return (
    <div className="fixed top-20 right-4 z-50 w-80">
      <Card className="glass-card border-neon-green/50 neon-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-neon-green neon-text">
              Админ-панель
            </CardTitle>
            <Badge className="bg-neon-green text-dark-bg">ADMIN</Badge>
          </div>
          <CardDescription className="text-foreground/70">
            Панель управления сервером
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            className="w-full justify-start bg-neon-purple/20 border-neon-purple text-neon-purple hover:bg-neon-purple/30"
            variant="outline"
          >
            <Icon name="Users" className="w-4 h-4 mr-2" />
            Управление игроками
          </Button>

          <Button
            className="w-full justify-start bg-neon-blue/20 border-neon-blue text-neon-blue hover:bg-neon-blue/30"
            variant="outline"
          >
            <Icon name="Shield" className="w-4 h-4 mr-2" />
            Выдать привилегии
          </Button>

          <Button
            className="w-full justify-start bg-neon-pink/20 border-neon-pink text-neon-pink hover:bg-neon-pink/30"
            variant="outline"
          >
            <Icon name="Ban" className="w-4 h-4 mr-2" />
            Банлист
          </Button>

          <Button
            className="w-full justify-start bg-neon-green/20 border-neon-green text-neon-green hover:bg-neon-green/30"
            variant="outline"
          >
            <Icon name="Settings" className="w-4 h-4 mr-2" />
            Настройки сервера
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
