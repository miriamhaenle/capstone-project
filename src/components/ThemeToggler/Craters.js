import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

Craters.propTypes = {
  isDarkMode: PropTypes.bool,
}

export default function Craters({ isDarkMode }) {
  return (
    <>
      <Crater isDarkMode={isDarkMode} />
      <Crater isDarkMode={isDarkMode} />
      <Crater isDarkMode={isDarkMode} />
    </>
  )
}
const Crater = styled.span`
  position: absolute;
  background-color: #e8cda5;
  opacity: ${(props) => (props.isDarkMode ? 1 : 0)};
  transition: opacity 200ms ease-in-out;
  border-radius: 100%;

  :first-child {
    top: 15px;
    left: 10px;
    width: 4px;
    height: 4px;
  }
  :nth-child(2) {
    top: 24px;
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
