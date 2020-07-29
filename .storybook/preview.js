import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator, addParameters } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/components/GlobalStyles'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
