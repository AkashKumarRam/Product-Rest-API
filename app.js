// Importing Packages
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

// Importing Routers
const apiRouters = require("./router/apiRouters");

// Creating Express App
const app = express();

// Connecting To MongoDB
mongoose
  .connect(`mongodb+srv://Akash:${process.env.MONGODB_PASSWORD}@productapi.umdv8rv.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log("Mongodb has been connected"))
  .catch((err) => {
    console.log(err);
  });

// Configuring app for JSON and URLs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuring express app to use "apiRouters" Routers
app.use("/", apiRouters);

// Exporting express app
module.exports = app;
