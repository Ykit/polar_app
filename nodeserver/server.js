const express = require("express");

const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const uploadService = require("./apis/upload");
const Receipt = require("./models/receipt");

const PORT = "3000";
const HOST = "127.0.0.1";

/** Statics path */
const CLIENT = path.resolve(process.cwd(), "dist", "index.html");

app.use(cors());

app.use(express.static(path.resolve(__dirname, "dist")));
/** parse application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: false }));

/** parse application/json */
app.use(bodyParser.json());

/** React frontend root */
app.get("/", (req, res) => {
  res.sendFile(CLIENT);
});

/** Computer Vision API
 * 1. Save to MS object storage
 * 2. Upload image to MS computer vision api
 * 3. Process the data from computer vision api
 * 4. Save to database
 */
app.post("/image", (req, res) => {
  const { payload } = req.body;
  console.log(payload);
  uploadService.init();
  res.json({
    data: {
      test: "Hello world",
      payload
    }
  });
});

// force: true will drop the table if it already exists
Receipt.sync().then(() =>
  // Table created
  Receipt.create({
    location: "Central, Hong Kong"
  })
);

app.listen(PORT, () => {
  console.log(`Server is running at ${HOST} ON ${PORT}`);
});
