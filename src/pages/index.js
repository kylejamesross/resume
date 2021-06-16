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
        </div>
        <div>
          <h1>Hello World</h1>
          <h2>Lets go!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </LayoutGrid>
    </Content>
  </Providers>
)

export default IndexPage
