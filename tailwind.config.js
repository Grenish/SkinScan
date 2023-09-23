/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        difBlack: '#153131',
        difPink :'#E08DAC',
        difBlue :'#6A7FDB',
        difCyan :'#57E2E5',
        difGreen :'#45CB85',
      },
      fontFamily: {
        'kenwave' : ['Knewave', 'cursive'],
      }
    },
  },
  plugins: [],
}

