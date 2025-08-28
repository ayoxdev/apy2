/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        raspberry: '#E53E3E',
        mango: '#F6AD55',
        kiwi: '#68D391',
        cream: '#FFFBF0',
      },
      fontFamily: {
        sans: ['Gorgonzo', 'system-ui', 'serif'],
      },
      animation: {
        'bounce-soft': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px rgba(229, 62, 62, 0.3)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-sm': {
          '-webkit-text-stroke-width': '0.5px',
        },
        '.text-stroke-md': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-raspberry': {
          '-webkit-text-stroke-color': '#E53E3E',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': '#000',
        },
      }
      addUtilities(newUtilities, ['responsive'])
    },
  ],
}
