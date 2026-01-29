import { motion } from "framer-motion";
import { Heart, Sun, AlertCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type RiskLevel = "low" | "medium" | "high";

interface AIFeedbackProps {
  riskLevel: RiskLevel;
  moodScore: number;
}

const feedbackContent = {
  low: {
    icon: Sun,
    iconColor: "text-wellness-calm",
    bgColor: "bg-wellness-calm/10",
    borderColor: "border-wellness-calm/30",
    title: "You seem to be doing well",
    message: `It's wonderful to see you in a good space today. Remember that taking time to check in with yourself—even when things feel okay—is a beautiful act of self-care. Keep nurturing the things that bring you peace and joy.`,
    suggestions: [
      "Continue the habits that support your wellbeing",
      "Consider sharing positivity with someone you care about",
      "Take a moment to appreciate what's going well",
    ],
  },
  medium: {
    icon: Heart,
    iconColor: "text-wellness-caution",
    bgColor: "bg-wellness-caution/10",
    borderColor: "border-wellness-caution/30",
    title: "It sounds like you're carrying some weight",
    message: `Thank you for being honest about how you're feeling. It's completely normal to have days when things feel heavier than usual. Stress is part of life, and acknowledging it is the first step toward taking care of yourself.`,
    suggestions: [
      "Try a short breathing exercise or gentle stretch",
      "Reach out to someone you trust, even just to talk",
      "Give yourself permission to take a break today",
      "Consider what might help lighten your load",
    ],
  },
  high: {
    icon: AlertCircle,
    iconColor: "text-wellness-care",
    bgColor: "bg-wellness-care/10",
    borderColor: "border-wellness-care/30",
    title: "We hear you. This sounds really hard.",
    message: `What you're feeling right now is valid and important. When things feel overwhelming, it can be difficult to see a way through—but you don't have to face this alone. Please consider reaching out to someone who can support you.`,
    suggestions: [
      "Talk to a trusted friend, family member, or mentor",
      "Consider speaking with a counselor or mental health professional",
      "Take things one small step at a time today",
      "Remember: asking for help is a sign of strength",
    ],
    resources: [
      { name: "International Crisis Lines", url: "https://findahelpline.com/" },
      { name: "Mental Health Resources", url: "https://www.who.int/health-topics/mental-health" },
    ],
  },
};

export const AIFeedback = ({ riskLevel, moodScore }: AIFeedbackProps) => {
  const content = feedbackContent[riskLevel];
  const Icon = content.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-6"
    >
      {/* Main feedback card */}
      <div
        className={cn(
          "p-6 sm:p-8 rounded-2xl border-2",
          content.bgColor,
          content.borderColor
        )}
      >
        <div className="flex items-start gap-4 mb-4">
          <div
            className={cn(
              "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
              content.bgColor
            )}
          >
            <Icon className={cn("w-6 h-6", content.iconColor)} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {content.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              Based on your check-in today
            </p>
          </div>
        </div>

        <p className="text-foreground/90 leading-relaxed mb-6">
          {content.message}
        </p>

        {/* Suggestions */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">
            Some gentle suggestions:
          </p>
          <ul className="space-y-2">
            {content.suggestions.map((suggestion, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3 text-foreground/80"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {suggestion}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Crisis resources for high risk */}
        {riskLevel === "high" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 pt-6 border-t border-wellness-care/20"
          >
            <p className="text-sm font-medium text-foreground mb-3">
              If you need immediate support:
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://findahelpline.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                International Crisis Lines
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.who.int/health-topics/mental-health"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                Mental Health Resources
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/dashboard" className="flex-1">
          <Button variant="default" className="w-full">
            View My Insights
          </Button>
        </Link>
        <Link to="/" className="flex-1">
          <Button variant="outline" className="w-full">
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-center text-muted-foreground">
        CARELOOP AI provides supportive insights, not medical advice. 
        If you're in crisis, please seek professional help immediately.
      </p>
    </motion.div>
  );
};
