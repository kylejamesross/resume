import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 0.25rem 0;
  text-align: center;
`

const H3 = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.families.subHeader};
  font-size: ${({ theme }) => `${theme.font.sizes.h3}rem`};
  margin: ${({ theme }) => `${theme.spacing.h3}rem 0`};
  font-weight: 300;
  margin: 0;
  text-align: center;
`

const Headline = () => (
  <StaticQuery
    query={graphql`
      query Headline {
        dataJson {
          basics {
            name
            label
          }
        }
      }
    `}
    render={({ dataJson }) => {
      const { basics } = dataJson
      const { name, label } = basics
      return (
        <div>
          <H1>{name}</H1>
          <H3>{label}</H3>
        </div>
      )
    }}
  />
)

export default Headline
