import React from "react"
import Icon from "../../../images/svg/briefcase.svg"
import RightSection from "../RightSection"
import References from "./References"
import styled from "styled-components"

const PrintOnlySection = styled.div`
  display: none;
  @media only print {
    display: block;
  }
`

const ReferencesSection = () => (
  <PrintOnlySection>
    <RightSection header="References" icon={Icon}>
      <References />
    </RightSection>
  </PrintOnlySection>
)

export default ReferencesSection
