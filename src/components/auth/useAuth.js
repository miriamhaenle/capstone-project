import React, { useEffect, useState } from 'react'
import firebaseApp from '../../firebase'

export default function useAuth() {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const unsubscribe = firebaseApp.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user)
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        setAuthUser(null)
        localStorage.removeItem('user')
      }
    })

    return () => unsubscribe()
  }, [])
  return authUser
}
