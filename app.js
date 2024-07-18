const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoute=require('./router/userRoute');
dotenv.config();

const app=express();
const port=process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    console.log("GETTING REQUEST FROM THE CLIENT");
    res.send("hello from server");
}) 

app.use('/api/user',userRoute);

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("database connected successfully");
    app.listen(port,()=>{
        console.log(`server is listening on port ${port}`);
    })
})
.catch(()=>{
    console.log("database connection failed");
})

