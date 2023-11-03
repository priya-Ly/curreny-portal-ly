const mongoose=require('mongoose')
const activitySchema=new mongoose.Schema({
    thoughtOfTheDay:{
        type:Number,
        default:5
    },
    thoughtOfTheMonth:{
        type:Number,
    },
    thoughtOfTheYear:{
        type:Number,
    },
    thoughtOfTheWeek:{
        type:Number

    },
    achievementForm:{
        type:Number
    }
})
module.exports=mongoose.model('Activity',activitySchema)