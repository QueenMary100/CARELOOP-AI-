import { motion } from "framer-motion";
import { Quote, Star, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stories = [
  {
    quote: "CARELOOP helped me notice I was burning out before it got serious. The daily check-ins are like having a caring friend who asks how you're really doing.",
    name: "Maya",
    role: "University Student",
    emoji: "🌱",
    stars: 5,
  },
  {
    quote: "As someone who struggles to talk about feelings, this app made it easier. It's gentle and never pushy. I've learned so much about my emotional patterns.",
    name: "Alex",
    role: "Graduate Student",
    emoji: "💫",
    stars: 5,
  },
  {
    quote: "The AI companion feels surprisingly human. When I was going through a tough week, the insights helped me take better care of myself.",
    name: "Jordan",
    role: "Young Professional",
    emoji: "🌸",
    stars: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const SuccessStories = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Heart className="w-4 h-4" />
            <span>Real Stories, Real Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How CARELOOP is Helping People
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our community about their wellness journey. These stories inspire us to keep improving.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {stories.map((story, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-elevated transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote icon */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: story.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="flex-grow text-foreground/90 leading-relaxed mb-6 italic">
                    "{story.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-lg">
                      {story.emoji}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{story.name}</p>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          * Names changed to protect privacy. Stories shared with permission.
        </motion.p>
      </div>
    </section>
  );
};
