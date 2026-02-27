import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Scale, FileText, MessageSquare, Calendar, Upload, AlertCircle } from "lucide-react";

const cases = [
  {
    id: "LC-2025-0034",
    title: "Land boundary dispute — Plot #45, Village Rampur",
    status: "Hearing Scheduled",
    nextDate: "Mar 5, 2026",
    advisor: "Adv. Priya Sharma",
    filed: "Dec 10, 2025",
  },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

const LegalHelp = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold">Legal Help & Disputes</h1>
          <p className="text-sm text-muted-foreground mt-1">
            National Legal Services Authority · Free legal assistance for farmers
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
          <AlertCircle className="h-4 w-4 mr-2" /> Raise New Complaint
        </Button>
      </motion.div>

      {/* Active Cases */}
      <motion.div variants={item}>
        <Card className="shadow-card border-0">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" /> My Cases
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cases.map((c) => (
              <div key={c.id} className="p-4 rounded-lg bg-muted/40 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{c.title}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{c.id} · Filed: {c.filed}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">{c.status}</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 text-xs bg-info/10 text-info px-2.5 py-1 rounded-full">
                    <Calendar className="h-3 w-3" /> Next: {c.nextDate}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs bg-accent text-accent-foreground px-2.5 py-1 rounded-full">
                    <MessageSquare className="h-3 w-3" /> {c.advisor}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Button size="sm" variant="outline"><FileText className="h-3.5 w-3.5 mr-1.5" /> Documents</Button>
                  <Button size="sm" variant="outline"><Upload className="h-3.5 w-3.5 mr-1.5" /> Upload</Button>
                  <Button size="sm" variant="outline"><MessageSquare className="h-3.5 w-3.5 mr-1.5" /> Chat with Advisor</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={item}>
        <Card className="shadow-card border-0">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: FileText, label: "Upload Land Documents", desc: "Add property records & deeds" },
                { icon: Calendar, label: "Schedule Hearing", desc: "Request a hearing date" },
                { icon: MessageSquare, label: "Free Legal Advice", desc: "Connect with NALSA advisor" },
              ].map((action, i) => (
                <button
                  key={i}
                  className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors text-left group"
                >
                  <action.icon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-medium text-sm">{action.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{action.desc}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default LegalHelp;
