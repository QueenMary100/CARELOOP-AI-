import { Heart, Mail, Shield, Leaf, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const footerLinks = {
  product: [
    { label: "Daily Check-In", href: "/checkin" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "AI Companion", href: "#" },
  ],
  support: [
    { label: "How It Works", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const crisisResources = [
  { name: "International Crisis Lines", url: "https://findahelpline.com/" },
  { name: "Crisis Text Line", url: "https://www.crisistextline.org/" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">CARELOOP AI</span>
            </Link>
            
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Your daily companion for emotional wellbeing. Small check-ins, meaningful insights. 
              Supporting your journey to better mental wellness.
            </p>

            {/* Newsletter Signup */}
            <div className="flex gap-2 max-w-sm">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Get wellness tips"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                />
              </div>
              <Button size="sm" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Crisis Resources Bar */}
      <div className="bg-primary/5 border-t border-border">
        <div className="container px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <span className="text-muted-foreground font-medium">
              Need immediate support?
            </span>
            <div className="flex flex-wrap justify-center gap-4">
              {crisisResources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  {resource.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-primary" />
                <span>Not Medical Advice</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} CARELOOP AI. Made with 💚 for your wellbeing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
