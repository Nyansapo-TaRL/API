const express = require('express');
const router = express.Router(); // initialize router
const mongoose = require('mongoose'); // import mongoose for database

// import data base models
const group = require('../models/group');
const { restart } = require('nodemon');
const { json } = require('body-parser');

// GET all students in database 
router.get('/', (req, res, next) => {

});

// POST: register an student
router.post('/', (req, res, next) => {
   
});

// GET a specific student by student ID
router.get('/:groupId', (req, res, next) =>{

});

// PATCH: update student info
router.patch('/:groupId', (req, res, next) =>{

});

// DELETE: remove a student 
router.delete('/:groupId', (req, res, next) =>{

});

module.exports = router;