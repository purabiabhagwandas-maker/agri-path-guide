import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "info";
}

const variantStyles = {
  primary: "bg-gradient-primary text-primary-foreground",
  secondary: "bg-gradient-warm text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  info: "bg-info text-info-foreground",
};

const iconBgStyles = {
  primary: "bg-primary-foreground/20",
  secondary: "bg-secondary-foreground/20",
  success: "bg-success-foreground/20",
  warning: "bg-warning-foreground/20",
  info: "bg-info-foreground/20",
};

export function StatsCard({ title, value, subtitle, icon, variant = "primary" }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`rounded-xl p-5 ${variantStyles[variant]} shadow-card`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm opacity-80">{title}</p>
          <p className="mt-1 text-2xl font-display font-bold">{value}</p>
          {subtitle && <p className="mt-1 text-xs opacity-70">{subtitle}</p>}
        </div>
        <div className={`rounded-lg p-2.5 ${iconBgStyles[variant]}`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
}
