import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addParameters, addDecorator } from '@storybook/react'
import GlobalStyles from '../src/components/GlobalStyles'
import LoginContext from '../src/components/auth/LoginContext'

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
