import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/Button/Button'
import * as ROUTES from '../../constants/routes'
import TriathleteIcon from '../../images/TriathleteIcon'

export default function WelcomePage() {
  return (
    <StyledMain>
      <h1 data-testid="logoHeadline">
        Carbon & <span>Lactate</span>
      </h1>
      <TriathleteIcon />
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
  background: ${({ theme }) => theme.backgroundProfileRelated};
  height: 100vh;
  color: ${({ theme }) => theme.textProfileRelated};
  height: 100vh;
  h1 {
    color: ${({ theme }) => theme.body};
  }
  p {
    font-size: 1.1rem;
    font-weight: 400;
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
  }
  svg {
    width: 76px;
    display: block;
    padding: 0;
    margin: 60px auto 0;
    animation: drive 2s cubic-bezier(0.23, 1, 0.23, 1);

    path {
      fill: ${({ theme }) => theme.radioButtonsText};
    }
  }

  @keyframes drive {
    from {
      transform: translateX(-225px);
    }
    to {
      transform: translateX(0);
    }
  }
`

const HighlightSection = styled.section`
  background: ${({ theme }) => theme.yellowBackground};
  margin: -6px -30px;
  padding: 30px;
  text-align: end;

  h2 {
    font-weight: 100;
    color: ${({ theme }) => theme.textProfileRelated};
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
