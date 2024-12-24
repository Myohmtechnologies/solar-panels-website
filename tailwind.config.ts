import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-yellow': '#fafaf9',
        'ffeb99': '#ffeb99',
        'ffb700': '#ffb700',
        'AFC97E': '#AFC97E',
        'FFDF64': '#FFDF64',
        'f2f6fa': '#f2f6fa',
        'e3e9f0': '#e3e9f0',
        '232323': '#232323',
        '1a1a1a': '#1a1a1a',
        'primary': {
          DEFAULT: '#ffeb99',
          light: '#ffb700',
        },
        'secondary': {
          DEFAULT: '#AFC97E',
          dark: '#FFDF64',
        },
        'light-bg': '#fafaf9',
        'dark-bg': '#0a0a0a',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-solar': 'linear-gradient(to bottom right, #ffeb99, #ffb700)',
        'gradient-contact': 'linear-gradient(to bottom right, #f2f6fa, #e3e9f0)',
        'gradient-footer': 'linear-gradient(to bottom right, #232323, #1a1a1a)',
      },
    },
  },
  plugins: [],
};

export default config;
