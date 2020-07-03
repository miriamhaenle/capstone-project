import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
  background: var(---woodland);
  font-family: 'Poppins', sans-serif;
  margin: 0;
  max-width: 500px;
}
`
