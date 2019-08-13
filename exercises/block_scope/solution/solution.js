'use strict';
var a = 5;
const b = process.argv[2];

if (a === 5) {
  let c = 4;
  console.log(c);  // 4

  const b = 8;
  console.log(b);
} 

console.log(a); // 5
console.log(b);
try {
  c = 1000;
} catch (e) {
  console.log(e);
}

