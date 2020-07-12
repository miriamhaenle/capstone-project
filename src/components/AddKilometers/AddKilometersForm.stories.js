import React from 'react'
import AddKilometersForm from './AddKilometersForm'

export default {
  title: 'Add Kilometers Form',
  component: AddKilometersForm,
}

export const addKilometersFormButtonDisabled = ({ callback }) => (
  <AddKilometersForm></AddKilometersForm>
)

export const addKilometersForm = ({ callback }) => (
  <AddKilometersForm value="100"></AddKilometersForm>
)
