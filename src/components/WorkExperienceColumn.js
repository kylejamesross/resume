import React from "react"
import WorkExperienceSection from "./sections/work-experience/WorkExperienceSection"
import ReferencesSection from "./sections/references/ReferencesSection"
import RightLayoutGridColumn from "./RightLayoutGridColumn"

const WorkExperienceColumn = () => (
  <RightLayoutGridColumn>
    <WorkExperienceSection />
  </RightLayoutGridColumn>
)

export default WorkExperienceColumn
