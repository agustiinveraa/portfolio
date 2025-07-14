/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' for system preference
  theme: {
    extend: {
      fontFamily: {
        sans: ['Onest', 'sans-serif'],
      },
      animation: {
        'spin': 'spin 2s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
    },
  },
  plugins: [
    // Utilizando import dinámico para @tailwindcss/forms
  ],
}
