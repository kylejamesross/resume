import React from "react"
import styled, { useTheme } from "styled-components"
import Heading from "../Heading"

const StyledSection = styled.section`
  border-bottom: ${({ theme }) => `1px dotted ${theme.colors.white}`};
  border-width: 0 0 4px 0;
  margin: ${({ theme }) => `${theme.font.sizes.base}rem 0`};
`

const LeftSection = ({ children, header, icon }) => {
  const theme = useTheme()
  return (
    <StyledSection>
      <Heading
        iconColor={theme.colors.primary}
        textColor={theme.colors.white}
        text={header}
        icon={icon}
      />
      {children}
    </StyledSection>
  )
}

export default LeftSection
