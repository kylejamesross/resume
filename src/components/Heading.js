import React from "react"
import styled from "styled-components"

const H2 = styled.h2`
  display: flex;
  align-items: center;
  color: ${props => props.textColor};
  text-transform: uppercase;
  svg {
    width: 3rem;
    height: 3rem;
    margin-right: ${({ theme }) => `${theme.font.sizes.base * 0.666}rem`};
    path {
      fill: ${props => props.iconColor};
    }
  }
`

const Heading = ({ textColor, iconColor, text, icon: Icon }) => (
  <H2 textColor={textColor} iconColor={iconColor}>
    {Icon && <Icon />}
    {text}
  </H2>
)

export default Heading
