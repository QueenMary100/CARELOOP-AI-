import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";

interface ReflectionInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const ReflectionInput = ({ value, onChange }: ReflectionInputProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
          Anything else on your mind?
        </h3>
        <p className="text-muted-foreground">
          This is your space to reflect. Write as much or as little as you'd like—or skip this entirely.
        </p>
      </div>

      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Today I noticed... / I've been feeling... / Something that helped me was..."
        className="min-h-[150px] resize-none rounded-xl border-2 border-muted focus:border-primary/50 bg-card text-foreground placeholder:text-muted-foreground/60"
      />

      <p className="text-xs text-muted-foreground text-center">
        Your reflection stays private and is only for you.
      </p>
    </motion.div>
  );
};
