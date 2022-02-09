


const express=require('express')
require('./db/mongoose')
const request=require('request')
const path=require('path')
const userRouter =require('./routers/user')
const taskRouter =require('./routers/task')

const app=express()
const port=process.env.PORT
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port,()=>{
    console.log('server working '+port)
})