require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const TodoRoutes = require("./routes/TodoRoutes");
const connectToDB = require("./config/database");
const app = express();

//Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.use("/", userRoutes);
app.use("/", TodoRoutes);

module.exports = app;
