import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/Button/Button'
import * as ROUTES from '../../constants/routes'
import triathlete from '../../images/triathlete.svg'

export default function WelcomePage() {
  return (
    <StyledMain>
      <h1 data-testid="logoHeadline">
        Carbon & <span>Lactate</span>
      </h1>
      <img src={triathlete} alt="triathlete" />
      <HighlightSection>
        <h2>Welcome</h2>
        <p>Do the sport you love but don't damage the planet</p>
      </HighlightSection>
      <ButtonSection>
        <Link to={ROUTES.SIGN_UP}>
          {' '}
          <Button text="Sign up" color={'var(--woodland)'} />
        </Link>
        <Link to={ROUTES.SIGN_IN}>
          <Button text="Sign in" color={'var(--sunset)'} />
        </Link>
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
    font-weight: 100;
  }
`

const ButtonSection = styled.section`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin: 10px;
  }
`
