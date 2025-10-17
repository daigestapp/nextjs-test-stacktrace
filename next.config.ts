import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable source maps for better error debugging
  productionBrowserSourceMaps: true,
  experimental: {
    serverSourceMaps: true,
  },
};

export default nextConfig;
