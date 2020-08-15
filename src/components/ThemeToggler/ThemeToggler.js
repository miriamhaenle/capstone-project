import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Craters from './Craters'
import Stars from './Stars'

ThemeToggler.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
}

export default function ThemeToggler({ theme, toggleTheme }) {
  const isDarkMode = theme === 'dark' ? true : false

  return (
    <>
      <ToggleWrapper>
        <input
          type="checkbox"
          id="themeToggle"
          onClick={toggleTheme}
          defaultChecked={theme === 'dark' ? true : false}
        />
        <ToggleLabel htmlFor="themeToggle" isDarkMode={isDarkMode}>
          <ToggleHandler isDarkMode={isDarkMode}>
            <Craters isDarkMode={isDarkMode} />
          </ToggleHandler>
          <Stars isDarkMode={isDarkMode} />
        </ToggleLabel>
      </ToggleWrapper>
    </>
  )
}

const ToggleWrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 17%;
  overflow: hidden;
  padding: 0 200px;
  transform: translate3D(-50%, -50%, 0);

  input {
    position: absolute;
    left: -99em;
  }
`
const ToggleLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  background-color: ${(props) =>
    props.isDarkMode ? '#749dd6' : 'var(--seafoam)'};
  width: 80px;
  height: 40px;
  border-radius: 90px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

const ToggleHandler = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 3px;
  left: 3px;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background-color: ${(props) => (props.isDarkMode ? '#FFE5B5' : '#ffcf96')};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: ${(props) =>
    props.isDarkMode ? 'translate3d(40px,0,0) rotate(0)' : 'rotate(-45deg)'};
`
