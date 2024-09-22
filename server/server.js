const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const empRouter = require('./Routes/auth')

const app = express()
app.use(cors());
app.use(express.json())
app.use("/auth" , empRouter)

mongoose.connect("mongodb://127.0.0.1:27017/ems")

app.listen(3001 , ()=>{
  console.log('server work ! ');
  
})