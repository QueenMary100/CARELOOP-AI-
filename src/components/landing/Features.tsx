import { motion } from "framer-motion";
import { Brain, TrendingUp, Lock, MessageCircleHeart, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: MessageCircleHeart,
    title: "Gentle Check-Ins",
    description: "Simple, empathetic questions that help you reflect on how you're really feeling—without pressure or judgment.",
  },
  {
    icon: Brain,
    title: "Supportive AI Insights",
    description: "Receive personalized, caring feedback that acknowledges your feelings and offers gentle suggestions.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Patterns",
    description: "See how your emotional wellbeing changes over time with easy-to-understand visual trends.",
  },
  {
    icon: Clock,
    title: "Just 2 Minutes",
    description: "We respect your time. Quick daily check-ins fit seamlessly into your routine.",
  },
  {
    icon: Lock,
    title: "Completely Private",
    description: "Your data stays yours. We never share, sell, or use your information for anything else.",
  },
  {
    icon: Globe,
    title: "For Everyone",
    description: "Designed to be inclusive and accessible, no matter where you're from or what language feels like home.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How CARELOOP supports you
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Small moments of reflection can make a big difference in understanding yourself better.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
