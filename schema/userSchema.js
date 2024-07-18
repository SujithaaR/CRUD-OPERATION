const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"PLEAE ENTER YOUR NAME"]
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
       default:''
    },
},
    {timeStamp:true}
)

module.exports=userSchema;