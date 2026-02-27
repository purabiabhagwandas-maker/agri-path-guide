import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wheat, MapPin, Calculator, IndianRupee, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const mspRates = [
  { crop: "Wheat", rate: 2275, unit: "quintal", season: "Rabi", change: "+5.2%" },
  { crop: "Paddy (Common)", rate: 2300, unit: "quintal", season: "Kharif", change: "+3.8%" },
  { crop: "Mustard", rate: 5650, unit: "quintal", season: "Rabi", change: "+4.1%" },
  { crop: "Gram (Chana)", rate: 5440, unit: "quintal", season: "Rabi", change: "+2.9%" },
  { crop: "Maize", rate: 2090, unit: "quintal", season: "Kharif", change: "+3.3%" },
  { crop: "Cotton (Medium)", rate: 7020, unit: "quintal", season: "Kharif", change: "+6.1%" },
  { crop: "Sugarcane", rate: 315, unit: "quintal", season: "Annual", change: "+2.0%" },
  { crop: "Soybean", rate: 4892, unit: "quintal", season: "Kharif", change: "+4.5%" },
];

const saleHistory = [
  { crop: "Wheat", qty: "50 quintals", amount: "₹1,13,750", date: "Jan 15, 2026", status: "Paid" },
  { crop: "Paddy", qty: "80 quintals", amount: "₹1,84,000", date: "Nov 20, 2025", status: "Paid" },
  { crop: "Mustard", qty: "20 quintals", amount: "₹1,13,000", date: "Mar 10, 2025", status: "Paid" },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

const MSPTracking = () => {
  const [calcCrop, setCalcCrop] = useState("Wheat");
  const [calcQty, setCalcQty] = useState("");
  const selectedRate = mspRates.find((r) => r.crop === calcCrop)?.rate || 0;
  const totalValue = calcQty ? (parseFloat(calcQty) * selectedRate).toLocaleString("en-IN") : "0";

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="font-display text-2xl font-bold">MSP Tracking</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Minimum Support Prices set by CACP · Track procurement & payments
        </p>
      </motion.div>

      {/* MSP Rates */}
      <motion.div variants={item}>
        <Card className="shadow-card border-0">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <Wheat className="h-5 w-5 text-primary" />
              Current MSP Rates (2025-26)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {mspRates.map((rate) => (
                <div
                  key={rate.crop}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/40 hover:bg-muted transition-colors"
                >
                  <div>
                    <p className="font-medium text-sm">{rate.crop}</p>
                    <p className="text-xs text-muted-foreground">{rate.season} Season</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-bold">₹{rate.rate.toLocaleString()}/{rate.unit}</p>
                    <p className="text-xs text-success flex items-center justify-end gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {rate.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* MSP Calculator */}
        <motion.div variants={item}>
          <Card className="shadow-card border-0">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Calculator className="h-5 w-5 text-secondary" />
                MSP Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Select Crop</label>
                <select
                  value={calcCrop}
                  onChange={(e) => setCalcCrop(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background p-2.5 text-sm"
                >
                  {mspRates.map((r) => (
                    <option key={r.crop} value={r.crop}>{r.crop}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Quantity (quintals)</label>
                <Input
                  type="number"
                  placeholder="Enter quantity"
                  value={calcQty}
                  onChange={(e) => setCalcQty(e.target.value)}
                />
              </div>
              <div className="rounded-lg bg-gradient-primary p-4 text-primary-foreground">
                <p className="text-sm opacity-80">Estimated Value</p>
                <p className="text-2xl font-display font-bold mt-1">₹{totalValue}</p>
                <p className="text-xs opacity-70 mt-1">
                  At MSP rate of ₹{selectedRate.toLocaleString()}/quintal
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sale History */}
        <motion.div variants={item}>
          <Card className="shadow-card border-0">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-primary" />
                Sale History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {saleHistory.map((sale, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/40">
                  <div>
                    <p className="font-medium text-sm">{sale.crop} · {sale.qty}</p>
                    <p className="text-xs text-muted-foreground">{sale.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-bold text-sm">{sale.amount}</p>
                    <Badge variant="default" className="text-xs mt-1">{sale.status}</Badge>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2">
                <MapPin className="h-4 w-4 mr-2" /> Find Procurement Centers
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MSPTracking;
