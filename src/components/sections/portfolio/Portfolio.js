import React from "react"
import { StaticQuery, graphql } from "gatsby"

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
            name
            repositoryUrl
            summary
            type
            languages
            libraries
            primaryLanguage
            website
          }
        }
      }
    `}
    render={({ dataJson }) => {
      const { projects } = dataJson
      return (
        <div>
          {projects.map(
            ({
              displayName,
              githubUrl,
              images,
              languages,
              libraries,
              name,
              primaryLanguage,
              repositoryUrl,
              summary,
              type,
              website,
            }) => (
              <div style={{ margin: "1rem 0" }}>
                <div>{displayName}</div>
                <div>{githubUrl}</div>
                <div>{name}</div>
                <div>{primaryLanguage}</div>
                <div>{repositoryUrl}</div>
                <div>{summary}</div>
                <div>{type}</div>
                <div>{website}</div>
              </div>
            )
          )}
        </div>
      )
    }}
  />
)

export default Portfolio
