const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./navbar-app/index.html", "utf-8");
const homeStyles = readFileSync("./navbar-app/styles.css", "utf-8");
const homeImage = readFileSync("./navbar-app/logo.svg", "utf-8");
const homeLogic = readFileSync("./navbar-app/browser-app.js", "utf-8");
// const homePage = readFileSync("./navbar-app/index.html", "utf-8");

const server = http.createServer((req, res) => {
  console.log("Server Started");
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(homePage);
    res.end();
  } //styles
  else if (url === "/styles.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });
    res.write(homeStyles);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, {
      "content-type": "image/svg+xml",
    });
    res.write(homeImage);
    res.end();
  }
  //logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, {
      "content-type": "text/javscript",
    });
    res.write(homeLogic);
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
