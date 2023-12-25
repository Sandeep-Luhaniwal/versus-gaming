/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "12px",
      },
    },
    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
      },
      fontFamily: {
        normalidad: "normalidad",
      },
      colors: {
        lightBlack: "#151A1F",
        lightGrey: "#1F272E",
        "grey-400": "#6E7681",
        darkGrey: "#545E6C",
        "black-400": "#4D545E",
        "black-500": "#0D1012",
        "black-600": "#090B0C",
        "green-yellow": "#D4FF27",
        "red-orange": "#FE3838",
      },
    },
  },
  plugins: [],
}
