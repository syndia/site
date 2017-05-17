module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "60rem",
            colorPrimaryDark: "rgb(8,30,90)",
            colorPrimary: "rgb(20,90,145)",
            colorSecondaryDark: "rgb(34,27,44)",
            colorSecondary: "rgb(160,90,125)",
            colorNeutralDark: "rgb(71,66,62)",
            colorNeutral: "rgb(225,215,210)",
            colorNeutralLight: "rgb(225,217,206)",
            colorText: "#333",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
