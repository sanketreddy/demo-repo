let arr = [1, 2, 3, 4];

function filteringLogic(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const evenValues = arr.filter(filteringLogic);

console.log(evenValues);
