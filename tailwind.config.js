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
        },
        'fade-in': {
          from: {
            opacity: 0,
            visibility: 'hidden'
          },
          to: {
            opacity: 1,
            visibility: 'visible'
          }
        },
        'fade-out': {
          from: {
            opacity: 1,
            visibility: 'visible'
          },
          to: {
            opacity: 0,
            visibility: 'hidden'
          }
        },
        'drop': {
          '0%': {},
          '70%': {
            transform: 'translateY(100px)'
          },
          '100%': {
            transform: 'translateY(70px)'
          }
        },
        'drop-up': {
          '0%': {
          transform: 'translateY(100px)'
            },
        '100%': {
        transform: 'translateY(-100%)'
          },
        }
      },
      animation: {
        'testimonials-animation': 'testimonials-animation 15s infinite',
        'fade-in': 'fade-in ease 300ms',
        'fade-out': 'fade-out ease 300ms forwards',
        'drop': 'drop ease 1s forward',
        'drop-up': 'drop ease 1s forward'
      },
      backgroundImage: {
        'herro-image': "url('/assets/building.jpg')"
      },
    },
  },
  plugins: [],
}

