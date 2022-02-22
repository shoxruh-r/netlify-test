'use strict'

const express = require('express')
const serverless = require('serverless-http')
const fs = require('fs')


const app = express()

app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    fs.writeFile('test.txt', 'data', e => {
        if (!e) res.json({ success: true })
        else res.json({ success: false })
    })
})


module.exports.handler = serverless(app)
