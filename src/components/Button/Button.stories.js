import React from 'react'
import Button from './Button'
import GlobalStyles from '../GlobalStyles'
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
  <Button disabled text="Disabled button" />
)
