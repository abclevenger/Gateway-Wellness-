import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /** Ensures file tracing uses this app root (avoids wrong root if a parent folder has package-lock.json). */
  outputFileTracingRoot: __dirname,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gateway4wellness.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
