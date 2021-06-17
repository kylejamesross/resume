import React from "react"
import { ThemeProvider } from "styled-components"

const getTheme = () => {
  const base = 1
  const baseline = 1.5
  const scalingFactor = 1.25

  const getScaledSize = pow => base * scalingFactor ** pow

  return {
    aspectRatioWidth: 8.5,
    aspectRatioHeight: 11,
    minScreenSize: 550,
    maxScreenSize: 1300,
    colors: {
      primary: "#f0b117",
      secondary: "#2d2d2d",
    },
    font: {
      families: {
        header: "'Raleway', sans-serif",
        subHeader: "'Assistant', sans-serif",
        paragraph: "'Noto Serif JP', sans-serif",
      },
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
    spacing: {
      h1: getScaledSize(4),
      h2: getScaledSize(3),
      h3: getScaledSize(2),
      h4: getScaledSize(1),
      h5: getScaledSize(0),
      h6: getScaledSize(-1),
      p: getScaledSize(1),
    },
  }
}

const ThemeProviderComponent = ({ children }) => (
  <ThemeProvider theme={getTheme}>{children}</ThemeProvider>
)

export default ThemeProviderComponent
