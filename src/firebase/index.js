import firebase from 'firebase'
import firebaseApp from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './config'

firebaseApp.initializeApp(firebaseConfig)

const firebaseInit = () => {
  if (!firebase.apps.length) {
    firebaseApp.initializeApp(firebaseConfig)
  }
  return firebaseApp.auth()
}

export default firebaseInit()
