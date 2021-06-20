import React from "react"
import styled from "styled-components"

const StyledSection = styled.div`
  border-bottom: ${({ theme }) => `1px dotted ${theme.colors.white}`};
  border-width: 0 0 4px 0;
  margin: ${({ theme }) => `${theme.font.sizes.base}rem 0`};
`

const H2 = styled.h2`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  svg {
    width: 3rem;
    height: 3rem;
    margin-right: ${({ theme }) => `${theme.font.sizes.base * 0.666}rem`};
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`

const Section = ({ children, header, icon: Icon }) => (
  <StyledSection>
    <H2>
      {Icon && <Icon />}
      {header}
    </H2>
    {children}
  </StyledSection>
)

export default Section
