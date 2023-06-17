/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'confirm':'#220930',
      },
      backgroundImage:{
        'desktop':"url(./images/bg-main-desktop.png)",
        'mobile':"url(./images/bg-main-mobile.png)",
        'cardFront': "url(./images/bg-card-front.png)",
        'cardBack': "url(./images/bg-card-back.png)",
      },
      screens: {
        xl: '1440px',
      }
    },
  },
  plugins: [],
};
