const Field = require("./field");

let ranges = {
  x: [-1, 1],
  y: [-1, 1],
  z: [-1, 1]
};

let steps = {
  x: 0.5,
  y: 0.5,
  z: 0.5
};

let filed = new Field(ranges, steps);
console.log(filed);
filed.generateField();
console.log(filed);
