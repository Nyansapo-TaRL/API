const express = require('express');
const router = express.Router(); // initialize router
const mongoose = require('mongoose'); // import mongoose for database

// import data base models
const Assessment = require('../models/assessment');
const { restart } = require('nodemon');
const { json } = require('body-parser');

// GET all assessments
router.get('/', (req, res, next) => {
    Assessment.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs) // return all docs
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

});

// POST: register an assessment into database
router.post('/', (req, res, next) => {
   
});

// GET a specific assessment info from database
router.get('/:intructorId', (req, res, next) =>{

});

// DELETE: remove an assessment info from database ( This might not be available to all users[Instructors])
router.delete('/:productId', (req, res, next) =>{

});

module.exports = router;