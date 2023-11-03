const express=require('express')
const connectDB=require('./connection/mongoose')
const userRoute=require('./routes/user')
const activityRouter=require('./routes/activity')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/user',userRoute)
app.use('/api/activity',activityRouter)
const port=6060;
async function start(){
    try{
await connectDB
.then(()=>{
    console.log('connection success')
})
.catch(err =>{
    console.log(err)
})

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})
    }catch(error){
console.log(error)
    }

}
start()
