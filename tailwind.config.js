import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        'Tropical-Lagoon' : '#00b9ae',
        'Deep-Sea-Emerald' : '#037171',
        'Midnight-Pine' : '#03312e',
        'Vibrant-Turquoise' : '#02c3bd',
        'Mystic-Teal' : '#009f93',
        'Turquoise-Slate' : '#c4fff9'
      },
      fontFamily : {
        'logo' : ['logo-font', 'sans-serif'],
        'slogan' : ['slogan-font', 'sans-serif'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}