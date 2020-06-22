// basic usage
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'
export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)
