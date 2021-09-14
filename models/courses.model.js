const express=require('express');
const mongoose=require('mongoose');

const courseSchema= new mongoose.Schema({
    name:String,
    StdID:{
        
        type:mongoose.Schema.Types.ObjectId,
         ref:"studentsModel"
     },
  
});
const courseModel = mongoose.model('Course',courseSchema);
exports.courseModel=courseModel;