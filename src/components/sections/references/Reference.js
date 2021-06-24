import React from "react"
import styled from "styled-components"
import { Line1, Line2 } from "../RightSectionComponents"

const P = styled.p`
  color: ${({ theme }) => theme.colors.black};
`

const extractReferenceInformation = name => {
  const index = name.search(/\(/)
  const fullName = name.slice(0, index)
  const role = name.slice(index + 1).replace(")", "")
  return [fullName, role]
}

const StyledReference = styled.div`
  margin: ${({ theme }) => `${theme.font.sizes.base}rem`} 0;
`

const Reference = ({ name, reference }) => {
  const [fullName, role] = extractReferenceInformation(name)
  return (
    <StyledReference>
      <Line1>{fullName}</Line1>
      <Line2>{role}</Line2>
      <P>{reference}</P>
    </StyledReference>
  )
}

export default Reference
