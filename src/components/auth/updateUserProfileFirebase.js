export default async function updateUserProfileFirebase(
  firebase,
  userData,
  openModal,
  setErrorMessage
) {
  const user = firebase.auth().currentUser
  try {
    await user.updateProfile({
      displayName: userData.displayName,
    })
    if (userData.email !== user.email) {
      openModal()
    }
  } catch (error) {
    console.error('error')
    setErrorMessage(`Updating ${user.displayName} failed. `)
  }
}
