import React from 'react'
import styled from 'styled-components'

export default function Button({ text, disabled }) {
  return (
    <StyledButton disabled={disabled} data-cy="addTrip">
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background: var(--sunset);
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
`