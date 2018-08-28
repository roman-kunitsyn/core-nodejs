var tex2svg = require("tex-equation-to-svg");
var opts = {
  inline: true
};

var convert = tex2svg.factory(opts, clbk);

// convert("y = mx + b");
// convert("z = \\frac{1}{2}");
convert("w = \\sum_{i=0}^{n} x_i");

function clbk(error, svg) {
  if (error) {
    throw error;
  }
  console.log(svg);
}
