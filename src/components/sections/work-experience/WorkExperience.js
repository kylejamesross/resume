import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const getTimeFormat = date => {
  const d = new Date(date)
  return `${d.toLocaleString("default", { month: "long" })} ${d.getFullYear()}`
}

const StyledJob = styled.div`
  margin: 1rem 0;
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
      <div>{timeRange}</div>
      <div>{position}</div>
      <div>{name}</div>
      <ul>
        {highlights.map(highlight => (
          <li>{highlight}</li>
        ))}
      </ul>
    </StyledJob>
  )
}

const WorkExperience = () => (
  <StaticQuery
    query={graphql`
      query WorkExperience {
        dataJson(basics: {}) {
          work {
            name
            location
            description
            position
            url
            startDate
            endDate
            summary
            isCurrentRole
            company
            website
            highlights
          }
        }
      }
    `}
    render={({ dataJson }) => {
      const { work: jobs } = dataJson
      return (
        <div>
          {jobs.map(
            ({
              startDate,
              endDate,
              name,
              location,
              isCurrentRole,
              position,
              highlights,
            }) => (
              <Job
                startDate={startDate}
                endDate={endDate}
                name={name}
                location={location}
                position={position}
                isCurrentRole={isCurrentRole}
                highlights={highlights}
              />
            )
          )}
        </div>
      )
    }}
  />
)

export default WorkExperience
