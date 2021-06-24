import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Reference from "./Reference"

const References = () => (
  <StaticQuery
    query={graphql`
      query References {
        dataJson {
          references {
            name
            reference
          }
        }
      }
    `}
    render={({ dataJson }) => {
      const { references } = dataJson
      return (
        <div>
          {references.map(({ name, reference }) => (
            <Reference name={name} reference={reference} />
          ))}
        </div>
      )
    }}
  />
)

export default References
