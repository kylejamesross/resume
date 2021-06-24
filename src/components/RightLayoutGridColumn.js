import React from "react"
import styled from "styled-components"
import LayoutGridColumn from "./LayoutGridColumn"
import WorkExperienceSection from "./sections/work-experience/WorkExperienceSection"
import ReferencesSection from "./sections/references/ReferencesSection"

const StyledLayoutGridColumn = styled(LayoutGridColumn)`
  border-top: ${({ theme }) =>
    `${theme.font.sizes.base}rem solid ${theme.colors.primary}`};
  border-right: ${({ theme }) =>
    `${theme.font.sizes.base}rem solid ${theme.colors.primary}`};
  background-clip: border-box;
`

const RightLayoutGridColumn = () => (
  <StyledLayoutGridColumn>
    <WorkExperienceSection />
    <ReferencesSection />
  </StyledLayoutGridColumn>
)

export default RightLayoutGridColumn
