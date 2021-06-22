import React from "react"
import styled, { useTheme } from "styled-components"
import Heading from "../Heading"

const StyledSection = styled.section`
  margin: ${({ theme }) => `${theme.font.sizes.base}rem 0`};
`

const RightSection = ({ children, header, icon }) => {
  const theme = useTheme()
  return (
    <StyledSection>
      <Heading
        iconColor={theme.colors.black}
        textColor={theme.colors.black}
        text={header}
        icon={icon}
      />
      {children}
    </StyledSection>
  )
}

export default RightSection
