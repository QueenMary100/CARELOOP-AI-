import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { MoodChart } from "@/components/dashboard/MoodChart";
import { WeeklySummary } from "@/components/dashboard/WeeklySummary";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PenLine, Shield, Heart } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
              Your Wellness Dashboard
            </h1>
            <p className="text-muted-foreground">
              Track your emotional wellbeing over time
            </p>
          </div>
          <Link to="/checkin">
            <Button variant="hero">
              <PenLine className="w-4 h-4 mr-2" />
              Today's Check-In
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <div className="mb-8">
          <StatsCards />
        </div>

        {/* Charts and Summary */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <MoodChart />
          <WeeklySummary />
        </div>

        {/* Privacy reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-2xl bg-card shadow-soft"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Your data, your control
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Everything you share with CARELOOP stays private and secure. Your check-in data 
                is encrypted and never shared with third parties. You can delete your data at any time.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="w-4 h-4 text-primary" />
                  <span>Privacy-first design</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="w-4 h-4 text-wellness-calm" />
                  <span>End-to-end encryption</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
