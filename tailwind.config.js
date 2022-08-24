/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#012157",
        lightblue: "#C6C5FF",
        lightblue2: "#A89FFF",
        green: "#22B843",
        dark: "#02000D",
      },
      fontFamily: {
        "Passion-One": "Passion One",
        "vectro-bold": "VectroBold",
        "zona-regular": "ZonaRegular",
        "zona-semibold": "ZonaSemiBold",
        "zona-bold": "ZonaBold",
      },
      fontSize: {
        header: "46px",
        large: "80px",
        mid: "18px",
      },
      screens: {
        mid: "1193px",
      },
      lineHeight: {
        '75': '75px',
      }
    },
  },
  plugins: [],
};
