"use server";

import { db } from "@/lib/db";
import { images } from "@/drizzle/schema";
import { supabase } from "@/lib/supabase/client";
import { auth } from "@clerk/nextjs";

export async function saveGeneratedImage({
  prompt,
  imageBlob,
  model,
  generationTime,
}) {
  try {
    const { userId } = auth();
    if (!userId) throw new Error("Unauthorized");

    // Upload image to Supabase Storage
    const fileName = `${userId}/${Date.now()}.png`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("generated-images")
      .upload(fileName, imageBlob);

    if (uploadError) throw uploadError;

    // Get public URL
    const { data: publicUrl } = supabase.storage
      .from("generated-images")
      .getPublicUrl(fileName);

    // Save to database using Drizzle
    const savedImage = await db
      .insert(images)
      .values({
        userId,
        prompt,
        imageUrl: publicUrl.publicUrl,
        model,
        generationTime: generationTime.toString(),
      })
      .returning();

    return savedImage[0];
  } catch (error) {
    console.error("Error saving image:", error);
    throw error;
  }
}
