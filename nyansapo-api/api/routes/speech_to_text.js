const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require("fs");
const express = require('express');
const router = express.Router(); // initialize router
const mongoose = require('mongoose'); // import mongoose for database



   // GET all students in database 
router.get('/', (req, res, next) => {

});

// POST: register an student
router.post('/', (req, res, next) => {
  try{
      const subscriptionKey = "1c58abdab5d74d5fa41ec8b0b4a62367";
      const serviceRegion = "eastus"; 
      const endpoint = "275310be-2c21-4131-9609-22733b4e0c04";
      var filename = "speech_files/speech_001_2.wav"; // 16000 Hz, Mono

      // create the push stream we need for the speech sdk.
      var pushStream = sdk.AudioInputStream.createPushStream();
        
      // open the file and push it to the push stream.
      try {
          fs.createReadStream(filename).on('data', function(arrayBuffer) {
              pushStream.write(arrayBuffer.slice());
            }).on('end', function() {
              pushStream.close();
            });
      } catch (error) {
          console.log(error);
      }


      var speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
      
      // setting the recognition language to English.
      speechConfig.speechRecognitionLanguage = "en-US";
      // set config to nyansapo endpoint
      speechConfig.endpointId = endpoint;

      // create audio config from audio
      var audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);

      // create the speech recognizer.
      var recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

      console.log("Now recognizing from: " + filename);
        
      // start the recognizer and wait for a result.
      recognizer.recognizeOnceAsync(
        function (result) {
          console.log(result);
          recognizer.close();
          recognizer = undefined;

          res.status(200).json(result.privText); // return response
        },
        function (err) {
          console.log("cant")
          console.trace("err - " + err);
      
          recognizer.close();
          recognizer = undefined;
        });
    } catch (error) {
        res.status(500).json(error);
    }

   
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