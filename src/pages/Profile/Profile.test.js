import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import ProfilePage from './Profile'

const profileData = {
  name: 'Bob Babbit',
  email: 'bob@ironman.com',
}

describe('Profile page renders correctly', () => {
  let renderedPage
  beforeEach(() => {
    renderedPage = render(<ProfilePage />)
  })

  it('should render the page', () => {
    expect(renderedPage).toBeTruthy()
  })

  it('should render the image', () => {
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should render the profile data labels', () => {
    expect(screen.getByText('Bob' && 'Email')).toBeInTheDocument()
  })

  it('should render the edit button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should open the edit view by clicking on the edit button', () => {
    screen.findByRole('button').click()
  })
})
