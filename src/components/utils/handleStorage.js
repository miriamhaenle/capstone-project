import firebase from 'firebase'
import { db } from '../../firebase/index'

export async function saveToStorage(userId, key, dataSet) {
  const userDoc = db.collection(key).doc(userId)

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
}

export async function getFromStorage(userId, key) {
  const docRef = db.collection(key).doc(userId)

  const storedData = await docRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        return doc.data().key
      }
    })
    .catch(function (error) {
      console.log('Error getting document:', error)
    })
  return storedData
}
