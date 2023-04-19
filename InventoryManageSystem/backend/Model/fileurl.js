const mongoose = require('mongoose');
const { stringify } = require('querystring');
const jwt = require('jsonwebtoken')
const secret_key = "thisismysecreatkeyofofficeemployee"

const Usercv= mongoose.Schema({
    empdocurl:{
        type:String
        },
   
 
      
})


const USERCV = new mongoose.model('Officedocs',Usercv)

module.exports = USERCV
