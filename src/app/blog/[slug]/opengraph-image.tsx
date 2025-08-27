import { ImageResponse } from "next/og";
import { getPost } from "@/data/blog";

export const runtime = "nodejs";
export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const styles = {
  wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: "40px",
  },
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    border: "4px solid black",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "60px",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  logo: {
    marginBottom: "20px",
    alignSelf: "flex-start",
  },
  title: {
    fontSize: "40px",
    fontWeight: 700,
    color: "black",
    lineHeight: 1.2,
    marginBottom: "10px",
    letterSpacing: "0.5px",
  },
  summary: {
    fontSize: "25px",
    fontWeight: 500,
    color: "#4A4A4A",
    lineHeight: 1.5,
    letterSpacing: "0.5px",
  },
  metaContainer: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
    alignItems: "center",
  },
  metaBase: {
    fontSize: "19px",
    fontWeight: 500,
    lineHeight: 1.4,
    padding: "4px 0px",
  },
  dateMeta: {
    color: "black",
  },
} as const;

export default async function Image({ params }: { params: { slug: string } }) {
  try {
    const post = await getPost(params.slug);

    if (!post) {
      return new Response("Blog post not found", { status: 404 });
    }

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("de-DE", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    return new ImageResponse(
      (
        <div style={styles.wrapper}>
          <div style={styles.container}>
            <div style={styles.titleContainer}>
              <div style={styles.logo}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <rect width="80" height="80" fill="black" />
                  <text x="40" y="50" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
                    JH
                  </text>
                </svg>
              </div>
              <h1 style={styles.title}>{post.metadata.title}</h1>
              {post.metadata.description && <p style={styles.summary}>{post.metadata.description}</p>}
            </div>
            <div style={styles.metaContainer}>{post.metadata.publishedAt && <p style={{ ...styles.metaBase, ...styles.dateMeta }}>{formatDate(post.metadata.publishedAt)}</p>}</div>
          </div>
        </div>
      ),
      {
        width: size.width,
        height: size.height,
      }
    );
  } catch (error) {
    console.error("Error generating opengraph image:", error);
    return new Response(`Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`, {
      status: 500,
    });
  }
}
