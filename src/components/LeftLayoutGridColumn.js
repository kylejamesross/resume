import React from "react"
import LayoutGridColumn from "./LayoutGridColumn"
import styled from "styled-components"
import ResumeImage from "./ResumeImage"
import Headline from "./Headline"
import SummarySection from "./sections/SummarySection"
import SkillsSection from "./sections/SkillsSection"

const StyledLeftLayoutGridColumn = styled(LayoutGridColumn)`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-top: ${({ theme }) => `${theme.font.sizes.base * 2}rem`};
`

const LeftLayoutGridColumn = () => (
  <StyledLeftLayoutGridColumn>
    <ResumeImage />
    <Headline />
    <SummarySection />
    <SkillsSection />
  </StyledLeftLayoutGridColumn>
)

export default LeftLayoutGridColumn
