import React from "react"
import styled from "styled-components"
import PhoneIcon from "../../../images/svg/phone.svg"
import LocationIcon from "../../../images/svg/location-point.svg"
import LinkedInIcon from "../../../images/svg/linked-in.svg"
import GithubIcon from "../../../images/svg/github.svg"
import WebsiteIcon from "../../../images/svg/website-global.svg"
import EmailIcon from "../../../images/svg/e-mail.svg"
import { StaticQuery, graphql } from "gatsby"

const Ul = styled.ul`
  color: ${({ theme }) => theme.colors.white};
  list-style: none;
  padding-inline-start: 0;
  padding-inline-end: 0;
  margin-inline-start: ${({ theme }) => `${theme.font.sizes.base / 2}rem`};
  li {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.5;

    svg {
      width: ${({ theme }) => `${theme.font.sizes.base * 1.5}rem`};
      margin-right: ${({ theme }) => `${theme.font.sizes.base / 2}rem`};
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
    a {
      color: ${({ theme }) => theme.colors.white};
      &:link,
      &:visited {
        color: ${({ theme }) => theme.colors.white};
      }
    }
    &:hover {
      a {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

const GetInTouch = () => (
  <StaticQuery
    query={graphql`
      query GetInTouch {
        dataJson(basics: {}) {
          basics {
            email
            phone
            locationAsString
            profiles {
              url
              network
            }
            website
          }
        }
      }
    `}
    render={({ dataJson }) => {
      const { basics } = dataJson
      const { phone, locationAsString, profiles, website, email } = basics
      const formattedPhone = phone.replace("(", "").replace(") ", "-")
      const linkedInProfile = profiles.find(
        ({ network }) => network === "LinkedIn"
      )
      const githubProfile = profiles.find(({ network }) => network === "GitHub")
      return (
        <Ul>
          <li>
            <LocationIcon />
            {locationAsString}
          </li>
          <li>
            <EmailIcon />
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <PhoneIcon />
            {phone ? (
              <a href={`tel:${formattedPhone}`}>{phone}</a>
            ) : (
              <p>###-###-####</p>
            )}
          </li>
          <li>
            <WebsiteIcon />
            <a href={website}>{website}</a>
          </li>
          <li>
            <LinkedInIcon />
            <a href={linkedInProfile.url}>{linkedInProfile.url}</a>
          </li>
          <li>
            <GithubIcon />
            <a href={githubProfile.url}>https://bit.ly/3qo2DNK</a>
          </li>
        </Ul>
      )
    }}
  />
)

export default GetInTouch
