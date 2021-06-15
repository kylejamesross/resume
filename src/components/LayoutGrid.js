import styled from "styled-components"

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 550px) {
    display: grid;
    grid-template-columns: 1fr 2.7fr;
    height: 100%;
  }

  div:first-child {
    background-color: red;
  }

  div:nth-child(2) {
    background-color: blue;
  }

  @media print {
    display: grid;
    grid-template-columns: 1fr 2.7fr;
    height: 100%;
  }

  div:first-child {
    background-color: red;
  }

  div:nth-child(2) {
    background-color: blue;
  }
`

export default LayoutGrid
