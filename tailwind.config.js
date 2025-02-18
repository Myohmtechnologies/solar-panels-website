/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
          '50': '#fffdf5',
          '100': '#fffbeb',
          '200': '#fff4c7',
          '300': '#ffeb99',
          '400': '#ffdf64',
          '500': '#ffb700',
          '600': '#e6a600',
          '700': '#bf8a00',
          '800': '#996f00',
          '900': '#7d5b00'
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
      keyframes: {
        shine: {
          '100%': { transform: 'translateX(150%) skewX(-45deg)' },
        }
      },
      animation: {
        shine: 'shine 1s ease-in-out infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2.25rem',
              fontWeight: '700',
              marginBottom: '1rem',
            },
            h2: {
              fontSize: '1.875rem',
              fontWeight: '700',
              marginBottom: '1rem',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '0.75rem',
            },
            h4: {
              fontSize: '1.25rem',
              fontWeight: '700',
              marginBottom: '0.75rem',
            },
            p: {
              marginBottom: '1rem',
            },
            ul: {
              marginBottom: '1rem',
            },
            ol: {
              marginBottom: '1rem',
            },
            li: {
              marginBottom: '0.25rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
