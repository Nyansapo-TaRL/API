const express = require('express');
const router = express.Router(); // initialize router
const mongoose = require('mongoose'); // import mongoose for database

// import data base models
const Product = require('../models/assessment');
const { restart } = require('nodemon');
const { json } = require('body-parser');

// GET all assessments
router.get('/', (req, res, next) => {

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