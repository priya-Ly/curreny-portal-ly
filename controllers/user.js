const User=require('../models/user')
const crypto=require('crypto')
const jwt=require('jsonwebtoken')

const createUser=async(req,res)=>{
    let salt=crypto.randomBytes(16).toString('base64')
    let hash=crypto.createHmac('sha512',salt)
    .update(req.body.password)
    .digest('base64')
    req.body.password=salt + '$' + hash;
    req.body.permissionLevel=1;
    const userData=new User(req.body);
    console.log(userData)
    await userData.save()
    return res.status(200).json({message:'User created',userData})

}

const login=async(req,res)=>{
    try {
        console.log('insiseee')
        const {userID}=req.body;
        let {permissionLevel,email,password,username}=req.body;
        const refreshId=userID+ permissionLevel + 'secret key'
        const salt=crypto.randomBytes(16).toString('base64')
        const hash=crypto.createHmac('sha512',salt).update(refreshId).digest('base64')
        const refresh_token=Buffer.from(hash).toString('base64')
  
        const accessToken=jwt.sign({userID,permissionLevel},'secret key',{expiresIn :'1h'})

        return res.status(201).json({accessToken,refreshToken:refresh_token})
    

    } catch (error) {
        res.status(500).json({ message:error.message });

    }
}

const userAccessToSeeHisActivities=async(req,res)=>{
const existUser=await User.findOne({
    email
})
if(existUser){
    console.log(existUser)
}else{
    return res.status(400).json({message:'user not found'})
}
}

module.exports={
    createUser,
    login
}