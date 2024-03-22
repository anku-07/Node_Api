const express = require('express');
const app = express();


app.use('/',(req,res,next) => {
    console.log("I am middleware");
    res.status(200).json({
        msg : "App is working"
    })
})

app.use((req,res,next)=>{
    res.status(404).json({
        error : "bad request"
    });
})

module.exports = app;