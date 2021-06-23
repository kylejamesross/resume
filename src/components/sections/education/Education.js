import React from "react"
import { StaticQuery, graphql } from "gatsby"
import EducationArea from "./EducationArea"

const Education = () => (
  <StaticQuery
    query={graphql`
      query Education {
        dataJson(education: {}) {
          education {
            institution
            start {
              year
            }
            description
            area
            studyType
            end {
              year
            }
          }
        }
      }
    `}
    render={({ dataJson }) => {
      const { education } = dataJson
      return (
        <>
          {education.map(
            ({
              institution,
              start: { year: startYear },
              description,
              area,
              studyType,
              end: { year: endYear },
            }) => (
              <EducationArea
                startYear={startYear}
                endYear={endYear}
                institution={institution}
                studyType={studyType}
                area={area}
                description={description}
              />
            )
          )}
        </>
      )
    }}
  />
)

export default Education
