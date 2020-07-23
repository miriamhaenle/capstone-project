import React from 'react'
import Button from '../../components/Button/Button'
import styled from 'styled-components'
import triathlete from '../../images/triathlete.svg'
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

export default function WelcomePage() {
  let history = useHistory()

  const navigateTo = (path) => history.push(path)

  return (
    <StyledMain>
      <h1>
        Carbon & <span>Lactate</span>
      </h1>
      <img src={triathlete} alt="triathlete" />
      <HighlightSection>
        <h2>Welcome</h2>
        <p>Do the sport you love but don't damage the planet</p>
      </HighlightSection>
      <ButtonSection>
        <Button text="Sign up" color={'var(--woodland)'} />
        <Button text="Sign in" color={'var(--sunset)'} />
      </ButtonSection>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  padding: 30px 30px;
  background: var(--sand);
  height: 100vh;
  color: var(--woodland);
  height: 100vh;
  p {
    font-size: 1.1rem;
    font-weight: 400;
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
  }
  img {
    width: 76px;
    display: block;
    margin: 60px auto 0;
  }
`

const HighlightSection = styled.section`
  background: var(--orange-yellow);
  margin: -6px -30px;
  padding: 30px;
  text-align: end;

  h2 {
    font-family: var(--headlineFont);
    font-weight: 100;
  }
`

const ButtonSection = styled.section`
  padding: 30px;
  display: flex;
  flex-direction: column;

  button {
    margin: 10px;
  }
`
