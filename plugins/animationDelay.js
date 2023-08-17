const plugin = require("tailwindcss/plugin");
const animationDelay = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "animation-delay": (value) => {
          return { animationDelay: value };
        },
      },
      {
        values: theme("animationDelay"),
      }
    );
  },
  {
    theme: {
      animatonDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        100: "400ms",
        100: "500ms",
        100: "600ms",
        100: "700ms",
        100: "800ms",
      },
    },
  }
);
module.exports = animationDelay;
