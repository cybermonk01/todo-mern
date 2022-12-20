const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const connectToDB = async () => {
  await mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((conn) => {
      console.log(`Connected DB: ${conn.connection.host}`);
    })
    .then(console.log("DB connected with a success"))
    .catch((error) => {
      console.log("Db connection failed");
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectToDB;
