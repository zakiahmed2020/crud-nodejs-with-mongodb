const express=require('express');
const mongoose=require('mongoose');
const route=express.Router();
const {courseModel}=require('../models/courses.model');
// const {studentsModel,validate}=require('../models/stdModel');

route.get('/',async function(req, res) {
  const listofCourses=await courseModel.find()
    // .populate('StdID','name')
    .select('name StdID');
    //kk
    res.send(listofCourses);
});

route.post('/',async function(req, res) {

        const courseInfo=new courseModel({
            name:req.body.name,
            StdID:req.body.StdID,
        });

        const reslut= await courseInfo.save();
        res.send(reslut);
})

module.exports =route;
