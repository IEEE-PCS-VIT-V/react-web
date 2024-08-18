const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      transitionDelay: {
        '650': '650ms',
        '600': '600ms'
      },
      transitionDuration: {
        '500': '500ms',
      },
      translate: {
        '-10': '-10px',
      },
      colors: {
        'sky-blue': '#AEDFFB',
        'dark-blue': '#00629c',
        'comp':"#5e7ed9"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #d8f2f3 , #ebf9f9)',
      },
      width: {
        '100': '25rem',
        '104': '26rem',  
        '108': '27rem',  
        '112': '28rem', 
        '120': '30rem',  
      },
    },
  },
  variants:{
    extend: {
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      transitionDelay: ['hover', 'focus'],
      transitionDuration: ['hover', 'focus'],
      opacity: ['hover', 'focus'],
      transform: ['hover', 'focus'],
    },
},
  plugins: [
    flowbite.plugin(),
  ],
}