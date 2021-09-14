const mongoose = require('mongoose');
const express=require('express');
const route=require('./route/route.std');
const coursesRoute=require('./route/route.courses');
const app=express();
app.use(express.json());

app.use('/api/std',route);
app.use('/api/courses',coursesRoute);



mongoose.connect("mongodb://localhost/school")
.then(()=>console.log("mongoDB connected sucessfuly"))
.catch(err => console.log("error connecting",err));



const port=process.env.PORT ||6000
app.listen(port,()=>{
    console.log(`running port ${port}`)
})