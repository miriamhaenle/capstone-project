import React from 'react'
import AddKilometersForm from './AddKilometersForm'
import GlobalStyles from '../GlobalStyles'
import { addDecorator } from '@storybook/react'

addDecorator((s) => (
  <>
    <GlobalStyles />
    <div style={{ background: '#164036' }}> {s()}</div>
  </>
))

export default {
  title: 'Add Kilometers Form',
  component: AddKilometersForm,
}

export const addKilometersForm = () => (
  <AddKilometersForm disabled></AddKilometersForm>
)
