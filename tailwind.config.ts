// tailwind.config.js
import toTailwind from '@theme-ui/tailwind'
import theme from './styles/theme' // Path to Theme UI config
module.exports = toTailwind({...theme, purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}']})
