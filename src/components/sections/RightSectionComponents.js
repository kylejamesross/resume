import styled from "styled-components"

export const Line1 = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
`

export const Line2 = styled.h4`
  color: ${({ theme }) => theme.colors.black};
`

export const AltLine2 = styled.span`
  color: ${({ theme }) => `${theme.colors.black}A6`};
`
