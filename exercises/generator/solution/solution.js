const max = process.argv[2];
let FizzBuzz = function* (){
  let num = 1;
  while (num <= max) {
    let value = num;
    num++;
    if (value % 15 === 0) {
      value = 'FizzBuzz';
    } else if (value % 3 === 0) {
      value = 'Fizz';
    } else if (value % 5 === 0) {
      value = 'Buzz';
    }
    yield value;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}

