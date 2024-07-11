import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
      ],
      mono: ["Noe Display", "Georgia", "Times", "serif"]
    },
    extend : {
      colors: {
       "second" : "rgb(173 143 255)",
       "offset-second" : "#e068fd",
       "button" : "#29293e",
       "offset-button" : "#374151",
       "bg" : "#16161a"
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
