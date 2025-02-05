"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { ArrowRight, ImageIcon, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <ImageIcon className="h-6 w-6" />
            <span>AI Image Generator</span>
          </div>
          <SignInButton mode="modal">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </SignInButton>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container flex-1 py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
            🎨 Next Generation AI Image Creation
          </span>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Create stunning images with{" "}
            <span className="text-primary">artificial intelligence</span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Transform your ideas into beautiful images with our advanced AI
            image generation platform. Fast, easy, and powerful.
          </p>
          <div className="flex gap-4">
            <SignInButton mode="modal">
              <Button size="lg" className="gap-2">
                Start Creating <ArrowRight className="h-4 w-4" />
              </Button>
            </SignInButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 md:gap-16">
          <div className="grid gap-4 text-center md:gap-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Powerful Features
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Everything you need to create amazing images with AI
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Generate high-quality images in seconds with our optimized AI
                models.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ImageIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Multiple Models</h3>
              <p className="text-muted-foreground">
                Choose between different AI models for the perfect result.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">High Quality</h3>
              <p className="text-muted-foreground">
                Create stunning, high-resolution images that look amazing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/40">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to start creating?
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Join thousands of creators using our AI image generation platform.
            </p>
            <SignInButton mode="modal">
              <Button size="lg" className="mt-4">
                Get Started
              </Button>
            </SignInButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <ImageIcon className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js and Clerk. The source code is available on{" "}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
