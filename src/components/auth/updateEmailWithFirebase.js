export default async function updateEmailWithFirebase(
  firebase,
  user,
  userData,
  confirmationPassword,
  setErrorMessage,
  closeModal
) {
  if (!confirmationPassword) {
    setErrorMessage('Password not confirmed!')
    return
  }

  const credentials = firebase.auth.EmailAuthProvider.credential(
    user.email,
    confirmationPassword
  )
  try {
    await user.reauthenticateWithCredential(credentials)
    await user.updateEmail(userData.email)
  } catch (error) {
    console.error(error.message)
    setErrorMessage(`Email Address could not be updated. ${error}`)
  } finally {
    closeModal()
  }
}
