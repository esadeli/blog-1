'use strict'

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const IndexRouter = require('./routes/IndexRoutes')
const app = express()

mongoose.connect('mongodb://localhost:27017/blog23db', {useNewUrlParser: true})
// mongoose.connect('mongodb://localhost:27017/blog23dbtesting', {useNewUrlParser: true})

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())
app.use('/user',IndexRouter)

app.get('/', (req,res) =>{ res.send('OK') })
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Listening to PORT ',process.env.PORT)
})

module.exports = app