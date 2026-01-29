import { motion } from "framer-motion";
import { Flame, Heart, TrendingUp, Calendar } from "lucide-react";

const stats = [
  {
    icon: Flame,
    label: "Check-in streak",
    value: "6 days",
    description: "You're building a healthy habit",
    color: "text-wellness-caution",
    bgColor: "bg-wellness-caution/10",
  },
  {
    icon: Heart,
    label: "Average mood",
    value: "3.4",
    description: "Managing okay to feeling good",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    label: "This week vs last",
    value: "+0.5",
    description: "Your mood is improving",
    color: "text-wellness-calm",
    bgColor: "bg-wellness-calm/10",
  },
  {
    icon: Calendar,
    label: "Total check-ins",
    value: "23",
    description: "Since you started",
    color: "text-accent",
    bgColor: "bg-accent/20",
  },
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 rounded-2xl bg-card shadow-soft"
        >
          <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center mb-3`}>
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
          <p className="text-sm font-medium text-foreground mb-0.5">{stat.label}</p>
          <p className="text-xs text-muted-foreground">{stat.description}</p>
        </motion.div>
      ))}
    </div>
  );
};
