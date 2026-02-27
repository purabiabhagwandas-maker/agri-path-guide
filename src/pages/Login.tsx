import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Leaf, Eye, EyeOff, ArrowLeft } from "lucide-react";
import fieldsAerial from "@/assets/fields-aerial.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img src={fieldsAerial} alt="Green fields" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-foreground/50 to-transparent flex items-end p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground leading-snug">
              Your Digital Gateway to<br />Agricultural Empowerment
            </h2>
            <p className="mt-3 text-primary-foreground/70 max-w-md">
              Track MSP rates, manage insurance claims, access subsidies, and connect with cooperatives — all in one place.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
          </Link>

          <Card className="shadow-elevated border-0">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-3">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="font-display text-2xl font-bold">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {isLogin ? "Sign in to your KisanSeva dashboard" : "Register for KisanSeva portal"}
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                )}
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone / Aadhaar Number</Label>
                  <Input id="phone" placeholder="Enter phone or Aadhaar" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="password">Password / OTP</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password or OTP"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-muted-foreground">
                      <input type="checkbox" className="rounded border-input" />
                      Remember me
                    </label>
                    <button type="button" className="text-primary hover:underline">Forgot password?</button>
                  </div>
                )}

                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground text-base h-11">
                  {isLogin ? "Sign In" : "Register"}
                </Button>

                <Button type="button" variant="outline" className="w-full h-11" onClick={() => navigate("/dashboard")}>
                  Send OTP Instead
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary font-medium hover:underline"
                >
                  {isLogin ? "Register here" : "Sign in"}
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Kisan Helpline: 1800-180-1551 (Toll Free)
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
