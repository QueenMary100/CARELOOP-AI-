import { motion } from "framer-motion";
import { TrendingUp, Calendar, Heart, Lightbulb } from "lucide-react";

export const WeeklySummary = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="p-6 rounded-2xl bg-card shadow-soft"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Weekly reflection
          </h3>
          <p className="text-sm text-muted-foreground">
            Insights from your past 7 days
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-muted/50">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-wellness-calm" />
            <span className="text-sm font-medium text-foreground">Overall trend</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your mood has been <span className="text-wellness-calm font-medium">gradually improving</span> this week. 
            You started the week feeling okay and ended on a high note. That's wonderful progress!
          </p>
        </div>

        <div className="p-4 rounded-xl bg-muted/50">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Pattern noticed</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You tend to feel better toward the end of the week. Weekends seem to be restorative for you—
            consider what elements of those days help you feel more at ease.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-muted/50">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Gentle reminder</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You've completed 6 out of 7 daily check-ins this week. Taking time to reflect on your 
            feelings is a meaningful step toward understanding yourself better. Keep it up!
          </p>
        </div>
      </div>
    </motion.div>
  );
};
