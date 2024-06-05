/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        small: "430px",
        desktop: "1430px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "2xsm": "9px",
        "xsm": "11px",
        "custom-sm": "13px",
        "custom-3xl": "32px",
      },
      colors: {
        carrotOrange: "#ec6707",
        lightOrange: "#FEF8F3",
        jetBlack: "#191919",
        mountainMist: "#adadae",
        silverChalice: "#4a4a4a",
        gunSmoke: "#f5f5f5",
        whiteSmoke: "#c6c6c6",
        green: "#26a212",
        charcoalGrey: "#646464",
        lightGrey: "#dedede",
        darkGrey: "#b9c0c9",
      },
    },
  },
  plugins: [],
}

