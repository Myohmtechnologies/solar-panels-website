/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Désactiver le prérendu statique
  output: 'standalone',

  // Configuration webpack minimale
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error'
    };

    // Ignorer les warnings spécifiques
    config.ignoreWarnings = [
      /node:internal/,
      /punycode/,
      /useContext/
    ];

    return config;
  },

  // Configuration TypeScript
  typescript: {
    ignoreBuildErrors: true
  },

  // Configuration ESLint
  eslint: {
    ignoreDuringBuilds: true
  },

  // Désactiver le prérendu des pages d'erreur
  async rewrites() {
    return [
      { source: '/404', destination: '/' },
      { source: '/500', destination: '/' }
    ];
  }
};

module.exports = nextConfig;
