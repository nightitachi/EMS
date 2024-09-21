const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema( {
  name:{
    type:String,
    required: true
  },
  lastname:{
    type:String,
    required: true

  },
  level:{
    type: Number,
    required: true

  }
})

const UserModel = mongoose.model('User' , UserSchema);
module.exports = UserModel;
