/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A19', // Replace with your primary color
        button: '#133E87', // Optional: define a secondary color
        text: '#F3F3E0', // Optional: define a text color
      },
    },
  },
  variants: {},
  plugins: [],
}

