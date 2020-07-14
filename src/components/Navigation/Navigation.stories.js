import React from 'react'
import Navigation from '../Navigation/Navigation'
import { addDecorator } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

addDecorator(StoryRouter())

export default {
  title: 'Navigation',
  component: Navigation,
}

export const navigation = () => <Navigation></Navigation>
