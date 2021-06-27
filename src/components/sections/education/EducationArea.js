import React from "react"
import styled from "styled-components"

const P = styled.p`
  color: ${({ theme }) => theme.colors.white};
`

const H4 = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => `${theme.font.sizes.h4}rem`};
  margin: ${({ theme }) => `${theme.spacing.h4}rem 0`};
`

const StudyArea = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.families.subHeader};
  font-size: ${({ theme }) => `${theme.font.sizes.h4}rem`};
  margin: ${({ theme }) => `${theme.spacing.h4}rem 0`};
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
