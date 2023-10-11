const brain = require("brain.js");
const { log } = require("console");

const network = new brain.NeuralNetwork();

network.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
]);

const output = network.run([1, 0]); // [0.987]
const output2 = network.run([0, 0]); // [0.987]
const output3 = network.run([0, 1]); // [0.987]
const output4 = network.run([1, 1]); // [0.987]

console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);
