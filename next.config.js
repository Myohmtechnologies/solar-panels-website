/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['res.cloudinary.com'],
  },
  typescript: {
    // ⚠️ Uniquement pour le déploiement initial, à retirer après
    ignoreBuildErrors: true
  },
  eslint: {
    // ⚠️ Uniquement pour le déploiement initial, à retirer après
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
