const functions = require('firebase-functions')
const { region } = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

admin.initializeApp()

app.use(express.json())
app.use(cors())

/* app.get('/', (reqest, response) => {
  return response.status(200).send('Hello World')
}) */

app.get('/my-carbon-footprint', (request, response) => {
  const queryParams = request.query

  axios
    .get('https://api.triptocarbon.xyz/v1/footprint', {
      params: {
        activity: queryParams.activity,
        activityType: queryParams.activityType,
        fuelType: 'diesel',
        country: queryParams.country,
        mode: queryParams.mode,
      },
    })
    .then((response) => response.data)
    .then((footprint) => response.status(200).send(footprint))
    .catch((error) => console.log(error))
})

exports.app = functions.region('europe-west3').https.onRequest(app)
