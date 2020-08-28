import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator, addParameters } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/components/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'components/Themes'

const theme = 'light'
addDecorator((storyFn) => (
  <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
))

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
