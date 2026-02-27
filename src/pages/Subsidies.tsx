import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HandCoins, CheckCircle2, Clock, IndianRupee, FileSearch } from "lucide-react";

const subsidies = [
  { name: "PM-KISAN Samman Nidhi", status: "Active", installment: "16th", amount: "₹2,000", date: "Feb 1, 2026", total: "₹32,000" },
  { name: "PM Kisan MAN-Dhan Yojana", status: "Applied", installment: "-", amount: "Pending", date: "Feb 20, 2026", total: "-" },
];

const paymentHistory = [
  { scheme: "PM-KISAN", installment: "16th", amount: "₹2,000", date: "Feb 1, 2026", mode: "DBT" },
  { scheme: "PM-KISAN", installment: "15th", amount: "₹2,000", date: "Oct 1, 2025", mode: "DBT" },
  { scheme: "PM-KISAN", installment: "14th", amount: "₹2,000", date: "Jun 1, 2025", mode: "DBT" },
  { scheme: "PM-KISAN", installment: "13th", amount: "₹2,000", date: "Feb 1, 2025", mode: "DBT" },
  { scheme: "Soil Health Card", installment: "-", amount: "₹5,000", date: "Jan 15, 2025", mode: "DBT" },
];

const availableSubsidies = [
  { name: "Kisan Credit Card", benefit: "Low-interest crop loan up to ₹3 lakh", deadline: "Apr 15, 2026" },
  { name: "Sub-Mission on Agri Mechanization", benefit: "50-80% subsidy on farm equipment", deadline: "Mar 31, 2026" },
  { name: "National Mission for Sustainable Agriculture", benefit: "Soil conservation & water management aid", deadline: "Ongoing" },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

const Subsidies = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="font-display text-2xl font-bold">Subsidy Management</h1>
        <p className="text-sm text-muted-foreground mt-1">PM-KISAN & other subsidies · Track applications & payments</p>
      </motion.div>

      {/* Active Subsidies */}
      <motion.div variants={item}>
        <Card className="shadow-card border-0">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <HandCoins className="h-5 w-5 text-primary" /> My Subsidies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {subsidies.map((s, i) => (
              <div key={i} className="p-4 rounded-lg bg-muted/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{s.name}</p>
                    <Badge variant={s.status === "Active" ? "default" : "outline"}>{s.status}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {s.status === "Active" ? `${s.installment} Installment · ${s.date}` : `Applied on ${s.date}`}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold">{s.amount}</p>
                  {s.total !== "-" && <p className="text-xs text-muted-foreground">Total received: {s.total}</p>}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment History */}
        <motion.div variants={item}>
          <Card className="shadow-card border-0">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-success" /> Payment History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {paymentHistory.map((p, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    <div>
                      <p className="text-sm font-medium">{p.scheme} {p.installment !== "-" && `· ${p.installment}`}</p>
                      <p className="text-xs text-muted-foreground">{p.date} · {p.mode}</p>
                    </div>
                  </div>
                  <p className="font-display font-bold text-sm">{p.amount}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Available Subsidies */}
        <motion.div variants={item}>
          <Card className="shadow-card border-0">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <FileSearch className="h-5 w-5 text-secondary" /> Available Schemes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {availableSubsidies.map((s, i) => (
                <div key={i} className="p-3 rounded-lg bg-muted/40 space-y-2">
                  <p className="font-medium text-sm">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.benefit}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {s.deadline}
                    </span>
                    <Button size="sm" variant="outline">Apply Now</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Subsidies;
