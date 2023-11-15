/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "60px": "60px",
        "56px": "56px",
        "55px": "55px",
      },
      width: {
        "909px": "909px",
        "426px": "426px",
        "237px": "237px",
        "881px": "881px",
        "327px": "182px",
        "729px": "729px",
        mywidth30: "30vw",
        mywidth60: "60vw",
        parcent: "70%",
      },
      height: {
        "576px": "576px",
        "48px": "48px",
        "879px": "879px",
        "86px": "86px",
        "42px": "42px",
        "182px": "182px",
        "786px": "786px",
      },
      colors: {
        white: "#ffffff",
        page: "#EFF2F5",
        stroke: "#DEDFE2",
        primary: "#0052FE",
        inputc: "#A0AEC0",
        downborder: "#C9CFDD99",
      },
      screens: {
        mysc: "1440px",
        "2sm": "200px",
      },
    },
  },
  plugins: [],
};
