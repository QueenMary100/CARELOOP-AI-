import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data for the chart
const weeklyData = [
  { day: "Mon", mood: 3, label: "Managing okay" },
  { day: "Tue", mood: 4, label: "Feeling good" },
  { day: "Wed", mood: 3, label: "Managing okay" },
  { day: "Thu", mood: 2, label: "Not great" },
  { day: "Fri", mood: 3, label: "Managing okay" },
  { day: "Sat", mood: 4, label: "Feeling good" },
  { day: "Sun", mood: 5, label: "Really well" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 rounded-lg shadow-card border border-border">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-sm text-muted-foreground">{payload[0].payload.label}</p>
      </div>
    );
  }
  return null;
};

export const MoodChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-2xl bg-card shadow-soft"
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-1">
          Your mood this week
        </h3>
        <p className="text-sm text-muted-foreground">
          Track how your emotional wellbeing changes day by day
        </p>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weeklyData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis
              domain={[1, 5]}
              ticks={[1, 2, 3, 4, 5]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="mood"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{
                fill: "hsl(var(--primary))",
                strokeWidth: 2,
                stroke: "hsl(var(--background))",
                r: 5,
              }}
              activeDot={{
                fill: "hsl(var(--primary))",
                strokeWidth: 3,
                stroke: "hsl(var(--background))",
                r: 7,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex justify-between text-xs text-muted-foreground">
        <span>1 = Really struggling</span>
        <span>5 = Really well</span>
      </div>
    </motion.div>
  );
};
