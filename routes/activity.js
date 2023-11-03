const express=require('express')
const router=express.Router()
const SUPERADMIN=4;
const ADMIN=2
const User=1
const {createActivity, getAllactivities}=require('../controllers/activity')
const { validJwt, minimumPermissionLevelAcquired } = require('../validation/authorization')
router.post('/',validJwt,minimumPermissionLevelAcquired(SUPERADMIN),createActivity)
router.get('/',validJwt,minimumPermissionLevelAcquired(SUPERADMIN),getAllactivities)
module.exports=router;

