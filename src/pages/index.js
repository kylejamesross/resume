import * as React from "react"
import Seo from "../components/seo"
import Providers from "../components/providers/Providers"
import GlobalStyle from "../components/GlobalStyle"
import LayoutGrid from "../components/LayoutGrid"
import LeftLayoutGridColumn from "../components/LeftLayoutGridColumn"
import RightLayoutGridColumn from "../components/RightLayoutGridColumn"
import Content from "../components/Content"

const IndexPage = () => (
  <Providers>
    <GlobalStyle />
    <Seo title="Kyle Ross - Resume" />
    <Content>
      <LayoutGrid>
        <LeftLayoutGridColumn />
        <RightLayoutGridColumn />
      </LayoutGrid>
    </Content>
  </Providers>
)

export default IndexPage
