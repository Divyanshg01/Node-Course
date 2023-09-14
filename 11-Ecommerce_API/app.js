const dotenv = require("dotenv");

dotenv.config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
mongoose.set("strictQuery", true);
//database
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    mongoose.set("strictQuery", false);
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log("Started Listening"));
  } catch (error) {
    console.log(error);
  }
};

start();
