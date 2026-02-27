import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCircle2, AlertCircle, Info, Calendar } from "lucide-react";

const notifications = [
  { title: "Insurance claim approved", desc: "Claim #CL-2024-0456 for Paddy — ₹35,000 approved", type: "success", time: "2 hours ago", read: false },
  { title: "PM-KISAN installment credited", desc: "16th installment of ₹2,000 credited to your bank", type: "success", time: "1 day ago", read: false },
  { title: "MSP update", desc: "Wheat MSP increased to ₹2,275/quintal for 2025-26", type: "info", time: "2 days ago", read: true },
  { title: "Hearing reminder", desc: "Land dispute case LC-2025-0034 hearing on March 5", type: "warning", time: "3 days ago", read: true },
  { title: "New scheme available", desc: "Sub-Mission on Agri Mechanization — 50-80% subsidy", type: "info", time: "5 days ago", read: true },
  { title: "Insurance claim under review", desc: "Claim #CL-2025-0089 for Wheat is being reviewed", type: "pending", time: "1 week ago", read: true },
];

const typeIcon: Record<string, React.ReactNode> = {
  success: <CheckCircle2 className="h-5 w-5 text-success" />,
  info: <Info className="h-5 w-5 text-info" />,
  warning: <Calendar className="h-5 w-5 text-warning" />,
  pending: <AlertCircle className="h-5 w-5 text-muted-foreground" />,
};

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

const Notifications = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="font-display text-2xl font-bold">Notifications</h1>
        <p className="text-sm text-muted-foreground mt-1">Stay updated with your schemes, payments, and alerts</p>
      </motion.div>

      <motion.div variants={item}>
        <Card className="shadow-card border-0">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" /> All Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {notifications.map((n, i) => (
              <motion.div
                key={i}
                variants={item}
                className={`flex items-start gap-3 p-4 rounded-lg transition-colors hover:bg-muted/50 ${!n.read ? "bg-accent/50" : ""}`}
              >
                <div className="mt-0.5">{typeIcon[n.type]}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm">{n.title}</p>
                    {!n.read && <Badge variant="default" className="text-[10px] px-1.5 py-0">New</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{n.desc}</p>
                  <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Notifications;
