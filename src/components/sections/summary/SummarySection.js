import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Section from "../../Section"
import styled from "styled-components"
import SummarySectionIcon from "./SummarySectionIcon"

const P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => `${theme.spacing.h2}rem`};
`

const SummarySection = () => (
  <StaticQuery
    query={graphql`
      query Summary {
        dataJson {
          basics {
            summary
          }
        }
      }
    `}
    render={({ dataJson }) => {
      const { basics } = dataJson
      const { summary } = basics
      return (
        <Section header="Summary" icon={SummarySectionIcon}>
          <P>{summary}</P>
        </Section>
      )
    }}
  />
)

export default SummarySection
