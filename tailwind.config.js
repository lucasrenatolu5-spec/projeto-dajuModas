/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fff0f3',
          100: '#ffe0e8',
          200: '#ffc0d0',
          300: '#ff91aa',
          400: '#ff5780',
          500: '#ff2459',
          600: '#e8003d',
          700: '#c40033',
          800: '#a3002e',
          900: '#8a002c',
        },
        blush: {
          50: '#fdf8f6',
          100: '#f9ede8',
          200: '#f2d5ca',
          300: '#e8b5a2',
          400: '#d98b74',
          500: '#c96b52',
          600: '#b55141',
          700: '#974038',
          800: '#7c3635',
          900: '#682f2f',
        },
        nude: {
          50: '#fef9f5',
          100: '#fdf0e6',
          200: '#fae0cc',
          300: '#f5c9a8',
          400: '#eeac7d',
          500: '#e5905a',
          600: '#d67244',
          700: '#b35a36',
          800: '#8f4930',
          900: '#743d2a',
        },
        champagne: '#f7e8da',
        petal: '#f9e4e8',
        dustyrose: '#d4a5a5',
        mauve: '#b08080',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        accent: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'petal-fall': 'petalFall 8s ease-in infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
      },
      boxShadow: {
        soft: '0 4px 30px rgba(196, 154, 138, 0.15)',
        medium: '0 8px 40px rgba(196, 154, 138, 0.2)',
        strong: '0 16px 60px rgba(196, 154, 138, 0.3)',
      },
      backgroundImage: {
        'gradient-rose': 'linear-gradient(135deg, #fff0f3 0%, #fdf8f6 50%, #f9e4e8 100%)',
        'gradient-champagne': 'linear-gradient(135deg, #f7e8da 0%, #fdf8f6 100%)',
        'gradient-overlay': 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)',
      },
    },
  },
  plugins: [],
}
