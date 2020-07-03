import React from 'react'
import styled from 'styled-components'

export default function Button({ text, disabled }) {
  return <StyledButton disabled={disabled}>{text}</StyledButton>
}

const StyledButton = styled.button`
  background: var(--sunset);
  color: var(--sand);
  text-align: center;
  height: 36px;
  width: 148px;
  font-size: 18px;
  border: none;
  border-radius: 3px;

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
  }
`
