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
            colorNeutralDark: "#111",
            colorNeutral: "rgb(246,180,108)",
            colorNeutralLight: "#FBFCFC",
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
