import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const UL = styled.ul`
  color: ${({ theme }) => theme.colors.white};
  columns: 2 auto;
  list-style: square;
`

const Skills = () => (
  <StaticQuery
    query={graphql`
      query Skills($skills: DataJsonSkillsFilterListInput = {}) {
        dataJson(skills: $skills) {
          skills {
            name
          }
        }
      }
    `}
    render={({ dataJson }) => {
      const { skills } = dataJson
      return (
        <UL>
          {skills.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </UL>
      )
    }}
  />
)

export default Skills
