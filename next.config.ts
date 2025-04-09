import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecom-server-rspq.onrender.com',
        port: '',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;
