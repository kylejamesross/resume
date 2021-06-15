import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Providers from "../components/providers/Providers"
import GlobalStyle from "../components/GlobalStyle"
import LayoutGrid from "../components/LayoutGrid"
import Content from "../components/Content"

const IndexPage = () => (
  <Providers>
    <GlobalStyle />
    <Seo title="Kyle Ross - Resume" />
    <Content>
      <LayoutGrid>
        <div>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
          />
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
          />
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
          />
        </div>
        <div>
          <h1>Hello World</h1>
        </div>
      </LayoutGrid>
    </Content>
  </Providers>
)

export default IndexPage
