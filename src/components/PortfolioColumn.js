import React from "react"
import RightLayoutGridColumn from "./RightLayoutGridColumn"
import PortfolioSection from "./sections/portfolio/PortfolioSection"
import SiteLink from "./SiteLink"

const PortfolioColumn = () => (
  <RightLayoutGridColumn>
    <SiteLink to="/">Work Experience</SiteLink>
    <PortfolioSection />
  </RightLayoutGridColumn>
)

export default PortfolioColumn
