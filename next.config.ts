import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  allowedDevOrigins: ['*.ngrok-free.app'],
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
};

export default nextConfig;
