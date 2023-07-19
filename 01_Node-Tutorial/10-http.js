const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("about page");
  } else res.end(`<h1>OOPS</h1>`);

  // res.write("Welcome to our home page");
  // res.end();
});

server.listen(5000);
