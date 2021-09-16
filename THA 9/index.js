const express= require('express');

const app=express();
app.set("view",path.join(_dirname,"views"));
app.set("view engine","jade");

const path=require('path');
console.log(_dirname);
app.use('/',(req,res) => {
    //res.sendFile(path.join(_dirname,"public/download.jpg"));    //for send file 
    //res.download(path.join(_dirname,"public/download.jpeg"), "flower.jpeg")  //for download
    //res.render('index',{title:"Express"})
    res
    .status(201)
    .cookie('token','test',{
        expire:new Date(Date.now()+8*3600000)
    })
    .cookie('hello','hello')
    .redirect(301,'/admin')
})
app.listen(5000);