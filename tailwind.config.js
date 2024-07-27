/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js/tsx",
  ],
  theme: {
    extend: {
      colors: {
        textblack: "#BFB6EB",
        darkBackground: "#18092A",
        darkpurpleColor: "#BFB6EB",
        lavenderColor: '#BFB6EB',
        mangoColor: '#FFB700',
        backgroundColor: '#18092A',
        Lavender: "#973EFF",
        perpule: "#9A2ED1",
        yellow: "#FFC533",
        white: "#FFFFFF",
        Background: "#18092A",
        Mango: "#FFB700",
        lavenderColor2: "#BFB6EB",
        grayColor: "#BFB6EB",
        shadowGray: "#BFB6EB",
        darkYellow: "#FEB143",
        yellowColor: "#FED843",
        blackBoxBg: "#BFB6EB",
        blackBoxBg2: "#BFB6EB",
        gray: "#BFB6EB",
        lightGray: "#BFB6EB",
        backgroundAppBar: "#451E71",
        sliderColor: "#DABCFF",
        faqColor: "#BFB6EB",
        lightBlack: "#BFB6EB",
        borderColor: "#502C64"
      },
      fontFamily: {
        title: "PlusJakartaSans-Regular",
        title1: "Madani-Arabic-Light",
        subTitle: "Madani-Arabic-Semi-Bold",
        DMSansRegular: "DMSans-Regular",
        DMSansMedium: "DMSans-Medium",
        Inter: "Inter-Regular",
        Oxanium: "Oxanium-Regular",
        fontInter: "Inter-VariableFont",
        IBMPlexSansRegular: "IBMPlexSans-Regular",
        IBMPlexBold: "IBMPlexBold",
        ArabicRegular: "MadaniArabic-Regular",
        MadaExtraLight: "Mada-ExtraLight",
      },

      keyframes: {
        'ltr-linear-infinite': {
          '100%': { transform: 'translateX(70%)' },
        },

      },
      animation: {
        'ltr-linear-infinite': 'ltr-linear-infinite 3s linear infinite',
      },

    },

    screens: {
      sm: { max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      sm1: { min: "400px", max: "767px" },

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },

      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-scrollbar'),

  ],
});
