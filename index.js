const brain = require("brain.js");
const { log } = require("console");

const network = new brain.NeuralNetwork();

network.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
]);

const output = network.run([1, 0]); 
const output2 = network.run([0, 0]);
const output3 = network.run([0, 1]); 
const output4 = network.run([1, 1]);

console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);

// Float32Array(1) [ 0.9333660006523132 ]
// Float32Array(1) [ 0.04921703785657883 ]
// Float32Array(1) [ 0.9342756271362305 ]
// Float32Array(1) [ 0.09326431900262833 ]
