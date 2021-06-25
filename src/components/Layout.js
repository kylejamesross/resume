import React from "react"
import Seo from "../components/seo"
import Providers from "../components/providers/Providers"
import GlobalStyle from "../components/GlobalStyle"
import LayoutGrid from "../components/LayoutGrid"
import LeftLayoutGridColumn from "../components/LeftLayoutGridColumn"
import Content from "../components/Content"

const Layout = ({ children }) => (
  <Providers>
    <GlobalStyle />
    <Seo title="Resume" />
    <Content>
      <LayoutGrid>
        <LeftLayoutGridColumn />
        {children}
      </LayoutGrid>
    </Content>
  </Providers>
)

export default Layout
