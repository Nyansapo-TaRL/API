const express = require('express');
const router = express.Router(); // initialize router
const mongoose = require('mongoose'); // import mongoose for database

// import data base models
const Product = require('../models/instructor');
const { restart } = require('nodemon');
const { json } = require('body-parser');

// GET all instructors 
router.get('/', (req, res, next) => {

});

// POST: register an instructor
router.post('/', (req, res, next) => {
   
});

// GET a specific intructor by intructor ID
router.get('/:intructorId', (req, res, next) =>{

});

// PATCH: update intructor info
router.patch('/:productId', (req, res, next) =>{

});

// DELETE: remove an instructor 
router.delete('/:productId', (req, res, next) =>{

});

module.exports = router;