import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const cooperatives = [
  { name: "Amul Dairy Cooperative", type: "Dairy", location: "Anand, Gujarat", members: "3.6M", status: "Member" },
  { name: "IFFCO", type: "Fertiliser", location: "New Delhi", members: "35,000+", status: "Not Member" },
  { name: "KRIBHCO", type: "Fertiliser", location: "Noida, UP", members: "15,000+", status: "Not Member" },
  { name: "Gramin Vikas Cooperative", type: "Multi-purpose", location: "Lucknow, UP", members: "12,000", status: "Member" },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

const Cooperatives = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="font-display text-2xl font-bold">Cooperatives</h1>
        <p className="text-sm text-muted-foreground mt-1">Find and join farmer cooperatives near you</p>
      </motion.div>

      <motion.div variants={item} className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search cooperatives by name, type, or location..." className="pl-10" />
      </motion.div>

      <motion.div variants={item}>
        <Card className="shadow-card border-0">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" /> Cooperatives
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {cooperatives.map((c, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-muted/40 gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{c.name}</p>
                    <Badge variant={c.status === "Member" ? "default" : "secondary"}>{c.status}</Badge>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span>{c.type}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{c.location}</span>
                    <span>{c.members} members</span>
                  </div>
                </div>
                <Button size="sm" variant={c.status === "Member" ? "outline" : "default"}>
                  {c.status === "Member" ? "View Details" : "Apply to Join"}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Cooperatives;
