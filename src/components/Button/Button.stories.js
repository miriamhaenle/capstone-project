import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const buttonWithText = () => <Button text="Add new trip" />

export const disabledButtonWithText = () => (
  <Button disabled text="Disabled button" />
)
