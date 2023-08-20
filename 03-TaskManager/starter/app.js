const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notfound = require("./middleware/not-found");
const errorHandlererMiddleware = require("./middleware/error-handler");
require("dotenv").config();
//middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(errorHandlererMiddleware);
//routes
// app.get("/hello", (req, res) => {
//   res.send("task manager app");
// });

app.use("/api/v1/tasks", tasks);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
//put -> patch
