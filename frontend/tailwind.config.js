module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    mode: "jit",
    darkMode: "class",
    extend: {
      colors: {
        lightColore: "#ffefe1",
        darckColore: "#0f0d36",
        blueColore: "#262c9c",
        goldinColore: "#fdc128",
        selverColore: "#7b7b7b",
      },
    },
  },
  plugins: [],
};
