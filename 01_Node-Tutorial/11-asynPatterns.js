// const { rejects } = require("assert");
// const { readFile } = require("fs");
// const { resolve } = require("path");
// const util = require("util");
const { readFile, writeFile } = require("fs").promises;

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    console.log(first);
  } catch (err) {
    console.log(err);
  }
};
