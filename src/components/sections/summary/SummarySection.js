import React from "react"
import { StaticQuery, graphql } from "gatsby"
import LeftSection from "../LeftSection"
import styled from "styled-components"
import Icon from "../../../images/svg/modern-technologies-robotics.svg"

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
        <LeftSection header="Summary" icon={Icon}>
          <P>{summary}</P>
        </LeftSection>
      )
    }}
  />
)

export default SummarySection
