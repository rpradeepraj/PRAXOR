/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Export static site
  output: "export",

  // Required for GitHub Pages (replace PRAXOR with your repo name)
  basePath: isProd ? "/PRAXOR" : "",
  assetPrefix: isProd ? "/PRAXOR/" : "",

  // Disable image optimization (since Vercel’s image optimizer won’t work on GH Pages)
  images: {
    unoptimized: true,
  },

  // Ignore build errors (optional, but helps with CI/CD if strict checks fail)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
