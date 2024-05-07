/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: '#6379F4',
        dark: '#3A3D42',
        error: '#FF5B37',
        success: '#1EC15F',
        background: '#FAFCFF',
        list: '#4D4B57',
        listSecondary: '#7A7886',
      },
      backgroundImage: {
        'hero-side': "url('/src/assets/images/Mask Group.png')",
      },
      boxShadow: {
        'shadow-blur': 'inset 0 0 0 2000px rgba(27, 27, 27, 0.5)',
      },
      maxWidth: {
        desktop: '1140px',
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
}
