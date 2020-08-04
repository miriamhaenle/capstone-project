import firebase from 'firebase'
import { db } from '../firebase/index'

export async function saveToStorage(userId, key, dataSet) {
  const userDoc = db.collection(key).doc(userId)

  try {
    const docSnapshot = await userDoc.get()

    if (docSnapshot.exist) {
      await userDoc.update({
        key: firebase.firestore.update(dataSet),
      })
    } else {
      await userDoc.set({
        key: dataSet,
      })
    }
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
