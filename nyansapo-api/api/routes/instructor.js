const express = require('express');
const router = express.Router(); // initialize router
const mongoose = require('mongoose'); // import mongoose for database
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const checkAuth = require("../middleware/check-auth");


// import data base models
const Instructor = require('../models/instructor');
const { restart } = require('nodemon');
const { json } = require('body-parser');

// GET all instructors 
router.get('/', (req, res, next) => {
    Instructor.find()
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

// POST: register an instructor
router.post('/signup', (req, res, next) => {

        // check to see if email is already in database
        Instructor.find({email: req.body.email })
        .exec()
        .then(user => {
            if(user.length >=1 ){ // if there is a user with email
                return res.status(422).json({
                    message: "Email exist"
                });
            }
        })
        .catch();
        
        
        // hash password
        hashpassword = passwordHash.generate(req.body.password); 

        // create an instructor object with the instructor model and request info
        const instructor = new Instructor({
            _id: new mongoose.Types.ObjectId(),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashpassword, 
            timestamp: req.body.timestamp
        }); 
    
        // save the instructor object into database
        instructor.save().then( result => {
            console.log("Saved to Database",result);
    
             // return a response 
            res.status(200).json({
                message: ' Instructor successfully saved',
                createdProduct : result
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
    
   
});

// POST: sign in or login
router.post('/signin', (req, res, next) => {
    Instructor.find({email: req.body.email}) // check to see if user is in database with email
    .exec()
    .then(user => {
        if (user.length <1){ // if email not in database return Auth fail
            return res.status(401).json({
                message: 'Authentification failed'
            });
        }

        // check the password to authenticate user 

        if (passwordHash.verify(req.body.password , user[0].password)){ // if hashed password is verified as true
            const token = jwt.sign({
                email: user[0].email,
                userId: user[0]._id
                }, 
                "nyansapoai",
                {
                    expiresIn:"1h"
                });
            return res.status(200).json({
                message: "Authentification Successful", 
                token: token // send token
            })
        }else{
            return res.status(401).json({ // password doesn't macth 
                message: 'Authentification failed'
            });
        }
    }) 
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
});

// GET a specific intructor by intructor ID
router.get('/:instructorId', checkAuth, (req, res, next) =>{

    // get id from request 
    const id = req.params.instructorId; 

    // query the database with model using the id
    Instructor.findById(id)
    .exec()
    .then(doc => {
        console.log("From Database",doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            console.log(id);
            res.status(404).json({message:'Not a valid Id'})
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    });

});

// PATCH: update intructor info
router.patch('/:instructorId', checkAuth, (req, res, next) =>{

    const id = req.params.instructorId; // get the id

    const updateOps = {};  // get all params that need to be updated
    for (const ops of req.body){
        if (ops.propName === "password"){ // if password needs update hash it
            hashpassword = passwordHash.generate(ops.value); // hash password
            updateOps[ops.propName] = hashpassword;
        }else{
            updateOps[ops.propName] = ops.value; 
        }
    }

    Instructor.update({_id: id}, {$set: updateOps}) // update the params with request values
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    });

});

// DELETE: remove an instructor 
router.delete('/:instructorId', (req, res, next) =>{
    const id = req.params.instructorId;
    Instructor.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json({
            message: "Successfully deleted Instructor",
            instructor : result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });

});

module.exports = router;