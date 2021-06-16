import styled from "styled-components"

const Content = styled.div`
  max-width: ${({ theme }) => `${theme.maxScreenSize}px`};
  margin: auto;
  height: 100vh;
  overflow: auto;

  @media screen,
    print and (min-height: 800px) and (min-width: ${({ theme }) =>
      `${theme.minScreenSize}px`}) {
    width: 100vw;
    height: ${({ theme }) =>
      `${(theme.aspectRatioHeight / theme.aspectRatioWidth) * 100}vw`};
    max-height: 100vh;
    max-width: ${({ theme }) =>
      `${(theme.aspectRatioWidth / theme.aspectRatioHeight) * 100}vh`};
  }
`

export default Content
