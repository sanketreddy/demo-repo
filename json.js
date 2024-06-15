const users = {
  name: "sanket",
  age: "24",
  gender: "male",
};

const stringObject = JSON.stringify(users);
// console.log(stringObject);
// console.log(stringObject["name"]);
console.log(typeof stringObject);
const parseNormalObject = JSON.parse(stringObject);
console.log(parseNormalObject);
