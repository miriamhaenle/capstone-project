import React from 'react'
import AddKilometersForm from './AddKilometersForm'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Add Kilometers Form',
  component: AddKilometersForm,
  decorators: [withKnobs],
}

export const addKilometersFormTrip = ({ callback }) => (
  <AddKilometersForm
    headline={text('headline', 'Add new trip')}
    paragraph={text(
      'paragraph',
      'How many kilometers did it take you to get to your last race / training camp?'
    )}
    type="transportation"
  ></AddKilometersForm>
)

export const addKilometersFormSports = ({ callback }) => (
  <AddKilometersForm
    headline={text('headline', 'Add new sports activity')}
    paragraph={text(
      'paragraph',
      'How many kilometers did you move outside today?'
    )}
  ></AddKilometersForm>
)
