module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customMedia: {
          maxWidthLargePhone: "(width <= 530px)",
        },
        customProperties: {
          variables: {
            // Media Queries
            breakpointPhone: "320px",
            breakpointLargePhone: "530px",

            maxWidth: "60em",

            centered: {
              display: "flex",
              'align-items': 'center',
              'justify-content': 'center',
            },

            colorPrimaryDark: "rgb(8,30,90)",
            colorPrimary: "rgb(20,90,145)",
            colorSecondaryDark: "rgb(34,27,44)",
            colorSecondary: "rgb(160,90,125)",
            colorNeutralDark: "rgb(71,66,62)",
            colorNeutral: "rgb(225,215,210)",
            colorNeutralLight: "rgb(225,217,206)",
            colorText: "#333",

            colorBlack: "#0F0F0F",

            colorGrayDarkest: "color(gray(15%))",
            colorGrayDarker: "color(gray(25%))",
            colorGrayDark: "color(gray(35%))",
            colorGray:"color(gray)",
            colorGrayLight: "color(gray(65%))",
            colorGrayLighter: "color(gray(75%))",
            colorGrayLightest: "color(gray(85%))",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
