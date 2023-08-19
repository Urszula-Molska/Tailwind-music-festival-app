const plugin = require("tailwindcss/plugin");

//addUtilities allow us to create static classes while
//matchUtilities help us to create dynamic classes

const tableCaption = plugin(function ({ addUtilities }) {
    addUtilities({
        ".caption-bottom": {
            "caption-side": "bottom",
        },
        ".caption-top": {
            "caption-side": "top",
        }
    })
})

module.exports = tableCaption;
