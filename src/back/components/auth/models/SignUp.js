const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
  
})

module.exports = mongoose.model('mytable', signUpTemplate)