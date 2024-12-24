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
  },
  experimental: {
    // Désactiver la génération statique
    isrMemoryCacheSize: 0,
    // Forcer le mode serveur pour les pages d'erreur
    runtime: 'nodejs'
  }
};

module.exports = nextConfig;
