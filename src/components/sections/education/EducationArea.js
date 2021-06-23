import React from "react"
import { Line1, Line2 } from "../RightSectionComponents"
import styled from "styled-components"

const P = styled.p`
  color: ${({ theme }) => theme.colors.black};
`

const EducationArea = ({
  startYear,
  endYear,
  institution,
  studyType,
  area,
  description,
}) => (
  <div>
    <Line1>
      {startYear} - {endYear} {">>>"} {institution}
    </Line1>
    <Line2>
      {studyType} in {area}
    </Line2>
    <P>{description}</P>
  </div>
)

export default EducationArea
