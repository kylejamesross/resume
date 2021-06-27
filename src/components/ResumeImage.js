import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const StyledResumeImage = styled.div`
  text-align: center;
`

const Image = styled.img`
  width: 100%;
  max-width: 100px;
  margin: 0 auto;
  height: auto;
  clip-path: circle(50% at 50% 50%);
  background: ${({ theme }) => theme.colors.profileImageBackground};
`

const ResumeImage = () => (
  <StaticQuery
    query={graphql`
      query ResumeImage {
        dataJson {
          basics {
            image
          }
        }
      }
    `}
    render={({ dataJson }) => {
      const { basics } = dataJson
      const { image } = basics
      return (
        <StyledResumeImage>
          <Image src={image} width="100px" height="100px" alt="profile" />
        </StyledResumeImage>
      )
    }}
  />
)

export default ResumeImage
