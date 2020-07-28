import '@testing-library/jest-dom/extend-expect'
import { testHook, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import ProfilePage from './Profile'

const user = {
  name: 'Bob Babbit',
  email: 'bob@ironman.com',
}
describe('Profile page renders correctly', () => {
  let renderedPage
  beforeEach(() => {
    renderedPage = <ProfilePage />
  })

  it('should render the page', () => {
    expect(renderedPage).toBeTruthy()
  })

  it('should render the img', () => {
    const profileImage = screen.findByRole('img')
    expect(profileImage).toBeTruthy()
  })

  it('should render the logout button', () => {
    const logOutButton = screen.findByRole('button')
    expect(logOutButton).toBeTruthy()
  })
})
