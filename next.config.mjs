/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

export default nextConfig;
