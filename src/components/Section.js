import React from "react"
import styled from "styled-components"

const StyledSection = styled.div`
  border-bottom: ${({ theme }) => `1px dotted ${theme.colors.white}`};
  border-width: 0 0 4px 0;
  margin: ${({ theme }) => `${theme.font.sizes.base}rem 0`};
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  &:after {
    content: "";
    height: 2px;
    width: 50px;
    display: block;
    background-color: ${({ theme }) => theme.colors.white};
    margin-top: ${({ theme }) => `${theme.font.sizes.base / 2}rem`};
  }
`

const Section = ({ children, header }) => (
  <StyledSection>
    <H2>{header}</H2>
    {children}
  </StyledSection>
)

export default Section
