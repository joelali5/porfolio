/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        leetcode: "#F45539",
        linkedin: "#0072b1",
        github: "#171515",
        twitter: "#1DA1F2",
        react: "#5ED4F2",
        html: "#f06529",
        git: "#EB4C27",
        css: "#244BDD",
        mongo: "#3F9E38",
        bootstrap: "#7A10F1",
        postgres: "#32648C",
        node: "#649C60",
        mysql:"#01718B",
        tailwind: "#37B6F0",
        red: "#BF6520",
        yellow: "#D5A858",
        grey: "#ededed",
        light: '#CDC26F',
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #BF6520 14.53%, #D5A858 69.36%, #DFD0A5 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};