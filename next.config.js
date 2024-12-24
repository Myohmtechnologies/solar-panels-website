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
  // Configuration spécifique pour la gestion des styles
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });
    return config;
  },
  // Optimisation pour la production
  compiler: {
    removeConsole: false,
  },
  // Configuration pour le mode production
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    // Désactiver la génération statique
    isrMemoryCacheSize: 0,
    // Forcer le mode serveur pour les pages d'erreur
    runtime: 'nodejs',
    serverComponents: true,
    optimizeCss: true // Activation de l'optimisation CSS
  }
};

module.exports = nextConfig;
