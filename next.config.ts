import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   clientRouterFilterAllowedRate: 1
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextui.org',
        // pathname: '/account123/**',
      }
    ]
  }
};

export default nextConfig;
