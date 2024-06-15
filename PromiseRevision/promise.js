// function myOwnSetTimeOut(callback, duration) {
//   setTimeout(callback, duration);
// }

// myOwnSetTimeOut(function () {
//   console.log("called after sometime");
// }, 1000);

function promisifiedMyOwnSetTimeOut(duration) {
  const p = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, duration);
  });

  return p;
}

const result = promisifiedMyOwnSetTimeOut(5000);
// console.log(result);
// result.then(function () {
//   console.log("called after 5 seconds");
// });

function some() {
  console.log("called the first part");

  const p = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, 5000);
  });

  return p;
}

const mainResult = some();
// console.log(mainResult);
mainResult.then(function () {
  console.log("called after 5 secs");
});

console.log("called the last part");
