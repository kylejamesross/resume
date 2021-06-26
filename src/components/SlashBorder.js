import styled from "styled-components"

const SlashBorder = styled.div`
  height: 6px;
  background: ${({ color }) => `linear-gradient(
    45deg,
    transparent,
    transparent 33.33%,
    ${color} 33.33%,
    ${color} 66.67%,
    transparent 66.67%,
    transparent 100%
  )`};
  background-size: 6px 100%;
  width: 100%;
`

export default SlashBorder
