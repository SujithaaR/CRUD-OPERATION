const express = require('express');
const {addUser,getUsers,getUser,updateUser,deleteUser}=require('../controller/userController');
const route=express.Router();

route.post('/',addUser);
route.get('/',getUsers);
route.get('/:id',getUser);
route.put('/:id',updateUser);
route.delete('/:id',deleteUser);

module.exports=route;