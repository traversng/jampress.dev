// tailwind.config.js
const toTailwind = require('@theme-ui/tailwind')
const theme = require('./styles/theme') // Path to Theme UI config
module.exports = toTailwind(theme)
