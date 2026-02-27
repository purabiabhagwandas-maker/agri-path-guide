import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserCircle, MapPin, Wheat, Building2, CreditCard, FileCheck, Edit, Download } from "lucide-react";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

const Profile = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold">Profile & KYC</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your personal, land, and banking details</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Edit className="h-4 w-4 mr-2" /> Edit Profile</Button>
          <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
            <Download className="h-4 w-4 mr-2" /> Download Farmer ID
          </Button>
        </div>
      </motion.div>

      {/* Personal Info */}
      <motion.div variants={item}>
        <Card className="shadow-card border-0">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg flex items-center gap-2">
              <UserCircle className="h-5 w-5 text-primary" /> Personal Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-5">
              <div className="h-20 w-20 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                <span className="text-2xl font-display font-bold text-primary-foreground">RS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div><span className="text-muted-foreground">Name:</span> <span className="font-medium">Rajesh Singh</span></div>
                <div><span className="text-muted-foreground">Phone:</span> <span className="font-medium">+91 98765 43210</span></div>
                <div><span className="text-muted-foreground">Aadhaar:</span> <span className="font-medium">XXXX-XXXX-4321</span></div>
                <div><span className="text-muted-foreground">Farmer ID:</span> <span className="font-medium">FID-UP-2024-00123</span></div>
                <div><span className="text-muted-foreground">State:</span> <span className="font-medium">Uttar Pradesh</span></div>
                <div><span className="text-muted-foreground">District:</span> <span className="font-medium">Lucknow</span></div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">KYC:</span>
                  <Badge variant="default" className="flex items-center gap-1"><FileCheck className="h-3 w-3" /> Verified</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Land Details */}
        <motion.div variants={item}>
          <Card className="shadow-card border-0">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" /> Land Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { plot: "Plot #45", area: "5 acres", location: "Village Rampur, Lucknow", type: "Irrigated" },
                { plot: "Plot #12", area: "3 acres", location: "Village Shivpur, Lucknow", type: "Rain-fed" },
              ].map((land, i) => (
                <div key={i} className="p-3 rounded-lg bg-muted/40">
                  <p className="font-medium text-sm">{land.plot} · {land.area}</p>
                  <p className="text-xs text-muted-foreground">{land.location} · {land.type}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Crops & Banking */}
        <motion.div variants={item} className="space-y-6">
          <Card className="shadow-card border-0">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Wheat className="h-5 w-5 text-primary" /> Registered Crops
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Wheat", "Paddy", "Mustard", "Cotton", "Sugarcane"].map((crop) => (
                  <Badge key={crop} variant="secondary" className="text-sm py-1 px-3">{crop}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-lg flex items-center gap-2">
                <Building2 className="h-5 w-5 text-info" /> Bank Details
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div><span className="text-muted-foreground">Bank:</span> <span className="font-medium">State Bank of India</span></div>
              <div><span className="text-muted-foreground">Account:</span> <span className="font-medium">XXXX XXXX 6789</span></div>
              <div><span className="text-muted-foreground">IFSC:</span> <span className="font-medium">SBIN0001234</span></div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">DBT Status:</span>
                <Badge variant="default" className="flex items-center gap-1">
                  <CreditCard className="h-3 w-3" /> Linked
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;
