import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Job from "./Job"

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
