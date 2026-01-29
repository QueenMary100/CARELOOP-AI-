import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Free",
    price: "$0",
    priceSuffix: "/month",
    description: "Essential daily check-ins",
    features: [
      "Daily AI-powered check-ins",
      "3–5 adaptive questions",
      "Basic mood tracking",
      "Simple insights & advice",
      "7-day history",
      "Text input only",
    ],
    cta: "Get Started Free",
  },
  {
    name: "Premium",
    price: "$9.99",
    priceSuffix: "/month",
    description: "Comprehensive health companion",
    features: [
      "Everything in Free, plus:",
      "Voice check-ins with emotion analysis",
      "Unlimited history & advanced analytics",
      "Deep pattern recognition & predictions",
      "Trusted circle alerts (up to 3 people)",
      "Professional health reports (PDF)",
      "Sleep & energy tracking",
      "Smart reminders & nudges",
      "Priority support",
    ],
    cta: "Start 14-Day Free Trial",
  },
  {
    name: "Family",
    price: "$24.99",
    priceSuffix: "/month",
    description: "Care for your whole family",
    features: [
      "Everything in Premium, plus:",
      "Up to 5 family members",
      "Family dashboard & insights",
      "Individual privacy controls",
      "Cross-family support alerts",
      "Educational resources",
      "Video support sessions (2/month)",
    ],
    cta: "Start Family Plan",
  },
];

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Choose your care level</h2>
          <p className="text-lg text-muted-foreground mb-6">Start free, upgrade when you're ready for deeper insights</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className={`relative group p-8 rounded-3xl bg-card shadow-soft transition-transform transform ${
                i === 1
                  ? "border-2 border-primary/30 scale-[1.03] -translate-y-2 bg-gradient-to-b from-primary/5 to-transparent"
                  : ""
              }`}
              style={{ minHeight: 520 }}
            >
              {i === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    Most popular
                  </span>
                </div>
              )}

              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <div className="flex items-baseline gap-3">
                  <div className="text-4xl sm:text-5xl font-extrabold text-foreground">{tier.price}</div>
                  <div className="text-sm text-muted-foreground">{tier.priceSuffix}</div>
                </div>

                <ul className="mt-6 grow grid gap-3 text-sm text-muted-foreground list-none">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button
                    size="lg"
                    className={`w-full ${i === 1 ? "rounded-full py-3" : "rounded-xl py-2"}`}
                    variant={i === 1 ? "hero" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
