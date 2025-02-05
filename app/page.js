"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, useAuth } from "@clerk/nextjs";
import React, { useState } from "react";
import {
  Shield,
  Database,
  Zap,
  ChevronRight,
  Users,
  BarChart,
  Clock,
  Check,
  Menu,
  X,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and primary nav */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                DataSecure
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#features"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Secondary nav */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <button className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Sign in
            </button>
            <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Pricing
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="space-y-1">
              <button className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">
                Sign in
              </button>
              <button className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium text-blue-600 hover:text-blue-700 hover:bg-gray-50">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r  from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              Secure Data Management Made Simple
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
              Transform your business with our powerful data platform. Secure,
              scalable, and easy to use.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Get Started
              </button>
              <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Secure Authentication"
              description="Enterprise-grade security with multi-factor authentication and SSO options."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-blue-600" />}
              title="Data Management"
              description="Effortlessly manage and organize your data with our intuitive interface."
            />
            <FeatureCard
              icon={<ZapIcon className="w-8 h-8 text-blue-600" />}
              title="Real-time Updates"
              description="Stay synchronized with instant updates and real-time collaboration."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Create Account"
              description="Sign up in seconds with your email or SSO provider."
            />
            <StepCard
              number="2"
              title="Import Data"
              description="Easily import your existing data or start fresh."
            />
            <StepCard
              number="3"
              title="Start Managing"
              description="Use our powerful tools to organize and analyze."
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by Teams
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <StatCard
              icon={<Users className="w-6 h-6 text-blue-600" />}
              value="10,000+"
              label="Active Users"
            />
            <StatCard
              icon={<BarChart className="w-6 h-6 text-blue-600" />}
              value="1M+"
              label="Data Points"
            />
            <StatCard
              icon={<Clock className="w-6 h-6 text-blue-600" />}
              value="99.9%"
              label="Uptime"
            />
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <blockquote className="text-lg text-gray-600 text-center italic">
              "This platform has transformed how we handle our data. The
              security features and ease of use are unmatched."
            </blockquote>
            <div className="mt-4 text-center">
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm text-gray-500">CTO at TechCorp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              tier="Starter"
              price="$0"
              features={[
                "Up to 1,000 records",
                "Basic analytics",
                "Email support",
                "1 user",
              ]}
            />
            <PricingCard
              tier="Pro"
              price="$49"
              features={[
                "Up to 50,000 records",
                "Advanced analytics",
                "Priority support",
                "5 users",
              ]}
              highlighted={true}
            />
            <PricingCard
              tier="Enterprise"
              price="Custom"
              features={[
                "Unlimited records",
                "Custom analytics",
                "24/7 support",
                "Unlimited users",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of teams already using our platform
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center">
            Start Free Trial
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="p-6 rounded-xl bg-white shadow-md">
      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="p-6 rounded-xl bg-gray-50 text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function PricingCard({ tier, price, features, highlighted = false }) {
  return (
    <div
      className={`p-6 rounded-xl ${
        highlighted
          ? "bg-blue-600 text-white shadow-xl scale-105"
          : "bg-white border border-gray-200"
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{tier}</h3>
      <div className="text-3xl font-bold mb-4">{price}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`mt-6 w-full py-2 rounded-lg font-semibold ${
          highlighted
            ? "bg-white text-blue-600 hover:bg-blue-50"
            : "bg-blue-600 text-white hover:bg-blue-700"
        } transition`}
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
