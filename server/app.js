'use strict'

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())

app.get('/', (req,res) =>{ res.send('OK') })
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Listening to PORT ',process.env.PORT)
})