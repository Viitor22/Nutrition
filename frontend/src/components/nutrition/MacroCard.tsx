import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";

interface MacroCardProps {
  title: string;
  current: number;
  goal: number;
  unit: string;
  icon: LucideIcon;
  color: string;
}

const MacroCard = ({ title, current, goal, unit, icon: Icon, color }: MacroCardProps) => {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <Card className="hover:shadow-card transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
          <div className={`p-2 rounded-lg ${color}`}>
            <Icon className="h-4 w-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-foreground">{current}</span>
          <span className="text-sm text-muted-foreground">/ {goal} {unit}</span>
        </div>
        <Progress value={percentage} className="h-2" />
      </CardContent>
    </Card>
  );
};

export default MacroCard;
