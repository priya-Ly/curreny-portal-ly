const {createUser,login}=require('../controllers/user')
const{validJwt,minimumPermissionLevelAcquired}=require('../validation/authorization')
const jwt=require('jsonwebtoken')
const SUPERADMIN=4;
const ADMIN=2
const User=1
const express=require('express')
const router=express.Router()
router.post('/',createUser)
router.post('/token',login)
router.get('/auth',validJwt,minimumPermissionLevelAcquired)
module.exports=router