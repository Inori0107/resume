/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightGray: '#F5F5F5',
        darkBlue: '#212A37',
        turquoise: '#40E0D0'
      }
    }
  }
}
