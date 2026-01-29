import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/20 blur-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Your daily wellness companion</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance"
          >
            Your feelings matter.
            <br />
            <span className="text-primary">Let's check in together.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            A gentle, 2-minute daily check-in that helps you understand your emotional patterns 
            and catch signs of stress before they grow.
          </motion.p>

          {/* Problem explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 mb-10 shadow-soft max-w-2xl mx-auto"
          >
            <p className="text-foreground/80 leading-relaxed">
              Life can feel overwhelming—work, studies, relationships, and everything in between. 
              Sometimes we don't notice we're stressed until it's too much. <strong className="text-primary">CARELOOP AI</strong> helps 
              you pause, reflect, and understand your emotional wellbeing with simple, supportive daily check-ins.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to="/checkin">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Heart className="w-5 h-5 mr-2" />
                Start Your Check-In
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                View My Insights
              </Button>
            </Link>
          </motion.div>

          {/* Trust & Privacy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>100% private & secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-accent" />
              <span>No judgment, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-wellness-calm" />
              <span>Takes only 2 minutes</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
