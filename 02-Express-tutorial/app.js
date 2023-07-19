const http = require("http");
const { readFileSync } = require("fs");

const server = http.createServer((req, res) => {
  console.log("Server Started");
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write("<h1>404 Page</h1>");
    res.end();
  }
});

server.listen(5000);
