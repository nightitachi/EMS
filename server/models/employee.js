const mongoose = require('mongoose');

const empSchema = new mongoose.Schema( {
  name:{
    type:String,
    required: true
  },
  level:{
    type: Number,
    required: true

  },
  password:{
    type: String,
    required: true
  }
})

const empModel = mongoose.model('employee' , empSchema);
module.exports = empModel;
