import React from 'react'
import AddKilometersForm from './AddKilometersForm'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Add Kilometers Form',
  component: AddKilometersForm,
  decorators: [withKnobs],
}

export const addKilometersForm = ({ callback }) => (
  <AddKilometersForm
    headline={text('headline', 'Add trip')}
    paragraph={text(
      'paragraph',
      'How many kilometers did it take you to get to your last race / training camp?'
    )}
  ></AddKilometersForm>
)
