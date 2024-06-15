let d = new Promise((resolve) => {
  setTimeout(() => {
    resolve("foo");
  }, 1000);
});

function callback(data) {
  console.log(data);
}

console.log(d);

d.then(callback);
