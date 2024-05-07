/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#6379F4",
        secondary: "#",
      },
      backgroundImage: {
        'hero-side': "url('/src/assets/images/Mask Group.png')",
      },
      boxShadow: {
        "shadow-blur": "inset 0 0 0 2000px rgba(27, 27, 27, 0.5)",
      },
      fontFamily: {
        'nunito': ['"Nunito Sans"', 'sans-serif']
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
