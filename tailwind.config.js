/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:  {
        titre: "#5C72E6",
        Carte: "#F6E1CE"
      }
    },
  },
  plugins: [
    // 
    require("daisyui") ,
    // tailwindcss('./tailwind.js'), require("autoprefixer"),
  ]
    ,



}
