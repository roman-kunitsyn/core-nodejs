class Field {
  constructor(ranges, steps) {
    this.ranges = ranges;
    this.steps = steps;
    this.isGenerated = false;
    this.field = null;
  }
  generateField() {
    if (!this.isGenerated) {
      let field = [];
      let maxIndexX, maxIndexY, maxIndexZ;
      maxIndexX = this.generateMaxIndex("x");
      maxIndexY = this.generateMaxIndex("y");
      maxIndexZ = this.generateMaxIndex("z");
      for (let i = 0; i <= maxIndexX; i++) {
        for (let j = 0; j <= maxIndexY; j++) {
          for (let k = 0; k <= maxIndexZ; k++) {
            field.push(
              new Point(
                {
                  x: this.ranges.x[0] + i * this.steps.x,
                  y: this.ranges.y[0] + j * this.steps.y,
                  z: this.ranges.z[0] + k * this.steps.z
                },
                [i, j, k]
              )
            );
          }
        }
      }
      this.field = field;
      this.isGenerated = true;
    }
    return this;
  }
  generateMaxIndex(indexKey) {
    let maxIndex =
      (Math.abs(this.ranges[indexKey][0]) +
        Math.abs(this.ranges[indexKey][1])) /
      this.steps[indexKey];
    return maxIndex;
  }
}

class Point {
  constructor(coordinats, index = [0, 0, 0]) {
    this.x = coordinats.x;
    this.y = coordinats.y;
    this.z = coordinats.z;
    this.index = index;
  }
}

module.exports = Field;
