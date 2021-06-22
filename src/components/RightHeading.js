import React from "react"
import Heading from "./Heading"
import { useTheme } from "styled-components"

const RightHeading = ({ text, icon }) => {
  const theme = useTheme()
  return (
    <Heading
      textColor={theme.colors.black}
      iconColor={theme.colors.black}
      text={text}
      icon={icon}
    />
  )
}

export default RightHeading
