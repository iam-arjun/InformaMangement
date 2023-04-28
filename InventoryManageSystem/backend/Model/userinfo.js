const mongoose = require('mongoose');
const { stringify } = require('querystring');
const jwt = require('jsonwebtoken')
const secret_key = "thisismysecreatkeyofofficeemployee"

const UserSchema = mongoose.Schema({
    empid:{
        type:String
        },
   
    email:{
        type:String
        },
        name:{
            type:String
            },

        password:{
            type:String
        },
        profession:{
            type:String
        },
        worktime:{
            type:Number
        },
        PPURL:{
            type:String
        },
      
      

      
})




UserSchema.methods.generateToken = async function(){
    try {
        console.log(this._id);
        const token = jwt.sign({_id:this._id.toString()},secret_key)
        this.tokens = this.tokens.concat({token:token})
await this.save();
return token;

        
    } catch (error) {

    console.log(error)


        
    }
}

const UserModel = new mongoose.model('OfficeEmployee',UserSchema)

module.exports = UserModel