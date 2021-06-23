import React from "react"
import styled from "styled-components"
import { Line1, Line2, AltLine2 } from "../RightSectionComponents"

const getTimeFormat = date => {
  const d = new Date(date)
  return `${d.toLocaleString("default", { month: "long" })} ${d.getFullYear()}`
}

const StyledJob = styled.div`
  margin: 1rem 0;
`

const Ul = styled.ul`
  margin-block-start: ${({ theme }) => `${theme.spacing.h4}rem`};
  margin-block-end: ${({ theme }) => `${theme.spacing.h4}rem`};
  list-style: square;
`

const Li = styled.li`
  color: ${({ theme }) => theme.colors.black};
`

const Job = ({
  startDate,
  endDate,
  name,
  location,
  isCurrentRole,
  position,
  highlights,
}) => {
  const startTime = getTimeFormat(startDate)
  const endTime = isCurrentRole ? "Current" : getTimeFormat(endDate)
  const timeRange = `${startTime} - ${endTime}`
  return (
    <StyledJob>
      <Line1>
        {timeRange} {">>>"} {position}
      </Line1>
      <Line2>
        {name}, <AltLine2>{location}</AltLine2>
      </Line2>
      <Ul>
        {highlights.map(highlight => (
          <Li>{highlight}</Li>
        ))}
      </Ul>
    </StyledJob>
  )
}

export default Job
