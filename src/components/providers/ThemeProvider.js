import React from "react"
import { ThemeProvider } from "styled-components"

// 681 976
const theme = {
  globalWidth: 850,
  globalHeight: 976,
}

const ThemeProviderComponent = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeProviderComponent
