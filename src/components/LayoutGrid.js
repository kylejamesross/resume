import styled from "styled-components"

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 550px) {
    display: grid;
    grid-template-columns: 1fr 2.7fr;
    height: 100%;
  }

  @media print {
    display: grid;
    grid-template-columns: 1fr 2.7fr;
    height: 100%;
  }
`

export default LayoutGrid
