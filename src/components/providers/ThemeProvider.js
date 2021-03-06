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
      primary: "#de2520",
      darkPrimary: "#c7211c",
      secondary: "#2d2d2d",
      black: "#2d2d2d",
      white: "#fff",
      profileImageBackground: "#b5b6c2",
    },
    font: {
      families: {
        unloaded: {
          header: "Helvetica, sans-serif",
          subHeader: "Helvetica, sans-serif",
          paragraph: "'New Times Roman', sans-serif",
        },
        header: "'Assistant', sans-serif",
        subHeader: "'Assistant', sans-serif",
        paragraph: "'Noto Sans JP', sans-serif",
      },
      sizes: {
        mobileFont: 17,
        minFont: 15,
        maxFont: 17,
        base,
        baseline,
        h1: getScaledSize(3),
        h2: getScaledSize(2),
        h3: getScaledSize(1),
        h4: getScaledSize(0),
        h5: getScaledSize(-1),
        h6: getScaledSize(-2),
        p: getScaledSize(-1),
        a: getScaledSize(-1),
        li: getScaledSize(-1),
      },
    },
    spacing: {
      h1: getScaledSize(0),
      h2: getScaledSize(-1),
      h3: getScaledSize(-2),
      h4: getScaledSize(-3),
      h5: getScaledSize(-4),
      h6: getScaledSize(-5),
      p: getScaledSize(-1),
      a: getScaledSize(-1),
    },
  }
}

const ThemeProviderComponent = ({ children }) => (
  <ThemeProvider theme={getTheme}>{children}</ThemeProvider>
)

export default ThemeProviderComponent
