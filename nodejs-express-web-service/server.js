'use strict'

const express = require('express')
const compression = require('compression')

const os = require('os')

const app = express()
app.use(compression())

// derive base url from container hostname:
const serviceName = os.hostname().replace(/\d/g, '')
const urlForIndex = '/' + serviceName

app.get(urlForIndex, function (req, res) {
  res.send({ message: 'OK' })
})

app.get('*', function (req, res) {
  res.status(404).send({ message: 'Not Found' })
})

app.listen(8080)
