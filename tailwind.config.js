const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'mantis': '#79b473',
        "caribbean": "#3c6e71",
        "claret": "#8b1e3f",
        "french": "#b5bad0",
        "desert": "#ecc8ae"
    },},
  },
  plugins: [],
});