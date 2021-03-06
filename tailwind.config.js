module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      dirtyBlue: "#2a9fd8",
      dirtyGreen: "#6cb043"
    }),
    borderColor: theme => ({
      ...theme("colors"),
      dirtyBlue: "#2a9fd8",
      dirtyGreen: "#6cb043"
    }),
    extend: {},
    spacing: {
      "20%": "20%",
      "30%": "30%",
      "40%": "40%",
      "50%": "50%",
      "0": 0,
      "1": "1px",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "5": "5px",
      "6": "6px",
      "7": "7px",
      "8": "8px",
      "9": "9px",
      "10": "10px",
      "15": "15px",
      "20": "20px",
      "25": "25px",
      "30": "30px",
      "35": "35px",
      "40": "40px",
      "50": "50px",
      "60": "60px",
      "70": "70px",
      "80": "80px",
      "90": "90px",
      "100": "100px",
      "200": "200px",
      "250": "250px",
      "300": "300px",
      "400": "400px",
      "500": "500px",
      "600": "600px",
      "700": "700px",
      "800": "800px",
      "900": "900px",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
