import LayoutGridColumn from "./LayoutGridColumn"
import styled from "styled-components"

const RightLayoutGridColumn = styled(LayoutGridColumn)`
  position: relative;
  border-top: ${({ theme }) =>
    `${theme.font.sizes.base}rem solid ${theme.colors.primary}`};
  border-right: ${({ theme }) =>
    `${theme.font.sizes.base}rem solid ${theme.colors.primary}`};
  background-clip: border-box;
`
export default RightLayoutGridColumn
