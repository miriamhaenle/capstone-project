import { addDecorator } from '@storybook/react'
import React from 'react'
import AuthUserContext from '../../components/auth/AuthUserContext'
import ProfilePage from './Profile'

addDecorator((storyFn) => {
  const user = { displayName: 'Bob', email: 'bob@babbit.com' }
  return (
    <AuthUserContext.Provider value={user}>
      {storyFn({ user })}
    </AuthUserContext.Provider>
  )
})

export default {
  title: 'Profile Page',
  component: ProfilePage,
}

export const profilePage = () => <ProfilePage value={{ user }} />
