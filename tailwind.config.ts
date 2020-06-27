// tailwind.config.js
import toTailwind from '@theme-ui/tailwind'
import theme from './styles/theme' // Path to Theme UI config
module.exports = {
  purge: {
    enabled: true,
    content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {},
  variants: {},
  plugins: [],
  ...toTailwind(theme),
}
