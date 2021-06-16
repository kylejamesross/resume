import React from "react"
import { ThemeProvider } from "styled-components"

const getTheme = () => {
  const base = 1
  const baseline = 1.5
  const scalingFactor = 1.25

  const getScaledSize = pow => base * scalingFactor ** pow

  console.log(getScaledSize(3))

  return {
    aspectRatioWidth: 8.5,
    aspectRatioHeight: 11,
    minScreenSize: 550,
    maxScreenSize: 1300,
    font: {
      families: {},
      sizes: {
        minFont: 14,
        maxFont: 22,
        base,
        baseline,
        h1: getScaledSize(3),
        h2: getScaledSize(2),
        h3: getScaledSize(1),
        h4: getScaledSize(0),
        h5: getScaledSize(-1),
        h6: getScaledSize(-2),
        p: getScaledSize(0),
      },
    },
  }
}

const ThemeProviderComponent = ({ children }) => (
  <ThemeProvider theme={getTheme}>{children}</ThemeProvider>
)

export default ThemeProviderComponent
