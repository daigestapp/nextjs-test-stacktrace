import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable source maps for better error debugging
  productionBrowserSourceMaps: true,

  // Webpack configuration for source maps
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Enable source maps in development
      config.devtool = "eval-source-map";
    } else {
      // Enable source maps in production builds
      config.devtool = "source-map";
    }

    return config;
  },
};

export default nextConfig;
