const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  corePlugins: {
    container: false
  },
  theme: {
    flex: {
      '30': '0 0 30%',
      '15': '0 0 15%',
      '55': '0 0 55%'
    },
    extend: {
      fontFamily: {
        'sans': ['Rubik','Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        primary: colors.yellow,
        instagram: "#E1306C",
        linkedin: "#2867B2",
        github: "#211F1F",
        dribbble: "#EA4C89",
        dev: "#0a0a0a",
        facebook: "#3B5998",
        twitter: "#1DA1F2",
        google: "#DB4437",
      },
    },
  },
};
