//Modules
const { john, peter } = require("./3-names");
const sayHi = require("./4-utils");
const data = require("./5-alternative");
console.log(data);
// console.log(names);
sayHi("susan");
sayHi(peter);
sayHi(john);
