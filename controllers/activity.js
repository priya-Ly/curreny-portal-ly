const Activity=require('../models/activity')
const createActivity=async(req,res)=>{
    const{thoughtOfTheDay,
        thoughtOfTheMonth,
        thoughtOfTheYear,
        thoughtOfTheWeek,
        achievementForm}=req.body;
        const activity=new Activity(
            req.body
        )
        await activity.save()
        return res.status(201).json({message:'Activity created by user',activity})
}

const getAllactivities=async(req,res)=>{
    const allActivities=await Activity.find({})
console.log(allActivities)
return res.status(200).json({message:'All users',total:allActivities.length,allActivities})
}



module.exports={createActivity,getAllactivities}