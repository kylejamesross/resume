import React from "react"
import WorkExperienceSection from "./sections/work-experience/WorkExperienceSection"
import ReferencesSection from "./sections/references/ReferencesSection"
import RightLayoutGridColumn from "./RightLayoutGridColumn"
import SiteLink from "./SiteLink"

const WorkExperienceColumn = () => (
  <RightLayoutGridColumn>
    <SiteLink to="/portfolio">Portfolio</SiteLink>
    <WorkExperienceSection />
    <ReferencesSection />
  </RightLayoutGridColumn>
)

export default WorkExperienceColumn
