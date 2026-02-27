import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Upload, Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const policies = [
  {
    id: "PMFBY-2025-K-001",
    crop: "Paddy",
    season: "Kharif 2025",
    premium: "₹1,200",
    sumInsured: "₹60,000",
    status: "Active",
    expiry: "Dec 31, 2025",
  },
  {
    id: "PMFBY-2025-R-002",
    crop: "Wheat",
    season: "Rabi 2025-26",
    premium: "₹900",
    sumInsured: "₹45,000",
    status: "Active",
    expiry: "Apr 30, 2026",
  },
  {
    id: "PMFBY-2025-K-003",
    crop: "Cotton",
    season: "Kharif 2025",
    premium: "₹2,100",
    sumInsured: "₹1,05,000",
    status: "Expired",
    expiry: "Dec 31, 2025",
  },
];

const claims = [
  { id: "CL-2024-0456", crop: "Paddy", reason: "Flood damage", amount: "₹35,000", status: "Approved", date: "Jan 10, 2026" },
  { id: "CL-2025-0089", crop: "Wheat", reason: "Hailstorm", amount: "₹22,000", status: "Under Review", date: "Feb 15, 2026" },
  { id: "CL-2024-0312", crop: "Cotton", reason: "Pest attack", amount: "₹18,000", status: "Rejected", date: "Nov 5, 2025" },
];

const statusIcon: Record<string, React.ReactNode> = {
  Approved: <CheckCircle2 className="h-4 w-4 text-success" />,
  "Under Review": <Clock className="h-4 w-4 text-warning" />,
  Rejected: <XCircle className="h-4 w-4 text-destructive" />,
  Submitted: <AlertCircle className="h-4 w-4 text-info" />,
};

const statusBadge: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  Active: "default",
  Expired: "secondary",
  Approved: "default",
  "Under Review": "outline",
  Rejected: "destructive",
};

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

const CropInsurance = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold">Crop Insurance</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Pradhan Mantri Fasal Bima Yojana · Manage policies & claims
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
          <Shield className="h-4 w-4 mr-2" /> Apply for Insurance
        </Button>
      </motion.div>

      {/* Policies */}
      <motion.div variants={item}>
        <Card className="shadow-card border-0">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              My Policies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {policies.map((p) => (
                <div key={p.id} className="p-4 rounded-lg bg-muted/40 hover:bg-muted transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{p.crop}</p>
                        <Badge variant={statusBadge[p.status]}>{p.status}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {p.id} · {p.season} · Expires: {p.expiry}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">Sum Insured: <span className="font-display font-bold">{p.sumInsured}</span></p>
                      <p className="text-xs text-muted-foreground">Premium: {p.premium}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Claims */}
      <motion.div variants={item}>
        <Card className="shadow-card border-0">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Upload className="h-5 w-5 text-secondary" />
              Claims
            </CardTitle>
            <Button variant="outline" size="sm">File New Claim</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {claims.map((c) => (
                <div key={c.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/40">
                  <div className="flex items-start gap-3">
                    {statusIcon[c.status]}
                    <div>
                      <p className="font-medium text-sm">{c.crop} — {c.reason}</p>
                      <p className="text-xs text-muted-foreground">{c.id} · {c.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-bold text-sm">{c.amount}</p>
                    <Badge variant={statusBadge[c.status]} className="text-xs mt-1">{c.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default CropInsurance;
