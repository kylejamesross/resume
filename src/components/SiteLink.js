import { Link } from "gatsby"
import styled from "styled-components"

const SiteLink = styled(Link)`
  position: absolute;
  top: ${({ theme }) => `${theme.font.sizes.base}rem`};
  right: ${({ theme }) => `${theme.font.sizes.base}rem`};
  padding: ${({ theme }) => `${theme.font.sizes.base / 1.5}rem`};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkPrimary};
  }
  @media only print {
    display: none;
  }
`

export default SiteLink
