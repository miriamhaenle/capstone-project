import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'

export default function ConfirmPasswordModal({
  confirmPassword,
  updateEmail,
  updateConfirmPassword,
  closeModal,
}) {
  return (
    <StyledModal>
      <div>
        Please confirm your password to change your email address.
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => updateConfirmPassword(event.target.value)}
        />
        <Button color="var(--woodland)" text="Confirm" onClick={updateEmail} />
        <Button text="Close" onClick={closeModal} />
      </div>
    </StyledModal>
  )
}

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);

  div {
    align-items: center;
    border-radius: 2px;
    position: absolute;
    background: var(--sand);
    height: 50%;
    width: 80%;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    padding: 30px;
    color: var(--dusk);
  }

  input {
    margin: 20px;
  }
`
