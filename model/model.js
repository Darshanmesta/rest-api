const mongoose=require('mongoose')
const Schema=mongoose.Schema

let Product= new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    address:{type:String,required:true}

},
{
    collection:"resColl"
}
)


module.exports=mongoose.model('Product',Product)