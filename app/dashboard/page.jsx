import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon, Settings2Icon } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Welcome to AI Image Generator</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Generate Image</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Create amazing images using AI with detailed text prompts
            </p>
            <Button asChild>
              <Link
                href="/dashboard/generate"
                className="flex items-center gap-2"
              >
                <ImageIcon className="h-4 w-4" />
                Start Generating
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Configure your preferences and API settings
            </p>
            <Button variant="outline" asChild>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-2"
              >
                <Settings2Icon className="h-4 w-4" />
                Open Settings
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
