import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Leaf, Shield, HandCoins, Scale, Wheat, Users,
  ArrowRight, CheckCircle2, Phone, Mail
} from "lucide-react";
import heroFarmer from "@/assets/hero-farmer.jpg";
import fieldsAerial from "@/assets/fields-aerial.jpg";
import farmersCommunity from "@/assets/farmers-community.jpg";
import farmerTech from "@/assets/farmer-tech.jpg";

const features = [
  { icon: Wheat, title: "MSP Tracking", desc: "Real-time Minimum Support Prices and procurement center locations" },
  { icon: Shield, title: "Crop Insurance", desc: "Apply for PMFBY, track claims, and get instant payout estimates" },
  { icon: HandCoins, title: "Subsidy Management", desc: "PM-KISAN, DBT tracking, and all government subsidy schemes" },
  { icon: Scale, title: "Legal Assistance", desc: "Free legal help through NALSA for land disputes and farmer rights" },
  { icon: Users, title: "Cooperatives", desc: "Join farmer cooperatives like Amul, IFFCO for better market access" },
  { icon: Leaf, title: "Smart Agriculture", desc: "AI-powered crop insights, weather alerts, and price predictions" },
];

const rights = [
  "Right to receive Minimum Support Price (MSP) for notified crops",
  "Right to crop insurance under Pradhan Mantri Fasal Bima Yojana",
  "Right to direct benefit transfer of ₹6,000/year under PM-KISAN",
  "Right to free legal aid through National Legal Services Authority",
  "Right to fair access to agricultural markets and mandis",
  "Right to form and join farmer cooperatives and producer organizations",
  "Right to access agricultural credit through Kisan Credit Card",
  "Right to land records and protection against illegal land acquisition",
];

const stats = [
  { value: "14 Cr+", label: "Farmers Registered" },
  { value: "₹2,275", label: "Wheat MSP / Quintal" },
  { value: "₹6,000", label: "PM-KISAN / Year" },
  { value: "36 Cr+", label: "Insurance Policies" },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">KisanSeva</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#rights" className="text-muted-foreground hover:text-foreground transition-colors">Farmer Rights</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <Link to="/login">
            <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
              Login <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 pt-16">
          <img src={heroFarmer} alt="Indian farmer in golden wheat field" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight">
              Empowering India's <span className="text-secondary">Farmers</span> Digitally
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/80 max-w-xl">
              One platform for MSP tracking, crop insurance, subsidies, legal help, and cooperative support. Built for the backbone of India.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/login">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground text-base px-8">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#features">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                  Explore Features
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-2xl md:text-3xl font-bold text-secondary">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Everything a Farmer Needs, <span className="text-gradient-primary">In One Place</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              From MSP rates to legal aid — access all government schemes and services through a single digital dashboard.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={item}
                className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
              >
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About with Image */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src={farmersCommunity}
                  alt="Farmers harvesting together"
                  className="rounded-2xl shadow-elevated w-full object-cover aspect-[4/3]"
                />
                <img
                  src={farmerTech}
                  alt="Farmer using technology"
                  className="absolute -bottom-6 -right-4 w-40 h-40 md:w-52 md:h-52 rounded-xl shadow-elevated object-cover border-4 border-background"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Bridging the Gap Between <span className="text-gradient-primary">Farmers & Government</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                KisanSeva is a digital initiative to bring transparency, accessibility, and empowerment to India's farming community. We connect farmers directly with government schemes, cooperatives, and legal support — eliminating middlemen and reducing paperwork.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Built with inputs from agricultural experts and farmer organizations, our platform ensures every farmer can access their rightful benefits with real-time tracking and instant notifications.
              </p>
              <Link to="/login">
                <Button size="lg" className="mt-6 bg-gradient-primary hover:opacity-90 text-primary-foreground">
                  Access Your Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Farmer Rights */}
      <section id="rights" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={fieldsAerial} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Know Your <span className="text-gradient-primary">Rights as a Farmer</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Every Indian farmer is entitled to these fundamental rights and protections under law.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {rights.map((right, i) => (
              <motion.div
                key={i}
                variants={item}
                className="flex items-start gap-3 p-4 rounded-xl bg-card shadow-card border border-border/50"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">{right}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fields Banner */}
      <section className="relative h-72 md:h-96">
        <img src={fieldsAerial} alt="Green paddy fields aerial view" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center px-4"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              "Jai Jawan, Jai Kisan"
            </h2>
            <p className="mt-3 text-primary-foreground/80 max-w-lg mx-auto">
              Honoring the spirit of India's farmers — the true pillars of our nation's growth and food security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-secondary-foreground" />
                </div>
                <span className="font-display text-xl font-bold">KisanSeva</span>
              </div>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                A digital platform empowering Indian farmers with real-time access to government schemes, legal help, and cooperative support.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm text-primary-foreground/70">
                <a href="#features" className="block hover:text-primary-foreground transition-colors">Features</a>
                <a href="#rights" className="block hover:text-primary-foreground transition-colors">Farmer Rights</a>
                <a href="#about" className="block hover:text-primary-foreground transition-colors">About Us</a>
                <Link to="/login" className="block hover:text-primary-foreground transition-colors">Login / Register</Link>
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-sm text-primary-foreground/70">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Kisan Helpline: 1800-180-1551</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>support@kisanseva.gov.in</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
            © 2026 KisanSeva. A Government of India Initiative. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
