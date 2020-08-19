import firebaseApp from '../../firebase'
import * as ROUTES from 'constants/routes'

export default async function loginWithFirebase(
  history,
  email,
  password,
  userForm,
  setUserForm
) {
  const navigateTo = (path) => history.push(path)

  try {
    await firebaseApp.signInWithEmailAndPassword(email, password)

    navigateTo(ROUTES.HOME)
  } catch (error) {
    console.error(error)
    setUserForm({ ...userForm, error })
  }
}
