import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jan Hindemit - Softwareentwickler";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const getAssetData = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://janhindemit.de";

    console.log("baseUrl", baseUrl);

    // Load Inter font from Google Fonts (same as website)
    const interFontUrl = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";

    const interFontRes = await fetch(interFontUrl);
    if (!interFontRes.ok) {
      return null;
    }

    const interFontCSS = await interFontRes.text();

    // Extract the actual font URL from CSS
    const fontUrlMatch = interFontCSS.match(/src:\s*url\(([^)]+)\)/);
    if (!fontUrlMatch) {
      return null;
    }

    const fontUrl = fontUrlMatch[1];
    const fontRes = await fetch(fontUrl);
    if (!fontRes.ok) {
      return null;
    }

    const interFont = await fontRes.arrayBuffer();

    // Load logo (favicon)
    const logoRes = await fetch(`${baseUrl}/favicon.ico`);
    if (!logoRes.ok) {
      return null;
    }

    const logoImage = await logoRes.arrayBuffer();
    const logoBase64 = `data:image/x-icon;base64,${Buffer.from(logoImage).toString("base64")}`;

    return {
      interFont,
      logoBase64,
    };
  } catch (error) {
    console.error("Failed to load assets:", error);
    return null;
  }
};

const styles = {
  wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: "60px",
  },
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  logo: {
    width: "80px",
    height: "80px",
    marginBottom: "40px",
  },
  title: {
    fontSize: "56px",
    color: "black",
    marginBottom: "24px",
    textAlign: "left",
    fontFamily: "Inter",
    fontWeight: "700",
    lineHeight: "1.2",
    maxWidth: "900px",
  },
  description: {
    fontSize: "24px",
    color: "black",
    textAlign: "left",
    maxWidth: "800px",
    fontFamily: "Inter",
    fontWeight: "400",
    lineHeight: "1.5",
    marginBottom: "40px",
  },
  authorInfo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  authorAvatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#f3f4f6",
  },
  authorText: {
    fontSize: "16px",
    color: "#6b7280",
    fontFamily: "Inter",
    fontWeight: "400",
  },
} as const;

export default async function Image() {
  try {
    const assetData = await getAssetData();

    return new ImageResponse(
      (
        <div
          style={{
            ...styles.wrapper,
            fontFamily: assetData ? "Inter" : "system-ui",
          }}>
          <div style={styles.container}>
            <img src={assetData?.logoBase64 || "/favicon.ico"} alt="Jan Hindemit Logo" style={styles.logo} />
            <h1 style={styles.title}>Jan Hindemit</h1>
            <p style={styles.description}>Softwareentwickler & UI/UX Designer</p>
            <div style={styles.authorInfo}>
              <div style={styles.authorAvatar}></div>
              <span style={styles.authorText}>Jan Hindemit • Portfolio</span>
            </div>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: assetData
          ? [
              {
                name: "Inter",
                data: assetData.interFont,
                weight: 500,
                style: "normal",
              },
            ]
          : undefined,
      }
    );
  } catch (error) {
    console.error("Error generating image:", error);
    return new Response(`Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`, {
      status: 500,
    });
  }
}
