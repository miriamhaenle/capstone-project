import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../Button/Button'
import PropTypes from 'prop-types'

ConfirmPasswordModal.propTypes = {
  confirmationPassword: PropTypes.string,
  updateEmailWithFirebase: PropTypes.func,
  updateConfirmationPassword: PropTypes.func,
  closeModal: PropTypes.func,
}

export default function ConfirmPasswordModal({
  confirmationPassword,
  updateEmailWithFirebase,
  updateConfirmationPassword,
  closeModal,
}) {
  return (
    <OverlayContainer>
      <StyledModal>
        Please confirm your password to change your email address.
        <input
          type="password"
          value={confirmationPassword}
          onChange={(event) => updateConfirmationPassword(event.target.value)}
        />
        <Button
          color="var(--woodland)"
          text="Confirm"
          onClick={updateEmailWithFirebase}
        />
        <Button text="Close" onClick={closeModal} />
      </StyledModal>
    </OverlayContainer>
  )
}

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
`
const StyledModal = styled.div`
  align-items: center;
  border-radius: 5px;
  position: absolute;
  background: var(--sand);
  height: 50%;
  width: 80%;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  animation: slide-in 0.2s cubic-bezier(0.55, 0.09, 0.68, 0.53);
  display: flex;
  flex-direction: column;
  padding: 30px;
  color: var(--dusk);

  @keyframes slide-in {
    0% {
      transform: translateX(0);
      opacity: 0;
    }

    100% {
      transform: translateX(-50%);
      opacity: 1;
    }
  }

  input {
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    margin: 20px;
    border: none;
    font-size: 16px;
    color: var(--dust);
    width: 220px;
    padding: 9px;
  }
`
