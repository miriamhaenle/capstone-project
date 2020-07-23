import React from 'react'
import HomePage from './HomePage'

export default {
  title: 'Home',
  component: HomePage,
}

export const homePage = () => (
  <HomePage
    initialFootprintValue={0}
    totalCarbonFootprint={1234}
    updateCarbonFootprint
    updateFootprintPerTransportationType
  />
)
