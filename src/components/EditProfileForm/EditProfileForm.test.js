import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import EditProfileForm from './EditProfileForm'

const userData = {
  name: 'Bob Babbit',
  email: 'bob@ironman.com',
}

describe('Profile form renders correctly', () => {
  let renderedPage
  beforeEach(() => {
    renderedPage = render(<EditProfileForm userData={userData} />)
  })

  it('should render the page', () => {
    expect(renderedPage).toBeTruthy()
  })

  it('should render the profile data labels', () => {
    expect(screen.getByText('Bob' && 'Email')).toBeInTheDocument()
  })

  it('should render the edit button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should open the edit view by clicking on the edit button', () => {
    const { getAllByRole } = render(
      <EditProfileForm userData={userData}></EditProfileForm>
    )
    screen.getAllByRole('button')[0].click()
    expect(screen.getAllByRole('textbox')[0]).not.toHaveAttribute('disabled')
  })
})
