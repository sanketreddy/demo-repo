setTimeout(function () {
  console.log("hi there is called after one second");
  setTimeout(() => {
    console.log("hi there is called after two seconds");
  }, 2000);
}, 1000);
