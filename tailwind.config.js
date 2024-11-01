/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '5xl': '3rem',  
        '6xl': '4rem',
      },
      height: { 
        '448': '22rem',
        '768': '48rem',  
      },
    },
  },
  plugins: [],
};
