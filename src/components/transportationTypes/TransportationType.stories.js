import React from 'react'
import GlobalStyles from '../GlobalStyles'
import { addDecorator } from '@storybook/react'
import TransportationTypes from './TransportationType'

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  title: 'Select transportation type',
  component: TransportationTypes,
}

export const transportationTypeSelection = () => (
  <TransportationTypes></TransportationTypes>
)
