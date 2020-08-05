import firebaseApp from '../../firebase'

export default async function passwordResetWithFirebase(
  userForm,
  setUserForm,
  resetForm,
  passwordReset
) {
  try {
    await firebaseApp.sendPasswordResetEmail(userForm.email)
    resetForm()
    passwordReset(true)
  } catch (error) {
    console.error(error)
    setUserForm({ ...userForm, error })
  }
}
