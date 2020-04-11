const express=require('express')
const app=express()
const PORT=5000;
const route=require('./router/router')
const mongoose=require('mongoose')
const config=require('./config/config')
const bodyParser=require('body-parser')


app.use(bodyParser.urlencoded({extended:true}))
app.use('/',route)

mongoose.Promise=global.Promise
mongoose.connect(config.DB,{useNewUrlParser:true}).then(myRes=>{
    console.log("Mongoose Connection Success")
},
err=>{
    console.log("Mongoose Connection Failed")
})





app.listen(PORT,()=>{
    console.log(`The Server is up and running at Port ${PORT}`)
})




