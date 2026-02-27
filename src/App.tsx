import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import MSPTracking from "./pages/MSPTracking";
import CropInsurance from "./pages/CropInsurance";
import Subsidies from "./pages/Subsidies";
import LegalHelp from "./pages/LegalHelp";
import Cooperatives from "./pages/Cooperatives";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <DashboardLayout>
                <Routes>
                  <Route path="/" element={<DashboardHome />} />
                  <Route path="/msp" element={<MSPTracking />} />
                  <Route path="/insurance" element={<CropInsurance />} />
                  <Route path="/subsidies" element={<Subsidies />} />
                  <Route path="/legal" element={<LegalHelp />} />
                  <Route path="/cooperatives" element={<Cooperatives />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </DashboardLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
