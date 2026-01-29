import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { SuccessStories } from "@/components/landing/SuccessStories";
import { Privacy } from "@/components/landing/Privacy";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/layout/Navbar";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <SuccessStories />
      <Privacy />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Landing;
