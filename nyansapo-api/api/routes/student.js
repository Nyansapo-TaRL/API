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
router.post('/signup', checkAuth, (req, res, next) => {
   
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