const Joi=require('Joi');
const express=require('express');
const mongoose=require('mongoose');
const route=express.Router();
const {studentsModel,validate}=require('../models/stdModel');


route.get('/', async (req,res)=>{
    // res.send("welcome sir");
    const data=await studentsModel.find();
    res.send(data);
})
route.post('/', async function(req, res){
    const {error}=validate(req.body);
    console.log(error);
   
    if(error) return res.status(404).send(error.details[0].message);

let studentsInfo=new studentsModel({
    name:req.body.name,
    age:req.body.age,
    gender:req.body.gender,
})
studentsInfo=await studentsInfo.save();
res.send(studentsInfo);
});
route.delete('/:id', async (req, res)=>{
  
    const info=await studentsModel.findByIdAndRemove(req.params.id);
    if(!info) return res.status(404).send("given id was not found");
    res.send(info);
});

route.put('/:id', async (req, res)=>{
    // let {cID}=mongoose.Types.ObjectId(req.params.id);
    const {id} = req.params; 
    const checkingID = await studentsModel.findById(id.trim());
    if(!checkingID) return res.status(404).send("given id was not found");

    const UpdatedInfo = await studentsModel.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            age:req.body.age,
            gender:req.body.gender,
        },{new: true});
        // if(!UpdatedInfo) return res.status(404).send("given id was not found");
        res.send(UpdatedInfo);


});

module.exports=route;