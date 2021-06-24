import styled from "styled-components"

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 550px) {
    display: grid;
    grid-template-columns: 35% 65%;
    height: 100%;
  }

  @media print {
    display: grid;
    grid-template-columns: 35% 65%;
    height: 100%;
  }
`

export default LayoutGrid
