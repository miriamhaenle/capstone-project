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
  beforeEach(() => {
    render(<ProfilePage />)
  })
})
