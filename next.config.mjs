/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore ESLint/TS errors in Amplify build
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // Optimize for Amplify static hosting
  output: 'export',

  images: {
    unoptimized: true,
  },
}

export default nextConfig
