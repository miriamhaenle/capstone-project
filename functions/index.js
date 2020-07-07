const functions = require('firebase-functions')
const { region } = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const serviceAccount = require('./serviceAccountKey.json')
const app = express()

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://capstone-project-c74dc.firebaseio.com',
})

app.use(cors())
app.use(express.json())

app.get('/', (reqest, response) => {
  return response.status(200).send('Hello World')
})
app.get('/my-carbon-footprint', (request, response) => {
  const queryParams = request.query

  const footprint = axios
    .get('https://api.triptocarbon.xyz/v1/footprint', {
      params: {
        activity: queryParams.activity,
        activityType: queryParams.activityType,
        fuelType: queryParams.fuelType,
        country: queryParams.country,
        mode: queryParams.mode,
      },
    })
    .then((response) => response.data)
    .then((footprint) => response.status(200).send(console.log(footprint)))
    .catch((error) => console.log(error))
})

exports.app = functions.region('europe-west3').https.onRequest(app)
