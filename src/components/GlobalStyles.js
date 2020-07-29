import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
  box-sizing: border-box;
}
:root {
--woodland: #164036;
--seafoam: #A2D5D8;
--dusk: #091A1A;
--sunset: #FF8C66;
--sand: #F7EEDF;
--orange-yellow: #F3C969;
--headlineFont: 'Playfair Display', serif;
}

body {
  background: var(--woodland);
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  margin: 0 auto;
  max-width: 375px;
  height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(----headlineFont);
}
`
