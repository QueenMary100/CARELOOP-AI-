import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CheckInQuestionProps {
  question: string;
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const CheckInQuestion = ({
  question,
  options,
  selectedOption,
  onSelect,
  questionNumber,
  totalQuestions,
}: CheckInQuestionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                i < questionNumber ? "bg-primary" : "bg-muted"
              )}
            />
          ))}
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-foreground leading-relaxed">
        {question}
      </h3>

      <div className="grid gap-3">
        {options.map((option, index) => (
          <motion.div
            key={option}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              variant={selectedOption === option ? "default" : "outline"}
              className={cn(
                "w-full justify-start text-left h-auto py-4 px-5",
                selectedOption === option && "ring-2 ring-primary/30"
              )}
              onClick={() => onSelect(option)}
            >
              {option}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
