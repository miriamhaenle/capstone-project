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
--headlineFont: 'PT Serif', serif
}

body {
  background: var(--woodland);
  font-family: 'Poppins', sans-serif;
  margin: 0 auto;
  max-width: 375px;
  height: 100%;

}
`
