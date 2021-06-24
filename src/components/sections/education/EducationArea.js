import React from "react"
import styled from "styled-components"

const P = styled.p`
  color: ${({ theme }) => theme.colors.white};
`

const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.white};
`

const StudyArea = styled(H4)`
  font-family: ${({ theme }) => theme.font.families.subHeader};
  font-weight: 300;
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
    <H4>{institution}</H4>
    <StudyArea>
      {studyType} in {area}
    </StudyArea>
    <P>{description}</P>
  </div>
)

export default EducationArea
