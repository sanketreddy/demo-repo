const ages = [1000, 896, 6543, 9065743];

function biggestNumber(ages) {
  let biggestNum = ages[0];

  for (let i = 1; i < ages.length; i++) {
    if (ages[i] > biggestNum) {
      biggestNum = ages[i];
    }
  }
  return biggestNum;
}

let result = biggestNumber(ages);
console.log(result);
