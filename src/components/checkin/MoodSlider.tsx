import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MoodSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const moodLabels = [
  { value: 1, label: "Really struggling", emoji: "😔", color: "bg-wellness-care/20 border-wellness-care" },
  { value: 2, label: "Not great", emoji: "😕", color: "bg-wellness-caution/20 border-wellness-caution" },
  { value: 3, label: "Managing okay", emoji: "😐", color: "bg-muted border-border" },
  { value: 4, label: "Feeling good", emoji: "🙂", color: "bg-wellness-calm/10 border-wellness-calm/50" },
  { value: 5, label: "Really well", emoji: "😊", color: "bg-wellness-calm/20 border-wellness-calm" },
];

export const MoodSlider = ({ value, onChange }: MoodSliderProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <motion.div
          key={value}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-6xl mb-2"
        >
          {moodLabels[value - 1].emoji}
        </motion.div>
        <motion.p
          key={`label-${value}`}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-lg font-medium text-foreground"
        >
          {moodLabels[value - 1].label}
        </motion.p>
      </div>

      <div className="flex justify-between gap-2">
        {moodLabels.map((mood) => (
          <button
            key={mood.value}
            onClick={() => onChange(mood.value)}
            className={cn(
              "flex-1 py-3 px-2 rounded-xl border-2 transition-all duration-300",
              mood.color,
              value === mood.value
                ? "scale-105 shadow-card ring-2 ring-primary/30"
                : "opacity-60 hover:opacity-100 hover:scale-102"
            )}
          >
            <span className="text-2xl">{mood.emoji}</span>
          </button>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Tap how you're feeling right now
      </p>
    </div>
  );
};
