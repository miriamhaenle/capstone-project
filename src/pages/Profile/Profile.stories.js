import React, { useContext, render } from 'react'
import ProfilePage from './Profile'
// import LoginContext from '../../components/auth/LoginContext'
import WithContext from 'react-with-context'

const LoginContext = { user: { username: 'test' } }

export default {
  title: 'Profile Page',
  component: ProfilePage,
}

export const profilePage = () => (
  <WithContext context={LoginContext}>
    <ProfilePage />
  </WithContext>
)
