/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B4576",
          50: "#E6F0F7",
          100: "#CCE1EF",
          200: "#99C3DF",
          300: "#66A5CF",
          400: "#3387BF",
          500: "#0B4576",
          600: "#093A62",
          700: "#072D4D",
          800: "#052039",
          900: "#031325",
        },
        secondary: "#4f46e5",
        accent: "#f59e0b",
        dark: "#1f2937",
        light: "#f3f4f6",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 