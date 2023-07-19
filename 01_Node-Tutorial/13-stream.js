const { createReadStream } = require("fs");

const stream = createReadStream("./content/g.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

stream.on("data", (result) => {});
stream.on("error", (err) => {
  console.log(err);
});
