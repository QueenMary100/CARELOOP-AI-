import { motion } from "framer-motion";
import { Shield, Lock, UserCheck, AlertCircle } from "lucide-react";

export const Privacy = () => {
  return (
    <section className="py-24 gradient-sunrise">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your privacy is sacred to us
            </h2>
            <p className="text-lg text-muted-foreground">
              We built CARELOOP with trust and safety at its core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-card shadow-soft"
            >
              <Lock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Your data stays private
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                All your check-in responses are encrypted and stored securely. We never sell, 
                share, or use your personal information for advertising or any other purpose.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-6 rounded-2xl bg-card shadow-soft"
            >
              <UserCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Anonymous by design
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You're in control. Use CARELOOP without creating an account if you prefer. 
                Your emotional journey is yours alone.
              </p>
            </motion.div>
          </div>

          {/* Important disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="p-6 rounded-2xl bg-accent/20 border border-accent/30"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Important: CARELOOP is not a medical tool
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  CARELOOP AI is designed to help you reflect on your emotional wellbeing and 
                  recognize patterns in how you feel. It is <strong>not</strong> a diagnostic tool, 
                  medical device, or replacement for professional mental health care. If you're 
                  experiencing a crisis or need support, please reach out to a mental health 
                  professional or crisis helpline in your area.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
