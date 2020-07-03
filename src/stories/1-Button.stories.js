import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../components/Button'
import GlobalStyles from '../components/GlobalStyles'
import { addDecorator } from '@storybook/react'

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  title: 'Button',
  component: Button,
}

export const buttonWithText = () => <Button text="Add new trip" />

export const disabledButtonWithText = () => (
  <Button disabled text="I'm disabled" />
)
