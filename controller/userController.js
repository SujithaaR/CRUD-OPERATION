const userModel= require('../models/userModel');

const addUser = async(req,res)=>{
    try{
        const user = await userModel.create(req.body);
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
const getUsers=async(req,res)=>{
    try{
        const user=await userModel.find({});
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
const getUser=async(req,res)=>{
    try{
        const {id} =req.params;
        const user=await userModel.findById(id);
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
const updateUser=async(req,res)=>{
     try{
        const {id}=req.params;
       const updateUser = await userModel.findByIdAndUpdate(id,req.body);
       res.status(200).json(updateUser);
     }
     catch(error){
        res.status(500).json({message:error.message});
     }
}
const deleteUser = async(req,res)=>{
    try{
        const {id} = req.params;
        const deleteUser = await userModel.findByIdAndDelete(id);
        res.status(200).json(deleteUser);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
module.exports={
    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};