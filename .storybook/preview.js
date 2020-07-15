import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addParameters, addDecorator } from '@storybook/react'
import GlobalStyles from '../src/components/GlobalStyles'

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
))

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
