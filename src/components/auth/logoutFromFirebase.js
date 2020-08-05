import * as ROUTES from '../../constants/routes'

export default async function logoutFromFirebase(
  history,
  firebaseApp,
  setErrorMessage
) {
  const navigateTo = (path) => history.push(path)

  try {
    navigateTo(ROUTES.WELCOME)
    await firebaseApp.signOut()
  } catch (error) {
    console.error(error.message)
    setErrorMessage('Ups! Something went wrong. Please try again.')
  }
}
