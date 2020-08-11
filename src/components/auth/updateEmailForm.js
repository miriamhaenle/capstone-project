export default function updateEmailForm(
  firebase,
  userData,
  setUserData,
  setConfirmationPassword
) {
  const user = firebase.auth().currentUser
  setUserData({ ...userData, email: user.email })
  setConfirmationPassword('')
}
