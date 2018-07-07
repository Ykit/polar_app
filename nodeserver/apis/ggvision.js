const vision = require("@google-cloud/vision");

// Creates a client - change the path to the private key pair
const client = new vision.ImageAnnotatorClient({
  keyFilename: "/path/to/keyfile.json"
});

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const fileName = 'Local image file, e.g. /path/to/image.png';

// Performs text detection on the local file

function exec() {
  client
    .textDetection(fileName)
    .then(results => {
      const detections = results[0].textAnnotations;
      console.log("Text:");
      detections.forEach(text => console.log(text));
    })
    .catch(err => {
      console.error("ERROR:", err);
    });
}

module.exports = {
  exec
};
