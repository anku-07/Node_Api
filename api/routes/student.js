const express = require('express');
const router = express.Router();
const product = require('../model/product');
const mongoose = require('mongoose');
const { route } = require('../../app');


// get all user
router.get('/',(req,res,next) => {
    product.find()
    .then(result => {
        res.status(200).json({
            studentData : result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    })
})

// add new student
router.post('/',(req,res,next) => {
    const student = new product({
        _id : new mongoose.Types.ObjectId,
        name : req.body.name,
        city : req.body.city,
        job : req.body.job,
        phone : req.body.phone,
    });
    student.save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            newStudent : result
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error : err
        })
    })
})

// delete get by id 
router.delete('/:id',(req,res,next) => {
    product.findOneAndDelete({_id:req.params.id})
    .then(result => {
        if(!result){
            return res.status(404).json({
                msg : "Data not found"
            });
        }
        res.status(200).json({
            msg : "Data deleted successfully",
            result : result
        })
    })
})

// get by id
router.get('/:id',(req,res,next) => {
    console.log(req.params.id);
    product.findById(req.params.id)
    .then(result => {
        res.status(200).json({
            studentData : result
        })
    })
    .catch(err => {
        res.status(500).json({
            error : err
        })
    })
})
// get by id and update
router.put('/:id',(req,res,next) => {
    console.log(req.params.id);
    product.findByIdAndUpdate({_id:req.params.id},{
        $set : {
            name : req.body.name,
            city : req.body.city,
            job : req.body.job,
            phone : req.body.phone
        }
    })
    .then(result => {
        console.log(result);
        res.status(200).json({
            newStudent : result
        })
    })
    .catch(err => {
        res.status(500).json({
            error : err
        })
    })
})
module.exports = router;