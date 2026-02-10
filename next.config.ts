import type { NextConfig } from "next";
import { redirects } from "./config/redirects";

const nextConfig: NextConfig = {
  /* config options here */
  redirects,
};

export default nextConfig;

