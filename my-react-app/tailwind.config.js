/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     './src/**/*.{js,jsx,ts,tsx}', // Include all JS, JSX, TS, TSX files in the src directory
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

