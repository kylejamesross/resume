import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Ul = styled.ul`
  color: ${({ theme }) => theme.colors.white};
  columns: 2 auto;
  list-style: square;
`

const Skills = () => (
  <StaticQuery
    query={graphql`
      query Skills {
        dataJson {
          skills {
            name
          }
        }
      }
    `}
    render={({ dataJson }) => {
      const { skills } = dataJson
      return (
        <Ul>
          {skills.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </Ul>
      )
    }}
  />
)

export default Skills
