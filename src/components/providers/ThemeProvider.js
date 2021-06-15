import React from "react"
import { ThemeProvider } from "styled-components"

// 8.5 11
const theme = {
  aspectRatioWidth: 8.5,
  aspectRatioHeight: 11,
}

const ThemeProviderComponent = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeProviderComponent
