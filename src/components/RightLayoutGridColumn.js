import React from "react"
import styled from "styled-components"
import LayoutGridColumn from "./LayoutGridColumn"

const StyledLayoutGridColumn = styled(LayoutGridColumn)`
  border-top: ${({ theme }) =>
    `${theme.font.sizes.base}rem solid ${theme.colors.primary}`};
  border-right: ${({ theme }) =>
    `${theme.font.sizes.base}rem solid ${theme.colors.primary}`};
  background-clip: border-box;
`

const RightLayoutGridColumn = () => (
  <StyledLayoutGridColumn>
    <h1>Hello World</h1>
    <h2>Lets go!</h2>
    <h3>another header</h3>
    <h4>more header</h4>
    <h5>give me more</h5>
    <h6>or less</h6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </StyledLayoutGridColumn>
)

export default RightLayoutGridColumn
