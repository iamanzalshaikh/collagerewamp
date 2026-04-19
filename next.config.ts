import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.cimdr.ac.in",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
