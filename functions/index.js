const functions = require('firebase-functions')
const { region } = require('firebase-functions')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  region('europe-west3')
  response.send('Hello from Firebase!')
})
