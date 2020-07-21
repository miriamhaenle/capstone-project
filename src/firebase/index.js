import firebaseApp from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './config'

firebaseApp.initializeApp(firebaseConfig)

const firebaseInit = () => {
  return firebaseApp.auth()
}

export default firebaseInit()

export const db = firebaseApp.firestore()

export const fieldValue = firebaseApp.firestore.FieldValue
