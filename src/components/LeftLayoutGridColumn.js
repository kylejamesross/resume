import React from "react"
import LayoutGridColumn from "./LayoutGridColumn"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledLeftLayoutGridColumn = styled(LayoutGridColumn)`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-top: ${({ theme }) => `${theme.font.sizes.base * 2}rem`};
`

const LeftLayoutGridColumn = () => (
  <StyledLeftLayoutGridColumn>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
    />
  </StyledLeftLayoutGridColumn>
)

export default LeftLayoutGridColumn
