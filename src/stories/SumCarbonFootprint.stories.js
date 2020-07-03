import React from 'react'
import SumCarbonFootprint from '../components/SumCarbonFootprint'
import GlobalStyles from '../components/GlobalStyles'
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
