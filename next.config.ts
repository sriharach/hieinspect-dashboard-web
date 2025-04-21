import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL || 'http://localhost:8000/api',
    AMOUNT_LIMIT_IMAGE: process.env.AMOUNT_LIMIT_IMAGE,
  },
  output: 'export',
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    path: '/_next/image',
  },
};

export default nextConfig;
