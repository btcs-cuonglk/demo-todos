module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hurri: "Hurricane",
      },
      colors: {
        "purple-200": "#DAC7FC",
        "purple-300": "#CAACFF",
        "purple-500": "#6849CD",
        "purple-700": "#5D0096",
        "purple-900": "#210035",
        "pink-500": "#AD26FF",
      },
      fontSize: {
        13: "13px",
        14: "14px",
        16: "16px",
        18: "18px",
        26: "26px",
        24: "24px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
      minHeight: {
        "1/2": "50%",
      },
      // plugins: [
      //   plugin(function ({ addUtilities }) {
      //     addUtilities({
      //       ".content-auto": {
      //         "content-visibility": "auto",
      //       },
      //       ".content-hidden": {
      //         "content-visibility": "hidden",
      //       },
      //       ".content-visible": {
      //         "content-visibility": "visible",
      //       },
      //     });
      //   }),
      // ],
    },
  },
  plugins: [],
};
