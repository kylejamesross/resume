import React from "react"
import styled, { useTheme } from "styled-components"
import Heading from "../Heading"
import SlashBorder from "../SlashBorder"

const StyledSection = styled.section`
  margin: ${({ theme }) => `${theme.font.sizes.base}rem 0`};
  > *:last-child {
    margin: ${({ theme }) => `${theme.spacing.h2}rem 0`};
    margin-block-start: ${({ theme }) => `${theme.spacing.h2}rem`};
    margin-block-end: ${({ theme }) => `${theme.spacing.h2}rem`};
  }
`

const LeftSection = ({ children, header, icon }) => {
  const theme = useTheme()
  return (
    <>
      <StyledSection>
        <Heading
          iconColor={theme.colors.white}
          textColor={theme.colors.white}
          text={header}
          icon={icon}
        />
        {children}
      </StyledSection>
      <SlashBorder color={theme.colors.white} />
    </>
  )
}

export default LeftSection
