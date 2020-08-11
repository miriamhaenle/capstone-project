import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moon from '../../images/moon.svg'
import day from '../../images/day.svg'

ThemeToggler.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
}

export default function ThemeToggler({ theme, toggleTheme }) {
  const imageSource = theme === 'light' ? moon : day
  return (
    <ToggleButton onClick={toggleTheme}>
      {<ToggleIcon src={imageSource} />}
    </ToggleButton>
  )
}

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`
const ToggleIcon = styled.img`
  width: 40px;
  height: 40px;
`
