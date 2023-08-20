require("dotenv").config();

//async errors
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

const notFoundMiddleWare = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");

//middleware
app.use(express.json());

//Routes

app.get("/", (req, res) => {
  res.send("<h1>Store Api begin <a href='/api/v1/products'>Products</a></h1>");
});

app.use("/api/v1/products", productsRouter);

//Product route

app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("Server is listening"));
  } catch (error) {
    console.log(error);
  }
};
start();
