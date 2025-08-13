/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '/PRAXOR', 
  assetPrefix: '/PRAXOR', 
  images: {
    unoptimized: true // required for static export if using <Image>
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
