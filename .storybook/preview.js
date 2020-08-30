import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator, addParameters } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/components/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'components/Themes'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
}

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme)
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider]

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

const getTheme = (theme) => theme
