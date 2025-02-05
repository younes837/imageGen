"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Loader2,
  Download,
  Link as LinkIcon,
  AlertCircle,
  Clock,
  Save,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { models } from "./models";
import Image from "next/image";

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(models[0].id);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [error, setError] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    startTimeRef.current = Date.now();
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      const currentTime = Date.now();
      setElapsedTime((currentTime - startTimeRef.current) / 1000);
    }, 100);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const generateImage = async () => {
    if (!prompt) return;

    setLoading(true);
    setError(null);
    startTimer();

    try {
      const selectedModel = models.find((m) => m.id === model);
      if (!selectedModel) {
        throw new Error("Invalid model selected");
      }

      const response = await fetch(selectedModel.apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY}`,
        },
        body: JSON.stringify({ inputs: prompt }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const blob = await response.blob();
      setGeneratedImage(URL.createObjectURL(blob));
      stopTimer();
      toast.success("Image generated successfully!");
    } catch (error) {
      setError(error.message);
      stopTimer();
      toast.error("Failed to generate image");
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;

    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = `generated-image-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Image downloaded successfully!");
  };

  const handleCopyLink = () => {
    if (!generatedImage) return;

    navigator.clipboard.writeText(generatedImage).then(() => {
      toast.success("Link copied to clipboard");
    });
  };

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Generate Image</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-0.5">
            <Label htmlFor="model">AI Model</Label>
            <Select value={model} onValueChange={setModel}>
              <SelectTrigger id="model">
                <SelectValue placeholder="Select Model" />
              </SelectTrigger>
              <SelectContent>
                {models.map((m) => (
                  <SelectItem key={m.id} value={m.id}>
                    <div className="flex flex-col gap-1">
                      <div>{m.name}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-0.5">
            <Label htmlFor="prompt">Prompt</Label>
            <div className="flex gap-2">
              <Input
                id="prompt"
                placeholder="Describe the image you want to generate..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1"
              />
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-sm text-muted-foreground min-w-[60px]">
                  <Clock className="h-4 w-4" />
                  {elapsedTime.toFixed(1)}s
                </div>
                <Button onClick={generateImage} disabled={loading || !prompt}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate"
                  )}
                </Button>
              </div>
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="mt-6">
            {loading ? (
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-[300px] h-[270px] bg-muted rounded-lg">
                  <Loader2 className="h-8 w-8 animate-spin" />
                </div>
              </div>
            ) : generatedImage ? (
              <div className="space-y-4  mx-auto">
                <div className="flex justify-center">
                  <Image
                    width={300}
                    height={250}
                    src={generatedImage}
                    alt="Generated image"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex gap-2 justify-center">
                  <Button onClick={handleDownload} className="flex gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    // onClick={}
                    className="flex gap-2"
                  >
                    <Save className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[400px] bg-muted rounded-lg text-muted-foreground">
                Enter a prompt and click generate to create an image
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
