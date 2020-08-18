import firebase from 'firebase'
import { db } from '../firebase/index'

export async function saveToStorage(userId, userData) {
  try {
    const userDocs = await Promise.all(
      userData.map(({ key }) => db.collection(key).doc(userId))
    )
    const docSnapshots = await Promise.all(
      userDocs.map((result) => result.get())
    )

    docSnapshots.forEach(async (docSnapshot, index) => {
      if (docSnapshot.exist) {
        await userDocs[index].update({
          key: firebase.firestore.update(userData[index].data),
        })
      } else {
        await userDocs[index].set({
          key: userData[index].data,
        })
      }
    })
  } catch (error) {
    console.log('Error saving the document' + error)
  }
}

export async function getFromStorage(userId, key) {
  const docRef = db.collection(key).doc(userId)

  try {
    const doc = await docRef.get()
    const storedData = doc.exists ? await doc.data().key : null
    return storedData
  } catch (error) {
    console.log('Error getting document:', error)
  }
}
