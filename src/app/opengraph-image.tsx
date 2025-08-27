import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jan Hindemit - Softwareentwickler";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  try {
    // Load the static Open Graph image
    const imageRes = await fetch("https://janhindemit.de/Opengraphimage.png");

    if (!imageRes.ok) {
      throw new Error("Failed to load Open Graph image");
    }

    const imageBuffer = await imageRes.arrayBuffer();

    // Return the image directly
    return new Response(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error loading Open Graph image:", error);

    // Fallback: return a simple error response
    return new Response("Failed to load image", {
      status: 500,
    });
  }
}
