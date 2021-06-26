import styled from "styled-components"

const SlashBorder = styled.div`
  height: 4px;
  background: ${({ color }) => `linear-gradient(
    45deg,
    transparent,
    transparent 33.33%,
    ${color} 33.33%,
    ${color} 66.67%,
    transparent 66.67%,
    transparent 100%
  )`};
  background-size: 4px 100%;
  width: 100%;
  @media only print {
    background: ${({ color }) => color};
    height: 1px;
  }
`

export default SlashBorder
