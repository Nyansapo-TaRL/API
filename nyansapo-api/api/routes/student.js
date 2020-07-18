const express = require('express');
const router = express.Router(); // initialize router
const mongoose = require('mongoose'); // import mongoose for database

// import data base models
const Student = require('../models/student');
const { restart } = require('nodemon');
const { json } = require('body-parser');
const checkAuth = require('../middleware/check-auth');

// GET all students in database 
router.get('/', checkAuth, (req, res, next) => {
    Student.find()
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

// POST: register an student
router.post('/', checkAuth, (req, res, next) => {

    // create an student object with the instructor model and request info
    const student = new Student({
        _id: new mongoose.Types.ObjectId(),
        instructor_id: req.body.instructor_id, 
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        gender: req.body.gender,
        notes: req.body.notes,
        learning_level: req.body.learning_level
    }); 

    // save the instructor object into database
    student.save().then( result => {
        console.log("Saved to Database",result);

            // return a response 
        res.status(200).json({
            message: 'Student successfully saved',
            createdProduct : result
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
   
});

// GET a specific instructors students by student ID
router.get('/instructor/:instructorId', checkAuth, (req, res, next) =>{

});

// GET a specific student by student ID
router.get('/:studentId', checkAuth, (req, res, next) =>{

});

// PATCH: update student info
router.patch('/:studentId', checkAuth, (req, res, next) =>{

});

// DELETE: remove a student 
router.delete('/:studentId', checkAuth, (req, res, next) =>{

});

module.exports = router;