
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a static website in the "out" directory
  output: "export",

  // Allow next/image to work without a server-side image optimizer
  images: {
    unoptimized: true,
  },

  experimental: {
    agentFeedback: true,
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
