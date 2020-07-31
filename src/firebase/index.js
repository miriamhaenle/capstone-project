import firebase from 'firebase'
import firebaseApp from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './config'

firebaseApp.initializeApp(firebaseConfig)

const firebaseInit = () => {
  if (!firebase.apps.length) {
    firebaseApp.initializeApp(firebaseConfig)
  }
  return firebaseApp.auth()
}

export default firebaseInit()
export const db = firebaseApp.firestore()
