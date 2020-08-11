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
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`
const ToggleIcon = styled.img`
  width: 30px;
  height: 30px;
`
