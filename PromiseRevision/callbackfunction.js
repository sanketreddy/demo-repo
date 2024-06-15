function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function quad(n) {
  return n * n * n * n;
}

function sumOfSomething(a, b, fn) {
  let result1 = fn(a);
  let result2 = fn(b);

  let mainResult = result1 + result2;
  return mainResult;
}

let result = sumOfSomething(1, 2, quad);
console.log(result);
