const eventEmitter = require("events");

const customEmitter = new eventEmitter();

customEmitter.on("response", () => {
  console.log(`data recieved`);
});

customEmitter.on("response", () => {
  console.log(`Some other recieved`);
});

customEmitter.emit("response");
