import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function Button({ text, disabled, color, onClick }) {
  return (
    <StyledButton
      disabled={disabled}
      data-cy="button"
      color={color}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  )
}
Button.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

const StyledButton = styled.button`
  background: ${(props) => (props.color ? props.color : 'var(--sunset)')};
  border: none;
  border-radius: 3px;
  color: var(--sand);
  font-size: 18px;
  height: 36px;
  align-self: center;
  text-align: center;
  width: 148px;

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }
  :hover {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }

  :active {
    transform: scale(0.9);
  }
`
