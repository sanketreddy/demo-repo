class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }

  static myType() {
    console.log("Animal");
  }

  speak() {
    console.log(`${this.speaks} makes a noise`);
  }
}

let animal1 = new Animal("dog", 4, "bhow");
let animal2 = new Animal("cat", 4, "meow");

console.log(Animal.myType());
