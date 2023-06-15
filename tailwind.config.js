/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FCFCFC',
        gray: '#333335',
        darkgray: '#1E1E1E',
        primary: {
          DEFAULT: 'var(--excite-pay-primary)',
          50: 'var(--excite-pay-primary-50)',
          100: 'var(--excite-pay-primary-100)',
          200: 'var(--excite-pay-primary-200)',
          300: 'var(--excite-pay-primary-300)',
          400: 'var(--excite-pay-primary-400)',
          500: 'var(--excite-pay-primary-500)',
          600: 'var(--excite-pay-primary-600)',
          700: 'var(--excite-pay-primary-700)',
          800: 'var(--excite-pay-primary-800)',
          900: 'var(--excite-pay-primary-900)'
        }
      }
    },
  },
  plugins: [],
}

