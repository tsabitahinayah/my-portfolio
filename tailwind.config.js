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
        // Palet baru: Charcoal & Emerald (menggantikan 'navy')
        charcoal: {
          50: '#f7f7f7', // Light Off-White (Primary Light)
          100: '#eaeaea',
          200: '#dadada',
          300: '#c0c0c0',
          400: '#757575', // Text Secondary
          500: '#595959',
          600: '#333333',
          700: '#252525',
          800: '#1c1c1c', // Charcoal Black (Primary Dark)
          900: '#121212', // Deepest Dark
        },
        // Override Tailwind's default slate palette to map to our Charcoal scale for consistency
        slate: {
          50: '#f7f7f7',
          100: '#eaeaea',
          200: '#dadada',
          300: '#c0c0c0',
          400: '#757575',
          500: '#595959',
          600: '#333333',
          700: '#252525',
          800: '#1c1c1c',
          900: '#121212',
        },
        // Map commonly used blue shades to Emerald/Teal accent to keep existing class names working
        blue: {
          200: '#b2dfdb',
          400: '#26a69a',
          500: '#009688',
          600: '#00897b',
          700: '#00796b',
        },
        'accent-emerald': '#009688', // Aksen Utama Emerald
        'text-secondary': '#757575', // Text Sekunder
        white: '#f7f7f7', // Off-white maps to Tailwind's white utility
        black: '#1c1c1c', // Charcoal base maps to Tailwind's black utility
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'ui-serif', 'Georgia'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};