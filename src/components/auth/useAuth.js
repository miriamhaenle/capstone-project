import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as ROUTES from 'constants/routes'
import firebaseApp from '../../firebase'

export default function useAuth() {
  const [authUser, setAuthUser] = useState()
  const [isAuthCompleted, setIsAuthCompleted] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const unsubscribe = firebaseApp.onAuthStateChanged((user) => {
      setAuthUser(user ? user : null)

      if (!user) {
        history.push(ROUTES.WELCOME)
      }

      setIsAuthCompleted(true)
    })

    return () => unsubscribe()
  }, [history, isAuthCompleted])
  return [authUser, isAuthCompleted]
}
