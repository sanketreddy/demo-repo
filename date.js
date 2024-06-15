const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

function calculateSum() {
  let a = 0;
  for (let i = 0; i < 10000000000; i++) {
    a = a + i;
  }

  return a;
}

let result = calculateSum();

const afterDate = new Date();
const afterDateInMs = afterDate.getTime();

console.log(afterDateInMs - beforeTimeInMs);
