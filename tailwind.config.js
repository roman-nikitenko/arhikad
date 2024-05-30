/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'testimonials-animation': {
          '0%, 100%': { transform: 'translateX(-60px)' },
          '50%': { transform: 'translateX(60px)' }
        }
      },
      animation: {
        'testimonials-animation': 'testimonials-animation 15s infinite'
      },
      backgroundImage: {
        'herro-image': "url('/assets/building.jpg')"
      }
    },
  },
  plugins: [],
}

