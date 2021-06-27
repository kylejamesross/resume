import React from "react"
import styled from "styled-components"
import GithubIcon from "../../../images/svg/github.svg"
import WebsiteIcon from "../../../images/svg/website-global.svg"

const StyledProject = styled.div`
  margin: ${({ theme }) => `${theme.font.sizes.base}rem 0`};
  svg {
    margin-right: ${({ theme }) => `${theme.font.sizes.base / 3}rem`};
    width: ${({ theme }) => `${theme.font.sizes.base * 1.5}rem`};
    height: ${({ theme }) => `${theme.font.sizes.base * 1.5}rem`};
    path {
      fill: ${({ theme }) => theme.colors.black};
    }
  }
`

const ProjectLink = styled.div`
  display: flex;
  align-items: center;
`

const DisplayName = styled.h3`
  color: ${({ theme }) => theme.colors.black};
`
const A = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.sizes.a};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const ProjectImage = styled.img`
  width: auto;
  height: 75px;
`

const P = styled.p`
  color: ${({ theme }) => theme.colors.black};
`

const Languages = styled.p`
  color: ${({ theme }) => `${theme.colors.black}A6`};
`

const Project = ({
  displayName,
  githubUrl,
  images,
  languages,
  libraries,
  summary,
  website,
}) => {
  const [image] = images
  const {
    resolutions: {
      mobile: { url: projectImageUrl },
    },
  } = image
  const tools = [...languages, ...libraries].join(", ")
  return (
    <StyledProject>
      <A href={website}>
        <ProjectImage
          alt={displayName}
          src={projectImageUrl}
          height="75px"
          width="auto"
        />
      </A>
      <DisplayName>{displayName}</DisplayName>
      {githubUrl && (
        <ProjectLink>
          <GithubIcon />
          <A href={githubUrl}>{githubUrl}</A>
        </ProjectLink>
      )}
      {website && (
        <ProjectLink>
          <WebsiteIcon />
          <A href={website}>{website}</A>
        </ProjectLink>
      )}
      <P>{summary}</P>
      <Languages>{tools}</Languages>
    </StyledProject>
  )
}

export default Project
