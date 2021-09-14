const Joi=require('Joi');
const express=require('express');
const mongoose=require('mongoose');
// const app=express();
const stdschema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },

});
const studentsModel = mongoose.model('Student',stdschema);


function StudentsVilidations(std){
    const studentsVal =Joi.object({
        name:Joi.string().min(3).required(),
        age:Joi.number().min(15).max(80).required(),
        gender:Joi.string().min(4).max(50).required()
    });
    return studentsVal.validate(std);
}

exports.studentsModel=studentsModel;

exports.validate=StudentsVilidations;

