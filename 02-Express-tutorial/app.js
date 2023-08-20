const express = require("express");
const app = express();
let { people } = require("./data");

//Static assets

app.use(express.static("./methods-public"));

//Parse form data

app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  const { name } = req.body;

  res.send(`Hello ${name}`);
  // console.log(req.body);
});

app.use(express.json);

app.post("/api/people", (req, res) => {
  const { name } = req.body;

  res.status(201).json({ success: true, person: name });
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// const logger = require("./logger");
// const authorize = require("./authorize");

// //req => middleware  =>res
// // app.use("/api", logger);
// app.use([logger, authorize]);

// app.get("/", (req, res) => {
//   res.send("home");
// });
// app.get("/about", (req, res) => {
//   res.send("About");
// });

// const { products } = require("./data");

// app.get("/", (req, res) => {
//   res.send('<h1>Home page</h1><a href ="/api/products">Products</a> ');
// });
// app.get("/api/products", (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product;
//     return { id, name, image };
//   });
//   res.json(newProducts);
// });

// app.get("/api/v1/query", (req, res) => {
//   console.log(req.query);
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];
//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search);
//     });
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, +limit);
//   }
//   res.status(200).json(sortedProducts);

//   res.send("<h1>Hello</h1>");
// });
// // query?search=a&limit=2&name=john
// app.get("/api/product/:productID", (req, res) => {
//   const { productID } = req.params;
//   const singleProduct = products.find((product) => product.id === +productID);
//   res.json(singleProduct);
// });
app.listen(5000, () => {
  console.log("Server is listening");
});

// const express = require("express");
// const path = require("path");
// const app = express();
// //setup static and middleware

// app.use(express.static("./public"));

// //geting home page request
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

// app.listen(5000, () => {
//   console.log("Server is listening");
// });

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
