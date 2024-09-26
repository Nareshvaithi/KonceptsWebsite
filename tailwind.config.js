/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Heading":["Merriweather","serif"],
        "ContentText":["Loto","sans-serif"]
      },
      colors:{
        "darkblue":"#0a2b6d"
      },
      container:{
        padding:{
          DEFAULT:"1rem",
            sm: "2rem",
            md: "4rem",
            xl: "5rem",
            "2xl": "6rem",
        }
      }
    },
  },
  plugins: [],
}

