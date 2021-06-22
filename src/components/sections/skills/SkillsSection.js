import React from "react"
import LeftSection from "../LeftSection"
import Skills from "./Skills"
import Icon from "../../../images/svg/coding-brackets-laptop.svg"

const SkillsSection = () => (
  <LeftSection header="Skills" icon={Icon}>
    <Skills />
  </LeftSection>
)

export default SkillsSection
