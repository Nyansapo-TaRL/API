const sdk = require("microsoft-cognitiveservices-speech-sdk");
const fs = require("fs");

const subscriptionKey = "1c58abdab5d74d5fa41ec8b0b4a62367";
const serviceRegion = "eastus"; 
const endpoint = "275310be-2c21-4131-9609-22733b4e0c04";
var filename = "nyansapo.wav"; // 16000 Hz, Mono

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
   },
   function (err) {
    console.log("cant")
     console.trace("err - " + err);
 
     recognizer.close();
     recognizer = undefined;
   });