import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

ThemeToggler.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
}

export default function ThemeToggler({ theme, toggleTheme }) {
  const isDarkMode = theme === 'dark' ? true : false
  console.log({ isDarkMode })
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
            <Crater isDarkMode={isDarkMode} />
            <Crater isDarkMode={isDarkMode} />
            <Crater isDarkMode={isDarkMode} />
          </ToggleHandler>

          <Star isDarkMode={isDarkMode} />
          <Star isDarkMode={isDarkMode} />
          <Star isDarkMode={isDarkMode} />
          <Star isDarkMode={isDarkMode} />
          <Star isDarkMode={isDarkMode} />
          <Star isDarkMode={isDarkMode} />
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

const Crater = styled.span`
  position: absolute;
  background-color: #e8cda5;
  opacity: ${(props) => (props.isDarkMode ? 1 : 0)};
  transition: opacity 200ms ease-in-out;
  border-radius: 100%;

  :first-child {
    top: 18px;
    left: 10px;
    width: 4px;
    height: 4px;
  }
  :nth-child(2) {
    top: 28px;
    left: 22px;
    width: 6px;
    height: 6px;
  }
  :nth-child(3) {
    top: 10px;
    left: 25px;
    width: 8px;
    height: 8px;
  }
`

const Star = styled.span`
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
  :first-child {
    top: 10px;
    left: 35px;
    z-index: 0;
    width: ${(props) => (props.isDarkMode ? '2px' : '30px')};
    height: ${(props) => (props.isDarkMode ? '2px' : '3px')};
  }
  :nth-child(2) {
    top: 18px;
    left: 28px;
    z-index: 1;
    width: ${(props) => (props.isDarkMode ? '4px' : '30px')};
    height: ${(props) => (props.isDarkMode ? '4px' : '3px')};
    transform: ${(props) => (props.isDarkMode ? 'translate3d(-5px,0,0)' : '')};
  }
  :nth-child(3) {
    top: 27px;
    left: 40px;
    z-index: 0;
    width: ${(props) => (props.isDarkMode ? '42x' : '30px')};
    height: ${(props) => (props.isDarkMode ? '2px' : '3px')};
    transform: ${(props) => (props.isDarkMode ? 'translate3d(-7px,0,0)' : '')};
  }
  :nth-child(4) {
    opacity: ${(props) => (props.isDarkMode ? 1 : 0)};
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
    top: 16px;
    left: 11px;
    z-index: 0;
    width: ${(props) => (props.isDarkMode ? '4px' : '2px')};
    height: ${(props) => (props.isDarkMode ? '4px' : '2px')};
    transform: ${(props) =>
      props.isDarkMode ? 'translate3d(0,0,0)' : ' translate3d(3px, 0, 0)'};
    transition: ${(props) =>
      props.isDarkMode
        ? 'all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95)'
        : ''};
  }
  :nth-child(5) {
    opacity: ${(props) => (props.isDarkMode ? 1 : 0)};
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
    top: 32px;
    left: 17px;
    z-index: 0;
    width: 3px;
    height: 3px;
    transform: ${(props) =>
      props.isDarkMode ? 'translate3d(0,0,0)' : ' translate3d(3px, 0, 0)'};
    transition: ${(props) =>
      props.isDarkMode
        ? 'all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95)'
        : ''};
  }
  :nth-child(6) {
    opacity: ${(props) => (props.isDarkMode ? 1 : 0)};
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
    top: 36px;
    left: 28px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: ${(props) =>
      props.isDarkMode ? 'translate3d(0,0,0)' : ' translate3d(3px, 0, 0)'};
    transition: ${(props) =>
      props.isDarkMode
        ? 'all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95)'
        : ''};
  }
`

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
