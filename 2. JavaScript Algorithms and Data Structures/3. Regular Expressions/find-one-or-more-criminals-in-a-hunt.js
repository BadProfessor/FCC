let text = "P1P5P4CCCP2P6P3";

let reCriminals = /C+/g; // Change this line

let result = text.match(reCriminals);


console.log(result);
console.log(reCriminals);