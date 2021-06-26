import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Project from "./Project"
import SlashBorder from "../../SlashBorder"

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query Portfolio {
        dataJson {
          projects {
            displayName
            githubUrl
            images {
              resolutions {
                mobile {
                  url
                }
              }
            }
            summary
            languages
            libraries
            website
          }
        }
      }
    `}
    render={({ dataJson }) => {
      const { projects } = dataJson
      return (
        <>
          {projects.map(
            ({
              displayName,
              githubUrl,
              images,
              languages,
              libraries,
              summary,
              website,
            }) => (
              <div key={displayName}>
                <Project
                  key={displayName}
                  displayName={displayName}
                  githubUrl={githubUrl}
                  images={images}
                  languages={languages}
                  libraries={libraries}
                  summary={summary}
                  website={website}
                />
                <SlashBorder color="#2d2d2d98" />
              </div>
            )
          )}
        </>
      )
    }}
  />
)

export default Portfolio
