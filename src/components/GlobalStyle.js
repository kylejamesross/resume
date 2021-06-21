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

p {
  line-height: ${({ theme }) => theme.font.sizes.baseline};
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.25;
  font-family: ${({ theme }) => theme.font.families.header};
  font-weight: bold;
}

h1 {
  font-size: ${({ theme }) => `${theme.font.sizes.h1}rem`};
  margin: ${({ theme }) => `${theme.spacing.h1}rem 0`};
}

h2 {
  font-size: ${({ theme }) => `${theme.font.sizes.h2}rem`};
  margin: ${({ theme }) => `${theme.spacing.h2}rem 0`};
}

h3 {
  font-size: ${({ theme }) => `${theme.font.sizes.h3}rem`};
  margin: ${({ theme }) => `${theme.spacing.h3}rem 0`};
}

h4 {
  font-size: ${({ theme }) => `${theme.font.sizes.h4}rem`};
  margin: ${({ theme }) => `${theme.spacing.h4}rem 0`};
}

h5 {
  font-size: ${({ theme }) => `${theme.font.sizes.h5}rem`};
  margin: ${({ theme }) => `${theme.spacing.h5}rem 0`};
}

h6 {
  font-size: ${({ theme }) => `${theme.font.sizes.h6}rem`};
  margin: ${({ theme }) => `${theme.spacing.h6}rem 0`};
}

p {
  font-size: ${({ theme }) => `${theme.font.sizes.p}rem`};
  margin: ${({ theme }) => `${theme.spacing.p}rem 0`};
  font-family: ${({ theme }) => theme.font.families.paragraph};
  font-weight: 400;
}

a {
  font-size: ${({ theme }) => `${theme.font.sizes.a}rem`};
  margin: ${({ theme }) => `${theme.spacing.a}rem 0`};
  font-family: ${({ theme }) => theme.font.families.paragraph};
  font-weight: 400;
}

li {
  font-family: ${({ theme }) => theme.font.families.paragraph};
  font-weight: 400;
  font-size: ${({ theme }) => `${theme.font.sizes.li}rem`};
  line-height: 1.5;
}

ul {
  padding-inline-start: ${({ theme }) => `${theme.font.sizes.base}rem`};
  padding-inline-end: ${({ theme }) => `${theme.font.sizes.base}rem`};
  margin-block-start: ${({ theme }) => `${theme.font.sizes.base}rem`};
  margin-block-end: ${({ theme }) => `${theme.font.sizes.base}rem`};
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
