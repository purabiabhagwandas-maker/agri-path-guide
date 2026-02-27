import { motion } from "framer-motion";
import { StatsCard } from "@/components/StatsCard";
import { Shield, Wheat, HandCoins, Scale, TrendingUp, Calendar, AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recentActivity = [
  { text: "Insurance claim #IC-2024-0456 approved", type: "success", time: "2 hours ago" },
  { text: "PM-KISAN 16th installment credited - ₹2,000", type: "success", time: "1 day ago" },
  { text: "MSP for Wheat updated to ₹2,275/quintal", type: "info", time: "2 days ago" },
  { text: "Legal case hearing scheduled - March 5", type: "warning", time: "3 days ago" },
  { text: "Kharif insurance application under review", type: "pending", time: "5 days ago" },
];

const schemes = [
  { name: "PM-KISAN Samman Nidhi", status: "Active", deadline: "Mar 31, 2026" },
  { name: "PMFBY Rabi Season 2026", status: "Open", deadline: "Feb 28, 2026" },
  { name: "Soil Health Card Scheme", status: "Active", deadline: "Ongoing" },
  { name: "Kisan Credit Card", status: "Apply Now", deadline: "Apr 15, 2026" },
];

const statusColors: Record<string, string> = {
  success: "bg-success/10 text-success",
  info: "bg-info/10 text-info",
  warning: "bg-warning/10 text-warning",
  pending: "bg-muted text-muted-foreground",
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const DashboardHome = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      {/* Welcome */}
      <motion.div variants={item}>
        <div className="rounded-xl bg-gradient-hero p-6 text-primary-foreground">
          <h1 className="font-display text-2xl font-bold">Welcome back, Rajesh! 🌾</h1>
          <p className="mt-1 text-sm opacity-80">
            Here's your farming overview for today. Stay updated with your schemes and applications.
          </p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Active Insurance"
          value="3"
          subtitle="2 Kharif · 1 Rabi"
          icon={<Shield className="h-5 w-5" />}
          variant="primary"
        />
        <StatsCard
          title="MSP Eligible Crops"
          value="5"
          subtitle="Wheat, Rice, Mustard..."
          icon={<Wheat className="h-5 w-5" />}
          variant="secondary"
        />
        <StatsCard
          title="Subsidy Applications"
          value="2"
          subtitle="1 Approved · 1 Pending"
          icon={<HandCoins className="h-5 w-5" />}
          variant="success"
        />
        <StatsCard
          title="Legal Requests"
          value="1"
          subtitle="Hearing on Mar 5"
          icon={<Scale className="h-5 w-5" />}
          variant="info"
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <motion.div variants={item}>
          <Card className="shadow-card border-0">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivity.map((act, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`mt-0.5 rounded-full p-1 ${statusColors[act.type]}`}>
                    {act.type === "success" ? (
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    ) : (
                      <AlertCircle className="h-3.5 w-3.5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{act.text}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{act.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Active Schemes */}
        <motion.div variants={item}>
          <Card className="shadow-card border-0">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Government Schemes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {schemes.map((scheme, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="text-sm font-medium">{scheme.name}</p>
                    <p className="text-xs text-muted-foreground">Deadline: {scheme.deadline}</p>
                  </div>
                  <Badge variant={scheme.status === "Active" || scheme.status === "Open" ? "default" : "secondary"} className="text-xs">
                    {scheme.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashboardHome;
