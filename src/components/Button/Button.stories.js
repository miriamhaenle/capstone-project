import React from 'react'
import Button from './Button'
import GlobalStyles from '../GlobalStyles'
import { addDecorator } from '@storybook/react'

addDecorator((s) => (
  <>
    <GlobalStyles />
    <div style={{ margin: '0 auto' }}>{s()}</div>
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
