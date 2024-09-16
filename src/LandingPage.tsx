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
              <Card className="bg-white/50 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Target className="h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-bold">Ultra-Specific Training</h3>
                  <p className="text-gray-600 text-center">
                    AI-powered plans that adapt daily to your progress,
                    recovery, and goals.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Zap className="h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-bold">Real-Time Adjustments</h3>
                  <p className="text-gray-600 text-center">
                    Dynamic coaching that evolves with every run, ensuring
                    optimal performance.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <TrendingUp className="h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-bold">Continuous Improvement</h3>
                  <p className="text-gray-600 text-center">
                    Break through plateaus with advanced analytics and
                    personalized insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Hear from Our Runners
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex",
                  achievement: "Qualified for Boston Marathon",
                  quote: "RunCoachAI turned my impossible dream into reality.",
                },
                {
                  name: "Maria",
                  achievement: "Completed first ultra marathon",
                  quote:
                    "The personalized training made all the difference in my endurance.",
                },
                {
                  name: "John",
                  achievement: "Injury-free for 2 years",
                  quote:
                    "Smart recovery recommendations kept me running consistently.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-blue-50 border-blue-100">
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-blue-600">
                      {testimonial.achievement}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 gap-10">
              Invest in Your Running Journey
            </h2>
            <div className="flex justify-center space-x-6">
              <Card className="w-full max-w-sm border-2 border-blue-600 hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Award className="h-12 w-12 text-blue-600" />
                  <h3 className="text-2xl font-bold text-blue-600">
                    Elite Training Plan
                  </h3>
                  <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                    $9.99
                  </div>
                  <p className="text-gray-600 text-center">
                    Limited time offer - $24.99 after 10,000 have been purchased
                    (8700 sold so far)
                  </p>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Unlimited AI coaching",
                      "Priority feature access",
                      "Exclusive community access",
                      "Personalized race strategies",
                      "Advanced performance analytics",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-colors"
                    onClick={handleSubmit}
                  >
                    Start Your Journey
                  </Button>
                </CardContent>
              </Card>
              {/* second card */}
              <Card className="w-full max-w-sm border-2 border-blue-600 hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Award className="h-12 w-12 text-blue-600" />
                  <h3 className="text-2xl font-bold text-blue-600">
                    Founder's Club
                  </h3>
                  <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                    $9.99/month
                  </div>
                  <p className="text-gray-600 text-center">
                    Limited time offer - 67% off regular price
                  </p>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Unlimited AI coaching",
                      "Priority feature access",
                      "Exclusive community access",
                      "Personalized race strategies",
                      "Advanced performance analytics",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-colors"
                    onClick={handleSubmit}
                  >
                    Start Your Journey
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          {/* CTA content */}
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
              Ready to Transform Your Running?
            </h2>
            <p className="max-w-[600px] mx-auto mb-8 text-blue-100">
              Join thousands of runners who have already unlocked their
              potential with RunCoachAI.
            </p>
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 transition-colorsfont-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              // size="lg"
              onClick={handleSubmit}
            >
              <span>Get Your Pro Training Plan</span>
              <ChevronRight className="ml-2 h-4 w-4 inline-block" />
            </Button>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t border-gray-200 bg-white/80 backdrop-blur-md">
        {/* Footer content */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Activity className="h-6 w-6 text-blue-600" />
            <p className="text-sm text-gray-600">
              © 2024 RunCoachAI & Run, Coach, Live LLC. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm hover:text-blue-600 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
