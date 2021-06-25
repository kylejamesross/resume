import React from "react"
import RightSection from "../RightSection"
import Icon from "../../../images/svg/coding-brackets.svg"
import Portfolio from "./Portfolio"

const PortfolioSection = () => (
  <RightSection header="Portfolio" icon={Icon}>
    <Portfolio />
  </RightSection>
)

export default PortfolioSection
