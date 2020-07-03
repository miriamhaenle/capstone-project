import React from 'react'
import AddKilometers from '../components/AddKilometers'
import GlobalStyles from '../components/GlobalStyles'
import { addDecorator } from '@storybook/react'

addDecorator((s) => (
  <>
    <GlobalStyles />
    <div style={{ background: '#164036' }}> {s()}</div>
  </>
))

export default {
  title: 'Add Kilometers Form',
  component: AddKilometers,
}

export const addKilometersForm = () => <AddKilometers></AddKilometers>
