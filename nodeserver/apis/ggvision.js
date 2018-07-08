require("dotenv").config();
const vision = require("@google-cloud/vision");
const path = require("path");

// Creates a client - change the path to the private key pair
const client = new vision.ImageAnnotatorClient({
  // keyFilename: "/my-project-1530775466840-5bbc99b21b72.json"
  keyFilename: path.resolve(
    __dirname,
    "..",
    "my-project-1530775466840-5bbc99b21b72.json"
  )
});

function exec() {
  client
    .textDetection(
      "https://s3-ap-southeast-1.amazonaws.com/polar-app-image-test/IMG20180708014929.jpg"
    )
    .then(results => {
      const detections = results[0].textAnnotations;
      console.log("Text:");
      detections.forEach(text => console.log(text));
      return Promise.resolve();
    })
    .catch(err => {
      console.error("ERROR:", err);
    });
}

module.exports = {
  exec
};
