const express = require('express')
const mongoose = require('mongoose')
const cores = require('cores')


const app = express()
app.use(cores());

mongoose.connect("mongodb://127.0.0.1:27017/ems")

app.listen(3001 , ()=>{
  console.log('server work ! ');
  
})