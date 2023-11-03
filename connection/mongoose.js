const mongoose=require('mongoose');
const connectDB=mongoose.connect('mongodb+srv://piyu:piyu1122@cluster0.jsnhqqv.mongodb.net/jwt_user_currency')
module.exports=connectDB;