import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  output: 'export',
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    path: '/_next/image',
  },
};

export default nextConfig;
