import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { MoodSlider } from "@/components/checkin/MoodSlider";
import { CheckInQuestion } from "@/components/checkin/CheckInQuestion";
import { ReflectionInput } from "@/components/checkin/ReflectionInput";
import { AIFeedback } from "@/components/checkin/AIFeedback";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

const questions = [
  {
    question: "How would you describe your energy levels today?",
    options: [
      "Feeling energized and motivated",
      "Steady—not too high, not too low",
      "A bit tired, but managing",
      "Running on empty",
    ],
  },
  {
    question: "Have you been able to take breaks or rest when needed?",
    options: [
      "Yes, I've had time to recharge",
      "Somewhat—a few short breaks",
      "Not really, it's been non-stop",
      "I can't remember the last time I rested",
    ],
  },
  {
    question: "How connected do you feel to the people around you?",
    options: [
      "Very connected—I feel supported",
      "Moderately—I have some support",
      "A bit isolated lately",
      "Very disconnected or lonely",
    ],
  },
  {
    question: "How are you handling stress or challenges right now?",
    options: [
      "Coping well—I feel in control",
      "Managing okay, with some difficulty",
      "Struggling more than usual",
      "Feeling overwhelmed",
    ],
  },
];

type Step = "mood" | "questions" | "reflection" | "feedback";

const CheckIn = () => {
  const [step, setStep] = useState<Step>("mood");
  const [moodScore, setMoodScore] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [reflection, setReflection] = useState("");

  const handleMoodNext = () => {
    setStep("questions");
  };

  const handleQuestionAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleQuestionNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("reflection");
    }
  };

  const handleQuestionBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      setStep("mood");
    }
  };

  const handleReflectionSubmit = () => {
    setStep("feedback");
  };

  // Calculate risk level based on mood and answers
  const calculateRiskLevel = (): "low" | "medium" | "high" => {
    // Simple algorithm: lower mood and more negative answers = higher risk
    const negativeAnswerCount = answers.filter(
      (a) => a?.includes("empty") || a?.includes("overwhelmed") || a?.includes("disconnected") || a?.includes("can't remember")
    ).length;

    if (moodScore <= 2 || negativeAnswerCount >= 3) return "high";
    if (moodScore <= 3 || negativeAnswerCount >= 1) return "medium";
    return "low";
  };

  return (
    <div className="min-h-screen gradient-sunrise">
      <Navbar />
      <main className="container max-w-2xl px-4 py-8 sm:py-12">
        <AnimatePresence mode="wait">
          {step === "mood" && (
            <motion.div
              key="mood"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-card rounded-3xl p-6 sm:p-8 shadow-card"
            >
              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  How are you feeling right now?
                </h1>
                <p className="text-muted-foreground">
                  There's no right or wrong answer—just be honest with yourself.
                </p>
              </div>

              <MoodSlider value={moodScore} onChange={setMoodScore} />

              <div className="mt-8 flex justify-end">
                <Button variant="hero" onClick={handleMoodNext}>
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === "questions" && (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-card rounded-3xl p-6 sm:p-8 shadow-card"
            >
              <CheckInQuestion
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                selectedOption={answers[currentQuestion]}
                onSelect={handleQuestionAnswer}
                questionNumber={currentQuestion + 1}
                totalQuestions={questions.length}
              />

              <div className="mt-8 flex justify-between">
                <Button variant="ghost" onClick={handleQuestionBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button
                  variant="hero"
                  onClick={handleQuestionNext}
                  disabled={!answers[currentQuestion]}
                >
                  {currentQuestion < questions.length - 1 ? "Next" : "Almost done"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === "reflection" && (
            <motion.div
              key="reflection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-card rounded-3xl p-6 sm:p-8 shadow-card"
            >
              <ReflectionInput value={reflection} onChange={setReflection} />

              <div className="mt-8 flex justify-between">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setCurrentQuestion(questions.length - 1);
                    setStep("questions");
                  }}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button variant="hero" onClick={handleReflectionSubmit}>
                  Complete Check-In
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === "feedback" && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  Thank you for checking in
                </h1>
                <p className="text-muted-foreground">
                  Here's some personalized feedback based on your responses
                </p>
              </div>

              <AIFeedback riskLevel={calculateRiskLevel()} moodScore={moodScore} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default CheckIn;
