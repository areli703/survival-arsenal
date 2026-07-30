/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        army: {
          50: '#f5f5f0',
          100: '#e8e8dc',
          500: '#4a4a35',
          600: '#3a3a2a',
          700: '#2a2a1f',
          900: '#1a1a14',
        },
        accent: {
          500: '#d97706',
          600: '#c2620a',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
