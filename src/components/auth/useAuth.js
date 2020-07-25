import { useEffect, useState } from 'react'
import firebaseApp from '../../firebase'

export default function useAuth() {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const unsubscribe = firebaseApp.onAuthStateChanged((user) =>
      setAuthUser(user ? user : null)
    )

    return () => unsubscribe()
  }, [])

  return authUser
}
