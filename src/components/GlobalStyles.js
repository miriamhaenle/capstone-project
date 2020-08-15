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

--primaryBackground: #000000;
--secondaryBackground: #1C1C1E;
--grey: #3A3A3C;
--greyFillColor: #767680;
--primaryText: #FFFFFF;
--secondaryText: #EBEBF5;
--primaryVibrant: #3700B3;


--primaryDark: #212121;
--secondaryBlue: #03DAC6;

--seaGreen: #00454a;
--green: #3c6562;
--yellowDark: #FFF083;
--red: #ed6363;
}

 
body {
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.50s linear;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  margin: 0 auto;
  max-width: 375px;
  height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--headlineFont);
  color: ${({ theme }) => theme.headline};
}

input {
  background: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.inputColor};
}

a {
  color: ${({ theme }) => theme.link};

}
`
