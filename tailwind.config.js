/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-tech-blue': '#0a2540',
        'secondary-accent-cyan': '#00d4ff',
      },
    },
  },
  plugins: [],
}