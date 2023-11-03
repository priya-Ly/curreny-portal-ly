const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    permissionLevel:Number,
    phoneNumber:Number
})

module.exports=mongoose.model('User',userSchema)