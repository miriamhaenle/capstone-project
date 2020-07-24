import React from 'react'
import ProfilePage from './Profile'

export default {
  title: 'Profile Page',
  component: ProfilePage,
}

const profileData = {
  name: 'Bob Babbit',
  email: 'bob@ironman.com',
}

export const profilePage = () => <ProfilePage user={profileData} />
