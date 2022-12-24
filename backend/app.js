require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const TodoRoutes = require("./routes/TodoRoutes");
const connectToDB = require("./config/database");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
const cors = require("cors");
const app = express();

//Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

cloudinary.config({
  // cloud_name: processs.env.CLOUD_NAME
  cloud_name: "dx78ez1cn",
  api_key: "833539611812658",
  api_secret: "dVILI7XcxNCjdJtRiEc2hCmiIqI",
});
connectToDB();
app.use("/", userRoutes);
app.use("/", TodoRoutes);

app.post("/mypost", async (req, res) => {
  console.log(req.body);

  console.log(req.files);

  let result;
  let imageArray = [];

  //  for multiple file upload
  if (req.files) {
    for (let index = 0; index < req.files.samplefile.length; index++) {
      let result = await cloudinary.v2.uploader.upload(
        req.files.samplefile[index].tempFilePath,
        {
          folder: "users",
        }
      );

      imageArray.push({
        public_id: result.public_id,
        secure_url: result.secure_url,
      });
    }
  }

  // case for a single file
  // let file = req.files.samplefile;

  // result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
  //   folder: "users",
  // });

  console.log(imageArray);
  details = {
    name: req.body.name,
    email: req.body.email,
    result,
    imageArray,
  };
  res.send(details);
});

module.exports = app;
