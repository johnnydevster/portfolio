// prettier-ignore
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '14': '2.5',
      },
    },
  },
  variants: {
    extend: { filter: ["hover"], height: ["hover"], padding: ["hover"] },
  },
  plugins: [],
};
