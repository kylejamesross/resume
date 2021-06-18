import React from "react"
import LayoutGridColumn from "./LayoutGridColumn"
import styled from "styled-components"
import Basics from "./Basics"

const StyledLeftLayoutGridColumn = styled(LayoutGridColumn)`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-top: ${({ theme }) => `${theme.font.sizes.base * 2}rem`};
`

const LeftLayoutGridColumn = () => (
  <StyledLeftLayoutGridColumn>
    <Basics />
  </StyledLeftLayoutGridColumn>
)

export default LeftLayoutGridColumn
