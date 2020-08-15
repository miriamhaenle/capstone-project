import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

Stars.propTypes = {
  isDarkMode: PropTypes.bool,
}

export default function Stars({ isDarkMode }) {
  return (
    <>
      <Star isDarkMode={isDarkMode} />
      <Star isDarkMode={isDarkMode} />
      <Star isDarkMode={isDarkMode} />
      <Star isDarkMode={isDarkMode} />
      <Star isDarkMode={isDarkMode} />
      <Star isDarkMode={isDarkMode} />
    </>
  )
}

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
    top: 13px;
    left: 28px;
    z-index: 1;
    width: ${(props) => (props.isDarkMode ? '4px' : '30px')};
    height: ${(props) => (props.isDarkMode ? '4px' : '3px')};
    transform: ${(props) => (props.isDarkMode ? 'translate3d(-5px,0,0)' : '')};
  }
  :nth-child(3) {
    top: 22px;
    left: 40px;
    z-index: 0;
    width: ${(props) => (props.isDarkMode ? '2px' : '30px')};
    height: ${(props) => (props.isDarkMode ? '2px' : '3px')};
    transform: ${(props) => (props.isDarkMode ? 'translate3d(-7px,0,0)' : '')};
  }
  :nth-child(4) {
    opacity: ${(props) => (props.isDarkMode ? 1 : 0)};
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
    top: 18px;
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
    top: 28px;
    left: 20px;
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
    top: 7px;
    left: 36px;
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
