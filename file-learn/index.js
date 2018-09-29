const fs = require("fs");
console.log("start");

setImmediate(() => {
    console.log("setImmediate");
});
process.nextTick(() => {
    console.log("process.nextTick");
});

setTimeout(() => {
    console.log("setTimeout 1");
}, 0);
new Promise((resolve, reject) => {
    resolve("promise 1");
}).then(console.log);
setTimeout(() => {
  console.log("setTimeout 2");
}, 0);
new Promise((resolve, reject) => {
  resolve("promise 2");
}).then(console.log);


fs.open(__filename, "r", (err, fd) => {
  console.log("fs.open");
  console.log(fd);
});
console.log("end");
