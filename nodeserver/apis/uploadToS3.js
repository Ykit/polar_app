/**
let canvas = document.getElementById("imagePreviewChatFooter");
let dataUrl = canvas.toDataURL("image/jpeg");
let blobData = dataURItoBlob(dataUrl);
let fileName = file.name;
var params = { Key: fileName, ContentType: file.type, Body: blobData };
bucket.upload(params, function(err, data) {
  console.log(data);
  console.log(err ? "ERROR!" : "UPLOADED.");
});
*/

function s3Upload(params, bucket) {
  return new Promise((resolve, reject) => {
    bucket.upload(params, (err, data) => {
      if (!err) {
        console.log(`Successfully uploaded: ${data}`);
        resolve(data);
      } else {
        reject(new Error(`Error occurs in s3Upload: ${err}`));
      }
    });
  });
}

function dataURItoBlob(dataURI) {
  const binary = atob(dataURI.split(",")[1]);
  const array = [];
  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], { type: "image/jpeg" });
}

module.exports = {
  dataURItoBlob,
  s3Upload
};
