import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allows viewing the dev server from another device on the local
  // network/Tailscale (e.g. http://100.88.6.39:3001) without Next.js
  // blocking the JS chunk requests as cross-origin.
  allowedDevOrigins: ["100.88.6.39"],
};

export default nextConfig;
