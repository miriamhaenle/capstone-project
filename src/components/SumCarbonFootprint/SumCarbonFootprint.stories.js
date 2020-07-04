import React from 'react'
import SumCarbonFootprint from './SumCarbonFootprint'
import GlobalStyles from '../GlobalStyles'
import { addDecorator } from '@storybook/react'

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

export default {
  title: 'Key Visual',
  component: SumCarbonFootprint,
}

export const sumCarbonFootprint = () => (
  <SumCarbonFootprint totalFootprint="1234"></SumCarbonFootprint>
)
