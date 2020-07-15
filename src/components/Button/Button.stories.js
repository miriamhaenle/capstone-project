import React from 'react'
import Button from './Button'
import { withKnobs, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
}

export const buttonWithText = () => (
  <Button disabled={boolean('Disabled', false)} text="Add new trip" />
)

export const disabledButtonWithText = () => (
  <Button disabled={boolean('Disabled', true)} text="Disabled button" />
)
