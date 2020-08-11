import firebaseApp from '../../firebase'
import * as ROUTES from '../../constants/routes'

export default async function registerToFirebase(
  history,
  username,
  email,
  passwordOne,
  resetForm,
  userForm,
  setUserForm
) {
  const navigateTo = (path) => history.push(path)

  try {
    const newUser = await firebaseApp.createUserWithEmailAndPassword(
      email,
      passwordOne
    )
    await newUser.user.updateProfile({
      displayName: username,
    })
    resetForm()
    navigateTo(ROUTES.HOME)
  } catch (error) {
    console.error(error)
    setUserForm({ ...userForm, error })
  }
}
