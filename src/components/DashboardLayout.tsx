import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center justify-between border-b bg-card px-4 shrink-0">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
              <span className="text-sm text-muted-foreground hidden sm:block">
                Farmer Dashboard
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-muted-foreground hover:text-foreground"
                onClick={() => navigate("/dashboard/notifications")}
              >
                <Bell className="h-4 w-4" />
                <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-secondary border-2 border-card" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary-foreground">RS</span>
                </div>
                <span className="text-sm font-medium hidden sm:block">Rajesh Singh</span>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
