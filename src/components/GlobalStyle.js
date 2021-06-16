import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

 html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */

  font-size: ${({ theme }) => `${theme.font.sizes.minFont}px`};

  @media only screen and (min-width: ${({ theme }) =>
    `${theme.minScreenSize}px`}) {
    font-size: ${({ theme }) => {
      const {
        minScreenSize,
        maxScreenSize,
        font: {
          sizes: { minFont, maxFont },
        },
      } = theme
      const difference = maxFont - minFont
      return `calc(${minFont}px + ${difference} * ((100vw - ${minScreenSize}px) / ${
        maxScreenSize - minScreenSize
      }))`
    }};
  }
  
  @media only screen and (min-width: ${({ theme }) =>
    `${theme.maxScreenSize}px`}) {
    font-size: ${({ theme }) => `${theme.font.sizes.maxFont}px`};
  }
}

body {
  margin: 0;
}

main {
  display: block;
}

h1, h2, h3, h4, h5, h6, p {
  line-height: 1.3;
  margin: ${({ theme }) => `${theme.font.sizes.baseline}rem`} 0;
}

h1, h2 {
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
}

h3, h4, h5, h6 {
  font-family: 'Assistant', sans-serif;
  font-weight: 600;
}

h1 {
  font-size: ${({ theme }) => `${theme.font.sizes.h1}rem`};
}

h2 {
  font-size: ${({ theme }) => `${theme.font.sizes.h2}rem`};
}

h3 {
  font-size: ${({ theme }) => `${theme.font.sizes.h3}rem`};
}

h4 {
  font-size: ${({ theme }) => `${theme.font.sizes.h4}rem`};
}

h5 {
  font-size: ${({ theme }) => `${theme.font.sizes.h5}rem`};
}

h6 {
  font-size: ${({ theme }) => `${theme.font.sizes.h6}rem`};
}

p {
  font-size: ${({ theme }) => `${theme.font.sizes.p}rem`};
  font-family: "Noto Serif JP", sans-serif;
  font-weight: 400;
  text-align: justify;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input { /* 1 */
  overflow: visible;
}

button,
select { /* 1 */
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}
`
export default GlobalStyle
