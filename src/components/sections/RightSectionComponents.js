import styled from "styled-components"

export const Line1 = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => `${theme.font.sizes.h4}rem`};
  margin: ${({ theme }) => `${theme.spacing.h4}rem 0`};
`

export const Line2 = styled.h4`
  color: ${({ theme }) => theme.colors.black};
`

export const AltLine2 = styled.span`
  color: ${({ theme }) => `${theme.colors.black}A6`};
`
