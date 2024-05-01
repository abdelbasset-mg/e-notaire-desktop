const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUp')
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response) =>{

  
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword =  await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new signUpTemplateCopy({
        username:request.body.username,
        password:securePassword
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
        console.log("Melissa")
    })
})


module.exports = router