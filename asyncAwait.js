function sanketAsyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
}

async function result() {
  let result = await sanketAsyncFunction();
  console.log(result, "inside result");
}

result();
