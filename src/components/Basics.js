import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const ProfileImageWrapper = styled.div`
  text-align: center;
`

const ProfileImage = styled.img`
  width: 100%;
  max-width: 150px;
  margin: 0 auto;
  height: auto;
  clip-path: circle(50% at 50% 50%);
  background: ${({ theme }) => theme.colors.profileImageBackground};
`

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

const TitleLineBox = styled.div`
  border-top: ${({ theme }) => `1px groove  ${theme.colors.white}`};
  border-bottom: ${({ theme }) => `1px groove  ${theme.colors.white}`};
  padding: ${({ theme }) => `${theme.font.sizes.base}rem 0`};
  margin: ${({ theme }) => `${theme.font.sizes.base}rem 0`};
`

const P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
`

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`

const Basics = () => (
  <StaticQuery
    query={graphql`
      query Basics {
        dataJson {
          basics {
            name
            image
            label
            summary
          }
        }
      }
    `}
    render={({ dataJson }) => {
      const { basics } = dataJson
      const { image, name, label, summary } = basics
      return (
        <div>
          <ProfileImageWrapper>
            <ProfileImage src={image} width="100%" alt="profile" />
          </ProfileImageWrapper>
          <TitleLineBox>
            <H1>{name}</H1>
            <H3>{label}</H3>
          </TitleLineBox>
          <H2>Summary</H2>
          <P>{summary}</P>
        </div>
      )
    }}
  />
)

export default Basics
