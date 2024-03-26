// 

const express = require('express');
const app = express();
const studentRoute = require('./api/routes/student');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require(`cors`);



mongoose.connect("mongodb://localhost:27017/practice")
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect MongoDB',err))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/student',studentRoute);

app.use((req,res,next)=>{
    res.status(404).json({
        error : "bad request"
    });
})

module.exports = app;