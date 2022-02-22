'use strict'

const express = require('express')
const serverless = require('serverless-http')


const app = express()

app.use(express.urlencoded({ extended: true }))


app.post('/', (req, res) => {
    res.json({ success: true })
})


module.exports.handler = serverless(app)
