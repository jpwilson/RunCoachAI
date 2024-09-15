import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { CardContent, Card } from "./components/ui/card";
import {
  Activity,
  Target,
  Zap,
  ChevronRight,
  CheckCircle,
  TrendingUp,
  Award,
} from "lucide-react";
// Add this line to import your image
import runnerImage from "../src/images/five_km_progress.png"; // Adjust the path as needed

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating Stripe session for:", email);
    alert("Stripe checkout would be initiated here with the email: " + email);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-900">
      <header className="px-4 lg:px-6 h-20 flex items-center border-b border-blue-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <a className="flex items-center justify-center" href="#">
          <Activity className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            RunCoachAI
          </span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#testimonials"
          >
            Testimonials
          </a>
          <a
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            href="#pricing"
          >
            Pricing
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
                Unlock Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                  Running Potential
                </span>{" "}
                with AI
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Experience personalized, ultra-specific coaching that adapts to
                your unique physiology and goals. Run faster, smarter, and
                injury-free.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    <span>Get Your Pro Training Plan</span>
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-sm text-gray-500">
                  Join 10,000+ runners already crushing their goals with
                  RunCoachAI.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white">
              <img
                src={runnerImage}
                alt="Sarah's 5K Run Time Progress with RunCoachAI"
                className="object-contain w-full h-full"
              />
              <div className="absolute top-[25%] left-[10%] bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <p className="text-lg font-bold text-blue-600">
                  Sarah's Progress
                </p>
                <p className="text-sm text-gray-600">5K Time: 22:30 → 19:45</p>
                <p className="text-xs text-gray-500">
                  In just 12 weeks with RunCoachAI
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Revolutionize Your Running
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {/* Feature cards go here */}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          {/* Testimonials content */}
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white"
        >
          {/* Pricing content */}
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          {/* CTA content */}
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t border-gray-200 bg-white/80 backdrop-blur-md">
        {/* Footer content */}
      </footer>
    </div>
  );
}
