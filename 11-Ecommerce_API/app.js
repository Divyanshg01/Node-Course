require("dotenv").config();
require("express-async-errors");
const express = require("express");

const app = express();

//REST OF THE PACKAGES

const morgan = require("morgan");

app.use(morgan("tiny"));

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
//database
const connectDB = require("./db/connect");
//middleware

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
app.use(express.json());

//
app.get("/", (req, res) => {
  res.send("ecomerce api");
});
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("Server is listening"));
  } catch (error) {
    console.log(error);
  }
};

start();
