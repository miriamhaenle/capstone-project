import React from 'react'
import SportTypes from './SportTypes'
import GlobalStyles from '../GlobalStyles'
import { addDecorator } from '@storybook/react'

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  title: 'Select sport type',
  component: SportTypes,
}

export const sportTypeSelection = () => <SportTypes></SportTypes>
