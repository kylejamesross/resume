import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 0.5rem 0;
  text-align: center;
`

const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.families.subHeader};
  margin: 0;
  text-align: center;
`

const HeadlineWrapper = styled.div`
  padding: ${({ theme }) => `${theme.font.sizes.base}rem 0`};
  margin: ${({ theme }) => `${theme.font.sizes.base}rem 0`};
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
          <HeadlineWrapper>
            <H1>{name}</H1>
            <H3>{label}</H3>
          </HeadlineWrapper>
        </div>
      )
    }}
  />
)

export default Headline
