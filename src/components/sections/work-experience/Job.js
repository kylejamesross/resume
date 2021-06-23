import React from "react"
import styled from "styled-components"

const getTimeFormat = date => {
  const d = new Date(date)
  return `${d.toLocaleString("default", { month: "long" })} ${d.getFullYear()}`
}

const StyledJob = styled.div`
  margin: 1rem 0;
`

const JobLine1 = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
`

const JobLine2 = styled.h4`
  color: ${({ theme }) => theme.colors.black};
`

const AltJobLine2 = styled.span`
  color: ${({ theme }) => `${theme.colors.black}96`};
`

const Ul = styled.ul`
  margin-block-start: ${({ theme }) => `${theme.spacing.h4}rem`};
  margin-block-end: ${({ theme }) => `${theme.spacing.h4}rem`};
  list-style: square;
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
      <JobLine1>
        {timeRange} {">>>"} {position}
      </JobLine1>
      <JobLine2>
        {name}, <AltJobLine2>{location}</AltJobLine2>
      </JobLine2>
      <Ul>
        {highlights.map(highlight => (
          <li>{highlight}</li>
        ))}
      </Ul>
    </StyledJob>
  )
}

export default Job
