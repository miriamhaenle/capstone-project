import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggler from '../../components/ThemeToggler/ThemeToggler'
import * as ROUTES from '../../constants/routes'
import settings from '../../images/settings.svg'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function Header({ toggleTheme, theme }) {
  return (
    <StyledHeader>
      <ThemeToggler toggleTheme={toggleTheme} theme={theme} />

      <Link to={ROUTES.PROFILE}>
        <StyledImage src={settings} alt="profile" />
      </Link>
    </StyledHeader>
  )
}

Header.propTypes = {
  toggleTheme: PropTypes.func,
  theme: PropTypes.string,
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;

  a {
    padding: 20px;
  }
`
const StyledImage = styled.img`
  width: 30px;
  :hover {
    transform: rotate(90deg);
  }
  :active {
    transform: rotate(180deg);
  }
`
