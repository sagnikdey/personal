import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "workers.paper.design",
        pathname: "/file-assets/**",
      },
    ],
  },
};

export default nextConfig;
