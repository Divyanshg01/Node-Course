const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());
const posts = [
  {
    username: "divyansh",
    title: "post 1",
  },
  {
    username: "jin",
    title: "post 2",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
    
  jwt.sign()
});
app.listen(3000);
