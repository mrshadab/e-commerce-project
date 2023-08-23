/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "dark-sm": "10px 0px 2px 0 rgba(255, 255, 255, 1)", //White shadow
      },
    },
    screens: {
      // xs: "475px",
      xs: {'max':'475px'},
      ...defaultTheme.screens,
      xsm: {'min':'476px','max':'639px'},
      ...defaultTheme.screens,

      sm: {'min':"640px",'max':'767px'},
      // => @media (min-width: 640px) { ... }

      md: "768px" ,
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
