module.exports = {
  extends: [
    'next/core-web-vitals'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // Désactiver les règles spécifiques
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 'warn',
    '@next/next/no-img-element': 'warn',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
