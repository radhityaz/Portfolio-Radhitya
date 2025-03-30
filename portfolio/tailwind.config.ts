import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2A4B7E', // Navy Blue
          light: '#3A6BA6',
          dark: '#1A2F4B',
        },
        secondary: {
          DEFAULT: '#FFD700', // Gold
          light: '#FFE44D',
          dark: '#CCAC00',
        },
        dark: {
          DEFAULT: '#0f0f0f',
          light: '#1a1a1a',
          lighter: '#2a2a2a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/background-campus.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(42, 75, 126, 0.5)',
        'glow-lg': '0 0 25px rgba(42, 75, 126, 0.5)',
        'gold': '0 0 15px rgba(255, 215, 0, 0.5)',
        'gold-lg': '0 0 25px rgba(255, 215, 0, 0.5)',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};

export default config;
