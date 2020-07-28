import React from 'react'
import styled from 'styled-components'
import Button from '../../Button/Button'
import PropTypes from 'prop-types'

export default function ConfirmPasswordModal({
  confirmationPassword,
  updateEmailWithFirebase,
  updateConfirmationPassword,
  closeModal,
}) {
  return (
    <StyledModal>
      <div>
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
      </div>
    </StyledModal>
  )
}

ConfirmPasswordModal.propTypes = {
  confirmationPassword: PropTypes.string,
  updateEmailWithFirebase: PropTypes.func,
  updateConfirmationPassword: PropTypes.func,
  closeModal: PropTypes.func,
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
