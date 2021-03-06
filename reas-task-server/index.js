require('dotenv').config()

const Joi = require('joi');
const express = require('express');
const mongoose = require('mongoose');
const mongoData = process.env.DATABASE_URL
mongoose.connect(mongoData)
const database = mongoose.connection

database.on('error', ( error ) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express()

app.use(express.json())

const routes = require('./routes/routes')
app.use('/api', routes)

app.listen(4000, () => {
    console.log('Server started at ${4000}');
}) 

