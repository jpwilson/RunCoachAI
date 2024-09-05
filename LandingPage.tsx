import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Rocket, Target, Zap } from "lucide-react";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating Stripe session for:", email);
    alert("Stripe checkout would be initiated here with the email: " + email);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-700">
        <a className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6 text-blue-300" />
          <span className="ml-2 text-xl font-bold text-blue-300">
            RunCoachAI
          </span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:text-blue-300 transition-colors"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:text-blue-300 transition-colors"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="text-sm font-medium hover:text-blue-300 transition-colors"
            href="#about"
          >
            About
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-100">
                  RunCoachAI: Your Personal AI Running Coach
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-200 md:text-xl">
                  Advanced, ultra-specific running coaching powered by AI.
                  Tailored plans, real-time feedback, and personalized insights
                  to help you reach your running goals.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit}>
                  <div className="flex space-x-2">
                    <Input
                      className="max-w-lg flex-1 bg-blue-900 border-blue-700 text-white placeholder-blue-400"
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Early Access
                    </Button>
                  </div>
                </form>
                <p className="text-xs text-blue-300">
                  Sign up now for exclusive early access pricing.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-900"
          id="features"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-100">
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-blue-800 border-blue-700">
                <CardHeader>
                  <Target className="w-8 h-8 mb-2 text-blue-400" />
                  <CardTitle className="text-blue-100">
                    Ultra-Specific Training Plans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-200">
                    AI-generated plans tailored to your goals, fitness level,
                    and schedule. From 5K to ultramarathons, we've got you
                    covered.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-blue-800 border-blue-700">
                <CardHeader>
                  <Zap className="w-8 h-8 mb-2 text-blue-400" />
                  <CardTitle className="text-blue-100">
                    Real-Time Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-200">
                    Get instant insights on your performance, pacing, and form.
                    Our AI coach adapts your training on the fly.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-blue-800 border-blue-700">
                <CardHeader>
                  <Rocket className="w-8 h-8 mb-2 text-blue-400" />
                  <CardTitle className="text-blue-100">
                    Continuous Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-200">
                    Our AI learns from your progress, constantly refining your
                    plan for optimal results and injury prevention.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800"
          id="pricing"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-100">
              Early Access Pricing
            </h2>
            <div className="mx-auto max-w-sm space-y-4">
              <Card className="bg-blue-900 border-blue-700">
                <CardHeader>
                  <CardTitle className="text-blue-100">
                    Founder's Club Membership
                  </CardTitle>
                  <CardDescription className="text-blue-300">
                    Limited time offer for early adopters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2 text-blue-200">
                    $9.99/month
                  </div>
                  <p className="text-sm text-blue-400 mb-4">
                    Regular price: $29.99/month
                  </p>
                  <ul className="space-y-2 mb-4 text-blue-200">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Unlimited AI-generated training plans
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Real-time performance feedback
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Priority access to new features
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() =>
                      alert("Stripe checkout would be initiated here")
                    }
                  >
                    Get Early Access
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-900"
          id="about"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-100">
              About RunCoachAI
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <p className="text-blue-200">
                  RunCoachAI was born from a passion for running and a belief in
                  the power of AI to transform personal fitness. Our team of
                  experienced runners, coaches, and AI experts have come
                  together to create the most advanced and personalized running
                  coach available.
                </p>
                <p className="text-blue-200">
                  We understand that every runner is unique, with their own
                  goals, challenges, and preferences. That's why we've developed
                  an AI that adapts to you, providing ultra-specific guidance
                  that evolves as you do.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="@runnerfounder"
                    />
                    <AvatarFallback>RF</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-blue-100">Jane Doe</h3>
                    <p className="text-sm text-blue-300">
                      Founder & Ultra Runner
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="@aiexpert"
                    />
                    <AvatarFallback>AE</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-blue-100">John Smith</h3>
                    <p className="text-sm text-blue-300">
                      AI Lead & Marathon Enthusiast
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-800">
        <p className="text-xs text-blue-400">
          © 2023 RunCoachAI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:text-blue-300 transition-colors" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:text-blue-300 transition-colors" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
